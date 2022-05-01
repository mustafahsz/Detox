"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[623],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},s),{},{components:n})):a.createElement(g,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},182:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"android",slug:"introduction/android",title:"Detox for Android",sidebar_label:"Detox for Android"},d=void 0,p={unversionedId:"android",id:"android",isDocsHomePage:!1,title:"Detox for Android",description:"Detox for Android",source:"@site/../docs/Introduction.Android.md",sourceDirName:".",slug:"/introduction/android",permalink:"/Detox/docs/next/introduction/android",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Introduction.Android.md",tags:[],version:"current",frontMatter:{id:"android",slug:"introduction/android",title:"Detox for Android",sidebar_label:"Detox for Android"},sidebar:"tutorialSidebar",previous:{title:"Detox for iOS",permalink:"/Detox/docs/next/introduction/ios"},next:{title:"Writing Your First Test",permalink:"/Detox/docs/next/introduction/writing-first-test"}},s=[{value:"Detox for Android",id:"detox-for-android",children:[{value:"Breaking Changes \u26a0\ufe0f",id:"breaking-changes-\ufe0f",children:[],level:3},{value:"Setup \u2699\ufe0f",id:"setup-\ufe0f",children:[{value:"1. Preliminary",id:"1-preliminary",children:[],level:4},{value:"2. Apply Detox Configuration",id:"2-apply-detox-configuration",children:[{value:"Using product flavors",id:"using-product-flavors",children:[],level:5}],level:4},{value:"3. Add the Native Detox dependency",id:"3-add-the-native-detox-dependency",children:[],level:4},{value:"4. Add Kotlin",id:"4-add-kotlin",children:[],level:4},{value:"5. Create a Detox-Test Class",id:"5-create-a-detox-test-class",children:[],level:4},{value:"6. Enable clear-text (unencrypted) traffic for Detox",id:"6-enable-clear-text-unencrypted-traffic-for-detox",children:[],level:4},{value:"7. ProGuard (Minification, Obfuscation)",id:"7-proguard-minification-obfuscation",children:[],level:4},{value:"8. Test Butler Support (Optional)",id:"8-test-butler-support-optional",children:[{value:"Solution 1: Prebaked Images",id:"solution-1-prebaked-images",children:[],level:5},{value:"Solution 2: Dynamic Installation",id:"solution-2-dynamic-installation",children:[],level:5}],level:4}],level:3},{value:"Setting Detox up as a compiling dependency",id:"setting-detox-up-as-a-compiling-dependency",children:[],level:3},{value:"Troubleshooting",id:"troubleshooting",children:[],level:3}],level:2}],u={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"detox-for-android"},"Detox for Android"),(0,i.kt)("h3",{id:"breaking-changes-\ufe0f"},"Breaking Changes \u26a0\ufe0f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you are installing Detox for Android for the first time, you can skip over to the setup section.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Follow our ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/migration"},"Migration Guide")," for instructions on how to upgrade from older versions.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"In version 11 we switched to using Android Espresso of Android\u2019s new ",(0,i.kt)("a",{parentName:"strong",href:"https://developer.android.com/jetpack/androidx/"},"androidx.","*","  support libraries"),".")," We did this in order to stay up to date with Google\u2019s latest features and bug fixes, in the hopes of using them to improve our own Android support (which gets better every day!).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"In version 10, we\u2019ve made ",(0,i.kt)("a",{parentName:"strong",href:"https://kotlinlang.org/"},"Kotlin")," mandatory for integrating Detox into your Android project.")," In the very least, you must include the Kotlin Gradle plugin in your project, as we shall see later on. Nevertheless, this is a breaking change so bear that in mind when upgrading. In any case, worry not of the impact on your app, as - unless you effectively use Kotlin in your own native code, ",(0,i.kt)("strong",{parentName:"p"},"there will be no impact on the final APK"),", in terms of size and methods count.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"As of version 7")," we require Android Gradle plugin 3.0.0 or newer. This is a breaking change that makes it impossible to support previous Android Gradle plugin versions."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/gradle-plugin-3-0-0-migration.html"},"https://developer.android.com/studio/build/gradle-plugin-3-0-0-migration.html")),(0,i.kt)("p",{parentName:"li"},"For older Android Gradle plugin support use ",(0,i.kt)("inlineCode",{parentName:"p"},"detox@6.x.x")," instead (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/detox/blob/97654071573053def90e8207be8eba011408f977/docs/Introduction.Android.md"},"previous setup guide here"),")."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: As a rule of thumb, we consider all old major versions discontinued; We only support the latest Detox major version.")),(0,i.kt)("h3",{id:"setup-\ufe0f"},"Setup \u2699\ufe0f"),(0,i.kt)("h4",{id:"1-preliminary"},"1. Preliminary"),(0,i.kt)("p",null,"Run through the basic steps of the ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/getting-started"},"Getting Started guide"),", such as the environment and tools setup."),(0,i.kt)("h4",{id:"2-apply-detox-configuration"},"2. Apply Detox Configuration"),(0,i.kt)("p",null,"Whether you\u2019ve selected to apply the configuration in a  ",(0,i.kt)("inlineCode",{parentName:"p"},".detoxrc.json")," or bundle it into your project\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," (under the ",(0,i.kt)("inlineCode",{parentName:"p"},"detox")," section), this is what the configuration should roughly look like for Android:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": {\n    "emulator": {\n      "type": "android.emulator",\n      "device": {\n        "avdName": "Pixel_API_28"\n      }\n    }\n  },\n  "apps": {\n    "android.debug": {\n      "type": "android.apk",\n      "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",\n      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd .."\n    },\n    "android.release": {\n      "type": "android.apk",\n      "binaryPath": "android/app/build/outputs/apk/release/app-release.apk",\n      "build": "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd .."\n    }\n  },\n  "configurations": {\n    "android.emu.debug": {\n      "device": "emulator",\n      "app": "android.debug"\n    },\n    "android.emu.release": {\n      "device": "emulator",\n      "app": "android.release"\n    }\n  }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a comprehensive explanation of Detox configuration, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/configuration"},"dedicated API-reference guide"),".")),(0,i.kt)("p",null,"Pay attention to ",(0,i.kt)("inlineCode",{parentName:"p"},"-DtestBuildType"),", set either to ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," according to the main APK type."),(0,i.kt)("p",null,"Following device types could be used to control Android devices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"android.emulator"),". Boot stock Android-SDK emulator (AVD) with provided ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", for example ",(0,i.kt)("inlineCode",{parentName:"p"},"Pixel_API_28"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"android.attached"),". Connect to already-attached android device. The device should be listed in the output of ",(0,i.kt)("inlineCode",{parentName:"p"},"adb devices")," command under provided ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),".\nUse this type to connect to Genymotion emulator.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"avdName")," property accepts a regular expression pattern that allows to specify the pool of device candidates to which you wish to connect. Use this property to run tests in parallel on multiple attached devices."))),(0,i.kt)("p",null,"For a complete, working example, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native/detox.config.js"},"Detox example app"),"."),(0,i.kt)("h5",{id:"using-product-flavors"},"Using product flavors"),(0,i.kt)("p",null,"If you are using custom ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/build-variants#product-flavors"},(0,i.kt)("inlineCode",{parentName:"a"},"productFlavors"))," the config needs to be applied a bit differently. This example shows how a ",(0,i.kt)("inlineCode",{parentName:"p"},"beta")," product flavor would look for both debug and release build types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"detox" : {\n  "devices": {\n    "emulator": {\n      "type": "android.emulator",\n      "device": {\n        "avdName": "Pixel_API_28"\n      }\n    }\n  },\n  "apps": {\n    "android.beta.debug": {\n      "type": "android.apk",\n      "binaryPath": "android/app/build/outputs/apk/beta/debug/app-beta-debug.apk",\n      "build": "cd android && ./gradlew assembleBetaDebug assembleBetaDebugAndroidTest -DtestBuildType=debug && cd .."\n    },\n    "android.beta.release": {\n      "type": "android.apk",\n      "binaryPath": "android/app/build/outputs/apk/beta/release/app-beta-release.apk",\n      "build": "cd android && ./gradlew assembleBetaRelease assembleBetaReleaseAndroidTest -DtestBuildType=release && cd .."\n    }\n  },\n  "configurations": {\n    "android.emu.beta.debug": {\n      "device": "emulator",\n      "app": "android.beta.debug"\n    },\n    "android.emu.beta.release": {\n      "device": "emulator",\n      "app": "android.beta.release"\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"3-add-the-native-detox-dependency"},"3. Add the Native Detox dependency"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Starting Detox 12.5.0, Detox is shipped as a precompiled ",(0,i.kt)("inlineCode",{parentName:"strong"},".aar"),"."),"\nTo configure Detox as a ",(0,i.kt)("em",{parentName:"p"},"compiling dependency"),", nevertheless -- refer to the ",(0,i.kt)("em",{parentName:"p"},"Setting Detox up as a compiling dependency")," section at the bottom.")),(0,i.kt)("p",null,"In your ",(0,i.kt)("em",{parentName:"p"},"root")," ",(0,i.kt)("inlineCode",{parentName:"p"},"buildscript")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"android/build.gradle"),"), register both ",(0,i.kt)("inlineCode",{parentName:"p"},"google()")," ",(0,i.kt)("em",{parentName:"p"},"and")," detox as repository lookup points in all projects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"// Note: add the 'allproject' section if it doesn\u2019t exist\nallprojects {\n    repositories {\n        // ...\n        google()\n        maven {\n            // All of Detox' artifacts are provided via the npm module\n            url \"$rootDir/../node_modules/detox/Detox-android\"\n        }\n    }\n}\n")),(0,i.kt)("p",null,"In your app\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"buildscript")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),") add this in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    // ...\n    androidTestImplementation('com.wix:detox:+')\n}\n")),(0,i.kt)("p",null,"... and add this to the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultConfig")," subsection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n  // ...\n  \n  defaultConfig {\n      // ...\n      testBuildType System.getProperty('testBuildType', 'debug')  // This will later be used to control the test apk build type\n      testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'\n  }\n}\n")),(0,i.kt)("p",null,"Please be aware that the ",(0,i.kt)("inlineCode",{parentName:"p"},"minSdkVersion")," needs to be at least 18."),(0,i.kt)("h4",{id:"4-add-kotlin"},"4. Add Kotlin"),(0,i.kt)("p",null,"If your project does not already support Kotlin, add the Kotlin Gradle-plugin to your ",(0,i.kt)("inlineCode",{parentName:"p"},"classpath")," in the root build-script (i.e.",(0,i.kt)("inlineCode",{parentName:"p"},"android/build.gradle"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"buildscript {\n    // ...\n    ext.kotlinVersion = '1.3.0' // (check what the latest version is!)\n    dependencies {\n        // ...\n        classpath \"org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion\"\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: most guides advise of defining a global ",(0,i.kt)("inlineCode",{parentName:"em"},"kotlinVersion")," constant - as in this example, but that is not mandatory.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Note that Detox has been tested for version 1.1.0 of Kotlin, and higher!"))),(0,i.kt)("h4",{id:"5-create-a-detox-test-class"},"5. Create a Detox-Test Class"),(0,i.kt)("p",null,"Detox requires a dummy implementation of a single Android-native test."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a new file to your project, under this path and name: ",(0,i.kt)("inlineCode",{parentName:"li"},"android/app/src/androidTest/java/com/[your.package]/DetoxTest.java"),". ",(0,i.kt)("strong",{parentName:"li"},"Double-check that the path is correct!")),(0,i.kt)("li",{parentName:"ol"},"Copy & paste the content of the equivalent file from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native/android/app/src/androidTest/java/com/example/DetoxTest.java"},"the detox example app for RN"),", into it. ",(0,i.kt)("strong",{parentName:"li"},"Don\u2019t forget to change the package name to your project\u2019s package name!"))),(0,i.kt)("h4",{id:"6-enable-clear-text-unencrypted-traffic-for-detox"},"6. Enable clear-text (unencrypted) traffic for Detox"),(0,i.kt)("p",null,"Starting from Android SDK API level 28, Google have disabled all clear-text network traffic by default. Namely, unless explicitly configured, all of your application\u2019s outgoing unencrypted traffic (i.e. non-TLS using HTTP rather than HTTPS) is blocked by the device."),(0,i.kt)("p",null,"For Detox to work, Detox test code running on the device must connect to the test-running host through its virtual localhost interface",(0,i.kt)("sup",null,"(","*",")")," using simple HTTP traffic. Therefore, the following network-security exemption configuration must be applied --"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In an XML resource file, e.g. ",(0,i.kt)("inlineCode",{parentName:"em"},"android/app/src/main/res/xml/network_security_config.xml"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<network-security-config>\n    <domain-config cleartextTrafficPermitted="true">\n        <domain includeSubdomains="true">10.0.2.2</domain>\n        <domain includeSubdomains="true">localhost</domain>\n    </domain-config>\n</network-security-config>\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In the app\u2019s ",(0,i.kt)("inlineCode",{parentName:"em"},"AndroidManifest.xml"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest>\n  <application \n        ...\n        android:networkSecurityConfig="@xml/network_security_config">\n  </application>\n</manifest>\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Refer to the ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native/android/app/src/main"},"Detox example app")," for an example on how this is effectively implemented."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: if properly configured, this in no way compromises the security settings of your app.")),(0,i.kt)("p",null,"For full details, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/training/articles/security-config"},"Android\u2019s security-config guide"),", and the dedicated article in the ",(0,i.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2016/04/protecting-against-unintentional.html"},"Android developers blog"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"(","*",") 10.0.2.2 for Google emulators, 10.0.3.2 for Genymotion emulators."))),(0,i.kt)("h4",{id:"7-proguard-minification-obfuscation"},"7. ProGuard (Minification, Obfuscation)"),(0,i.kt)("p",null,"In apps running ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/shrink-code"},"minification using ProGuard"),", in order for Detox to work well on release builds, please enable some Detox ProGuard configuration rules by applying the custom configuration file on top of your own. Typically, this is defined using the ",(0,i.kt)("inlineCode",{parentName:"p"},"proguardFiles")," statement in the minification-enabled build-type in your ",(0,i.kt)("inlineCode",{parentName:"p"},"app/build.gradle"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"    buildTypes {\n        // 'release' is typically the default proguard-enabled build-type\n        release {\n            minifyEnabled true\n\n            // Typical pro-guard definitions\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n            // Detox-specific additions to pro-guard\n            proguardFile \"${rootProject.projectDir}/../node_modules/detox/android/detox/proguard-rules-app.pro\"\n        }\n    }\n\n")),(0,i.kt)("p",null,"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Note:")," In order for Detox to be able to work properly, in ",(0,i.kt)("inlineCode",{parentName:"p"},"proguard-rules-app.pro"),", it effectively declares rules that retain most of React-Native\u2019s code (i.e. keep it unminified, unobfuscated) in your ",(0,i.kt)("strong",{parentName:"p"},"production")," APK. Though generally speaking, this should not be an issue (as React-Native is an open-source project), there are ways around that, if it bothers you. For example, running your E2E over a build-type specifically designed to run E2E tests using Detox would do the trick -- roughly, like so (in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/build.gradle"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"    buildTypes {\n        release {\n            minifyEnabled true\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n\n            signingConfig signingConfigs.release\n        }\n        releaseE2E {\n            initWith release\n            setMatchingFallbacks('release')\n\n            proguardFile \"${rootProject.projectDir}/../node_modules/detox/android/detox/proguard-rules-app.pro\"\n        }\n    }\n")),(0,i.kt)("p",null,"Here we utilize Gradle\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"initWith")," to easily define ",(0,i.kt)("inlineCode",{parentName:"p"},"releaseE2E")," in a way that is identical to the ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," build-type, with the exception of considering Detox' ",(0,i.kt)("inlineCode",{parentName:"p"},"proguard-rules-app.pro")," in the minification process."),(0,i.kt)("p",null,"Following the example, you would then have to build your app using ",(0,i.kt)("inlineCode",{parentName:"p"},"gradlew assembleReleaseE2E")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"gradlew assembleRelease")," before running Detox, and instruct Detox (i.e. via ",(0,i.kt)("inlineCode",{parentName:"p"},"binaryPath")," in the Detox configuration file) to use the APK resulted specifically by ",(0,i.kt)("em",{parentName:"p"},"that")," Gradle target (e.g. in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/build/apk/releaseE2E/app-releaseE2E.apk")," instead of the equivalent ",(0,i.kt)("inlineCode",{parentName:"p"},"app/build/apk/release/app-release.apk"),")."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: if your app contains flavors -- that makes things a bit trickier, but the approach can generally be adjusted to support that as well.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Last but not least:")," If you\u2019re having issue with Detox' ProGuard rules, please report them ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/new/choose"},"here"),".\nA special thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GEllickson-Hover"},"@GEllickson-Hover")," for reporting issues related to obfuscation in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/2431"},"#2431"),"."),(0,i.kt)("h4",{id:"8-test-butler-support-optional"},"8. Test Butler Support (Optional)"),(0,i.kt)("p",null,"If, when ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/android-dev-env"},"setting up your work environment"),", you\u2019ve selected Google emulators with an AOSP image as the test target - as recommended, ",(0,i.kt)("strong",{parentName:"p"},"we strongly encourage")," you would also integrate ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/test-butler"},"Test Butler"),": in the very least - in order to suppress crash and ANR dialogs. They are a soft spot in UI testing on Android, all around, as - when displayed, they make the UI entirely inaccessible (and thus cause tests to fail in bulks)."),(0,i.kt)("p",null,"Setting Test Butler up for working with Detox is a bit different than explained in their guides. The process, as a whole, is twofold:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Preinstalling the test-butler-app APK onto the test device."),(0,i.kt)("li",{parentName:"ol"},"Integrating the test-butler-lib into your own test APK, and initializing it in a custom test-runner (as explained).")),(0,i.kt)("p",null,"The library part can be easily achieved as explained there (i.e. by using Gradle\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"androidTestImplementation"),"). Same goes for initialization. As for the APK, the suggested usage of Gradle\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"androidTestUtil")," is scarce when running with Detox (i.e. non-native instrumentation tests). Here\u2019s what to do instead."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"For a complete and thorough coverage of the Test Bulter integration with Detox, consider going over our ",(0,i.kt)("a",{parentName:"em",href:"https://medium.com/wix-engineering/how-to-execute-android-ui-tests-on-ci-and-stay-alive-eb9089d88c1f"},"blogpost on CI execution")," on medium"),".")),(0,i.kt)("h5",{id:"solution-1-prebaked-images"},"Solution 1: Prebaked Images"),(0,i.kt)("p",null,"If you have control over the emulators' snapshots, simply download (see test-butler\u2019s guide) and install the test-butler APK once (e.g. use ",(0,i.kt)("inlineCode",{parentName:"p"},"adb install -r -t path/to/test-butler-app.apk"),"), and save an updated version of the snapshot. This is the best solution."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: you will have to reiterate this if you upgrade to a newer version of Test-Butler, in the future.")),(0,i.kt)("h5",{id:"solution-2-dynamic-installation"},"Solution 2: Dynamic Installation"),(0,i.kt)("p",null,"Assuming you have the APK available in the system, you can dynamically have Detox automatically install it in all of the running target-emulators by utilizing ",(0,i.kt)("inlineCode",{parentName:"p"},"utilBinaryPaths")," in your Detox configuration. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devices": {\n    "emulator.oss": {\n      "type": "android.emulator",\n      "device": "...",\n      "utilBinaryPaths": ["relative/path/to/test-butler-app-2.2.1.apk"],\n    }\n  }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Refer to our ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/configuration"},"configuration guide")," for further details on ",(0,i.kt)("inlineCode",{parentName:"p"},"utilBinaryPaths"),".")),(0,i.kt)("p",null,"As per ",(0,i.kt)("em",{parentName:"p"},"making")," the APK available - for that, we have no really good solution, for the time being (but it\u2019s in the works). A few options might be:"),(0,i.kt)("p",null,"a. In a custom script, have it predownloaded from Maven directly, as suggested in the Test Butler guide. For example (on a Mac / Linux):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -f -o ./temp/test-butler-app.apk https://repo1.maven.org/maven2/com/linkedin/testbutler/test-butler-app/2.2.1/test-butler-app-2.2.1.apk\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Jests' ",(0,i.kt)("a",{parentName:"em",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},"global-setup")," is a recommend place for those kinds of things.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Should you decide to go this path, we recommend you add ",(0,i.kt)("inlineCode",{parentName:"p"},"./temp/test-butler-app.apk")," to the relevant ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),".")),(0,i.kt)("p",null,"b. (Discouraged) Add it to your source control (e.g. git), as part of the repository."),(0,i.kt)("h3",{id:"setting-detox-up-as-a-compiling-dependency"},"Setting Detox up as a compiling dependency"),(0,i.kt)("p",null,"This is an ",(0,i.kt)("strong",{parentName:"p"},"alternative")," to the setup process described under the previous section, on adding Detox as a dependency."),(0,i.kt)("p",null,"In your project\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.gradle")," add:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"include ':detox'\nproject(':detox').projectDir = new File(rootProject.projectDir, '../node_modules/detox/android/detox')\n")),(0,i.kt)("p",null,"In your ",(0,i.kt)("em",{parentName:"p"},"root")," ",(0,i.kt)("inlineCode",{parentName:"p"},"buildscript")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"android/build.gradle"),"), register ",(0,i.kt)("inlineCode",{parentName:"p"},"google()")," as a repository lookup point in all projects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"// Note: add the 'allproject' section if it doesn\u2019t exist\nallprojects {\n    repositories {\n        // ...\n        google()\n    }\n}\n")),(0,i.kt)("p",null,"In your app\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"buildscript")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),") add this in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'dependencies {\n   // ...\n    androidTestImplementation(project(path: ":detox"))\n}\n')),(0,i.kt)("p",null,"In your app\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"buildscript")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),") add this to the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultConfig")," subsection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n  // ...\n  \n  defaultConfig {\n      // ...\n      testBuildType System.getProperty('testBuildType', 'debug')  // This will later be used to control the test apk build type\n      testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'\n      missingDimensionStrategy 'detox', 'full'\n  }\n}\n")),(0,i.kt)("p",null,"Please be aware that the ",(0,i.kt)("inlineCode",{parentName:"p"},"minSdkVersion")," needs to be at least 18."),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/next/troubleshooting/building-the-app#android"},"troubleshooting guide about build issues")," for assistance."))}c.isMDXComponent=!0}}]);