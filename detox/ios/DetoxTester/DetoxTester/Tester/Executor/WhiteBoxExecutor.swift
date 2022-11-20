//
//  WhiteBoxExecutor.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation
import UIKit

import DetoxInvokeHandler

/// Protocol for handling application operations directly from the app itself, in a "white-box"
/// manner.
///
/// - Note in order to be able to interact with the application using white-box handling, the app
///  must have Detox framework in its dependencies.
class WhiteBoxExecutor {
  /// Stored handlers.
  fileprivate static var handlers: [String: WhiteBoxExecutor] = [:]

  /// Used to send messages to the target application (through the injected Detox dylib).
  private let messageSender: AppClientMessageSenderProtocol

  /// Initializes the executor with the given `messageSender`.
  private init(messageSender: AppClientMessageSenderProtocol) {
    self.messageSender = messageSender
  }

  /// Sends a message with given `message` to the application using the internal Detox framework
  /// and synchronically waits for a response.
  func execute(_ message: Message) -> Response {
    switch message {
      case .reloadReactNative:
        send("reloadReactNative", andExpectTo: "reactNativeDidReload")
        return .completed

      case .shakeDevice:
        send("shakeDevice", andExpectTo: "deviceDidShake")
        return .completed

      case .captureViewHierarchy(let viewHierarchyURL):
        let message = createMessage(
          type: "captureViewHierarchy",
          params: [
            "viewHierarchyURL": AnyCodable(viewHierarchyURL)
          ]
        )

        let result = send(message, andExpectToType: "didCaptureViewHierarchy", messageId: 0)
        let error = result["error"] as? String

        return error != nil ? .completedWithError(message: error!) : .completed

      case .waitUntilReady:
        send("waitUntilReady", andExpectTo: "isReady")
        return .completed

      case .setSyncSettings(let maxTimerWait, let blacklistURLs, let disabled):
        let message = createMessage(
          type: "setSyncSettings",
          params: [
            "maxTimerWait": maxTimerWait != nil ? AnyCodable(maxTimerWait!) : nil,
            "blacklistURLs": blacklistURLs != nil ? AnyCodable(blacklistURLs!): nil,
            "disabled": disabled != nil ? AnyCodable(disabled!) : nil
          ]
        )

        let _ = send(message, andExpectToType: "didSetSyncSettings", messageId: 0)

        return .completed

      case .setDatePicker(let date, let element):
        let message = createMessage(
          type: "setDatePicker",
          params: [
            "timeIntervalSince1970": AnyCodable(date.timeIntervalSince1970),
            "elementID": AnyCodable(element.identifier),
            "elementFrame": AnyCodable(NSCoder.string(for: element.frame))
          ]
        )

        let _ = send(message, andExpectToType: "didSetDatePicker", messageId: 0)
        return .completed

      case .verifyVisibility(let element, let threshold):
        // TODO: Element ID + frame
        let message = createMessage(
          type: "verifyVisibility",
          params: [
            "threshold": AnyCodable(threshold),
            "elementID": AnyCodable(element.identifier),
            "elementFrame": AnyCodable(NSCoder.string(for: element.frame))
          ]
        )

        let result = send(message, andExpectToType: "didVerifyVisibility", messageId: 0)
        let isVisible = (result["isVisible"] as! NSNumber).boolValue

        return .boolean(isVisible)

      case .verifyText(let element, let text):
        let message = createMessage(
          type: "verifyText",
          params: [
            "text": AnyCodable(text),
            "elementID": AnyCodable(element.identifier),
            "elementFrame": AnyCodable(NSCoder.string(for: element.frame))
          ]
        )

        let result = send(message, andExpectToType: "didVerifyText", messageId: 0)
        expectLog("result for verify text: \(result)")
        let hasText = (result["hasText"] as! NSNumber).boolValue

        return .boolean(hasText)

      case .findElementsByText(let text):
        let message = createMessage(
          type: "findElementsByText",
          params: ["text": AnyCodable(text)]
        )

        whiteExecLog("TEMP LOG: waiting for result.... message: \(message)")

        let result = send(message, andExpectToType: "elementsDidFound", messageId: 0)

        whiteExecLog("TEMP LOG: result got: \(String(describing: result))")
        let elementsIDsAndFrames: [ElementIdentifierAndFrame] = (
          result["elementsIDsAndFrames"] as? [[String: String]] ?? []
        ).map {
          return ElementIdentifierAndFrame(
            identifier: $0["identifier"],
            frame: $0["frame"]
          )
        }

        return elementsIDsAndFrames.count > 0 ?
          .identifiersAndFrames(elementsIDsAndFrames) :
          .failed(reason: "could not find element with text: \(text)")

      case .requestCurrentStatus:
        let message = createMessage(type: "requestCurrentStatus")

        let result = send(message, andExpectToType: "currentStatusResult", messageId: 0)

        guard let statusResult = result["status"] as? [String: Any] else {
          whiteExecLog("current-status result is invalid: \(result)", type: .error)
          fatalError("current-status result is invalid")
        }

        return .status(statusResult.mapValues { AnyCodable($0) })

      case .longPressAndDrag(
        let duration,
        let normalizedPositionX,
        let normalizedPositionY,
        let targetElement,
        let normalizedTargetPositionX,
        let normalizedTargetPositionY,
        let speed,
        let holdDuration,
        let element
      ):
        let message = createMessage(
          type: "longPressAndDrag",
          params: [
            "elementID": AnyCodable(element.identifier),
            "elementFrame": AnyCodable(NSCoder.string(for: element.frame)),
            "targetElementID": AnyCodable(targetElement.identifier),
            "targetElementFrame": AnyCodable(NSCoder.string(for: targetElement.frame)),
            "duration": AnyCodable(duration),
            "normalizedPositionX": (normalizedPositionX != nil) ?
                AnyCodable(normalizedPositionX!) : nil,
            "normalizedPositionY": (normalizedPositionY != nil) ?
                AnyCodable(normalizedPositionY!) : nil,
            "normalizedTargetPositionX": (normalizedTargetPositionX != nil) ?
                AnyCodable(normalizedTargetPositionX!) : nil,
            "normalizedTargetPositionY": (normalizedTargetPositionY != nil) ?
                AnyCodable(normalizedTargetPositionY!) : nil,
            "speed": (speed != nil) ? AnyCodable(speed!.rawValue) : nil,
            "holdDuration": (holdDuration != nil) ? AnyCodable(holdDuration!) : nil
          ]
        )

        let _ = send(message, andExpectToType: "didLongPressAndDrag", messageId: 0)
        return .completed

      case .requestAttributes(let elements):
        // TODO: implement in the white-box side.
        whiteExecLog("get-attributes not implemented yet", type: .error)

        let message = createMessage(
          type: "getAttributes",
          params: [
            "elementIDsAndFrames": AnyCodable(elements.map { [
              "identifier": AnyCodable($0.identifier),
              "frame": AnyCodable($0.frame)
            ] })
          ]
        )

        let attributes = send(message, andExpectToType: "attributes", messageId: 0)["values"]!
        return .elementsAttributes(attributes as! [[String: AnyHashable]])
    }
  }

  private func send(_ stringMessage: String, andExpectTo stringExpected: String) {
    send(
      createMessage(type: stringMessage),
      andExpectTo: createMessage(type: stringExpected)
    )
  }

  private func createMessage(
    type: String, params: [String: AnyCodable] = [:], messageId: Int = 0
  ) -> [String: AnyCodable] {
    return [
      "type": AnyCodable(type),
      "params": AnyCodable(params),
      "messageId": AnyCodable(messageId)
    ]
  }

  private func send(_ message: [String: AnyCodable], andExpectTo expected: [String: AnyCodable]) {
    let response = send(message)

    if response != expected {
      whiteExecLog(
        "expected to have message with type `\(String(describing: expected))`, " +
        "got result: \(String(describing: response))",
        type: .error
      )
      fatalError("Got unexpected result for white-box message")
    }
  }

  private func send(_ message: [String: AnyCodable]) -> [String: AnyCodable] {
    var result: Data?
    do {
      result = messageSender.sendMessageToClient(try JSONEncoder().encode(message))
    }
    catch {
      whiteExecLog("failed to send the message `\(message)`", type: .error)
      fatalError("Failed to create a new message")
    }

    guard let result = result else {
      whiteExecLog("response for `\(message)` is empty", type: .error)
      fatalError("Response for `\(message)` is empty")
    }

    var decoded: [String: AnyCodable]!
    do {
      decoded = try JSONDecoder().decode([String: AnyCodable].self, from: result)
    }
    catch {
      whiteExecLog(
        "response for `\(message)` is invalid (can't be decoded): \(result)",
        type: .error
      )
      fatalError("Response for `\(message)` is invalid")
    }

    return decoded
  }

  private func send(
    _ message: [String: AnyCodable],
    andExpectToType expectedType: String, messageId expectedMessageId: Int
  ) -> [String: Any] {
    let response = send(message)

    guard
      response["type"]?.value as? String == expectedType,
      response["messageId"]?.value as? Int == expectedMessageId
    else {
      whiteExecLog(
        "expected to have message with type `\(String(describing: expectedType))` " +
        "and message-id: `\(expectedMessageId)`, " +
        "got result: \(String(describing: response))",
        type: .error
      )
      fatalError("Got unexpected result for white-box message")
    }

    guard let params = response["params"]?.value as? [String: Any] else {
      whiteExecLog(
        "got result with invalid params: \(String(describing: response["params"]))",
        type: .error
      )

      fatalError("Got unexpected result for white-box message")
    }

    return params
  }
}

extension WhiteBoxExecutor {
  /// Returns white-box handler, or `nil` if no white-box handler for the given `bundleIdentifier`.
  class func getHandler(for bundleIdentifier: String) -> WhiteBoxExecutor? {
    if !handlers.keys.contains(bundleIdentifier) {
      return nil
    }

    return handlers[bundleIdentifier]!
  }
}

extension WhiteBoxExecutor {
  /// Sets a white-box handler for the given `bundleIdentifier`.
  class func setNewHandler(
    for bundleId: String, withMessageSender sender: AppClientMessageSenderProtocol
  ) {
    handlers[bundleId] = .init(messageSender: sender)
  }
}
