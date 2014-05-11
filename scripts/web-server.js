Script started on Sun May 11 23:23:58 2014
[?1034hbash-3.2$ node scripts/wb[Keb=[K-server.js

/Users/thangpq/HomeworkManager/scripts/web-server.js:1
function (exports, require, module, __filename, __dirname) { Script started on
                                                                    ^^^^^^^
SyntaxError: Unexpected identifier
    at Module._compile (module.js:439:25)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:902:3
bash-3.2$ node scripts/web-server.js[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[Knode scripts/web-server.js

/Users/thangpq/HomeworkManager/scripts/web-server.js:1
function (exports, require, module, __filename, __dirname) { Script started on
                                                                    ^^^^^^^
SyntaxError: Unexpected identifier
    at Module._compile (module.js:439:25)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:902:3
bash-3.2$ node scripts/web-server.js[C[C[C[C[C[C[C[C[C[C[10Pphonegap run ios[C[C[C[C[C[C[C[C[C[Ccd homeworktracker/[C[C[C[C[C[C[C[C[C[C[3Pphonegap run ios
[36m[phonegap][39m detecting iOS SDK environment...
[36m[phonegap][39m using the local environment
[36m[phonegap][39m compiling iOS...
Build settings from command line:
    ARCHS = i386
    CONFIGURATION_BUILD_DIR = /Users/thangpq/HomeworkManager/platforms/ios/build/emulator
    SDKROOT = iphonesimulator7.1
    VALID_ARCHS = i386

[1m[36m=== BUILD TARGET CordovaLib OF PROJECT CordovaLib WITH CONFIGURATION Debug ===[0m

Check dependencies

[1m[36m=== BUILD TARGET HomeworkManager OF PROJECT HomeworkManager WITH CONFIGURATION Debug ===[0m

Check dependencies

[1mProcessInfoPlistFile[0m build/emulator/HomeworkManager.app/Info.plist [1mHomeworkManager/HomeworkManager-Info.plist[0m
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    builtin-infoPlistUtility /Users/thangpq/HomeworkManager/platforms/ios/HomeworkManager/HomeworkManager-Info.plist -genpkginfo /Users/thangpq/HomeworkManager/platforms/ios/build/emulator/HomeworkManager.app/PkgInfo -expandbuildsettings -format binary -platform iphonesimulator -o /Users/thangpq/HomeworkManager/platforms/ios/build/emulator/HomeworkManager.app/Info.plist

[1mPhaseScriptExecution[0m Copy\ www\ directory build/HomeworkManager.build/Debug-iphonesimulator/HomeworkManager.build/Script-304B58A110DAC018002A0835.sh
    cd /Users/thangpq/HomeworkManager/platforms/ios
    /bin/sh -c /Users/thangpq/HomeworkManager/platforms/ios/build/HomeworkManager.build/Debug-iphonesimulator/HomeworkManager.build/Script-304B58A110DAC018002A0835.sh

real	0m1.232s
user	0m0.443s
sys	0m0.621s

[1mGenerateDSYMFile[0m [1mbuild/emulator/HomeworkManager.app.dSYM[0m build/emulator/HomeworkManager.app/HomeworkManager
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/dsymutil /Users/thangpq/HomeworkManager/platforms/ios/build/emulator/HomeworkManager.app/HomeworkManager -o /Users/thangpq/HomeworkManager/platforms/ios/build/emulator/HomeworkManager.app.dSYM

[1mTouch[0m build/emulator/HomeworkManager.app
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    /usr/bin/touch -c /Users/thangpq/HomeworkManager/platforms/ios/build/emulator/HomeworkManager.app

[1m** BUILD SUCCEEDED **

[0m[36m[phonegap][39m successfully compiled iOS app
[36m[phonegap][39m trying to install app onto device
Build settings from command line:
    ARCHS = armv7 armv7s arm64
    CONFIGURATION_BUILD_DIR = /Users/thangpq/HomeworkManager/platforms/ios/build/device
    SDKROOT = iphoneos7.1
    VALID_ARCHS = armv7 armv7s arm64

Build settings from configuration file '/Users/thangpq/HomeworkManager/platforms/ios/cordova/build.xcconfig':
    CODE_SIGN_IDENTITY = iPhone Developer

[1m[36m=== BUILD TARGET CordovaLib OF PROJECT CordovaLib WITH CONFIGURATION Debug ===[0m

Check dependencies

[1m[36m=== BUILD TARGET HomeworkManager OF PROJECT HomeworkManager WITH CONFIGURATION Debug ===[0m

Check dependencies
2014-05-11 23:28:27.357 xcodebuild[16853:4307]  DeveloperPortal: Using pre-existing current store at URL (file:///Users/thangpq/Library/Developer/Xcode/DeveloperPortal%205.1.1.db).

[1mProcessInfoPlistFile[0m build/device/HomeworkManager.app/Info.plist [1mHomeworkManager/HomeworkManager-Info.plist[0m
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    builtin-infoPlistUtility /Users/thangpq/HomeworkManager/platforms/ios/HomeworkManager/HomeworkManager-Info.plist -genpkginfo /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/PkgInfo -expandbuildsettings -format binary -platform iphoneos -resourcerulesfile /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/ResourceRules.plist -o /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Info.plist

[1mPhaseScriptExecution[0m Copy\ www\ directory build/HomeworkManager.build/Debug-iphoneos/HomeworkManager.build/Script-304B58A110DAC018002A0835.sh
    cd /Users/thangpq/HomeworkManager/platforms/ios
    /bin/sh -c /Users/thangpq/HomeworkManager/platforms/ios/build/HomeworkManager.build/Debug-iphoneos/HomeworkManager.build/Script-304B58A110DAC018002A0835.sh

real	0m1.961s
user	0m0.482s
sys	0m0.698s

[1mGenerateDSYMFile[0m [1mbuild/device/HomeworkManager.app.dSYM[0m build/device/HomeworkManager.app/HomeworkManager
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/dsymutil /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/HomeworkManager -o /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app.dSYM

[1mProcessProductPackaging[0m /Users/thangpq/Library/MobileDevice/Provisioning\ Profiles/70669972-1139-4BBF-BF2A-0CC9A053143F.mobileprovision [1mbuild/device/HomeworkManager.app/embedded.mobileprovision[0m
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    builtin-productPackagingUtility /Users/thangpq/Library/MobileDevice/Provisioning\ Profiles/70669972-1139-4BBF-BF2A-0CC9A053143F.mobileprovision -o /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/embedded.mobileprovision

[1mTouch[0m build/device/HomeworkManager.app
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    /usr/bin/touch -c /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app

[1mProcessProductPackaging[0m /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS7.1.sdk/Entitlements.plist [1mbuild/HomeworkManager.build/Debug-iphoneos/HomeworkManager.build/HomeworkManager.xcent[0m
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    builtin-productPackagingUtility /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS7.1.sdk/Entitlements.plist -entitlements -format xml -o /Users/thangpq/HomeworkManager/platforms/ios/build/HomeworkManager.build/Debug-iphoneos/HomeworkManager.build/HomeworkManager.xcent

[1mCodeSign[0m [1mbuild/device/HomeworkManager.app[0m
    cd /Users/thangpq/HomeworkManager/platforms/ios
    export CODESIGN_ALLOCATE=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/codesign_allocate
    export PATH="/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/platform-tools://Users/thangpq/Downloads/adt-bundle-mac-x86_64-20140321/sdk/tools"
    Using code signing identity "iPhone Developer: Thang PQ (KKVTXEW3AD)" and provisioning profile "iOS Team Provisioning Profile: ThangPhamQuoc" (70669972-1139-4BBF-BF2A-0CC9A053143F)
    /usr/bin/codesign --force --sign 49D47EE366B5A25F5BAF491A9A631B904C682817 --resource-rules=/Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/ResourceRules.plist --entitlements /Users/thangpq/HomeworkManager/platforms/ios/build/HomeworkManager.build/Debug-iphoneos/HomeworkManager.build/HomeworkManager.xcent /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app
/Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app: replacing existing signature

[1m** BUILD SUCCEEDED **

[0m------ Install phase ------
[....] Waiting for iOS device to be connected
[  0%] Found device (8375187e5ab7dc46059d404a3823d177d543a3f1), beginning install
[  5%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app to device
[  5%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/_CodeSignature to device
[  5%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/_CodeSignature/CodeResources to device
[  5%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/config.xml to device
[  5%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/de.lproj to device
[  5%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/de.lproj/Localizable.strings to device
[  5%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Default-568h@2x~iphone.png to device
[  5%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Default-Landscape@2x~ipad.png to device
[  6%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Default-Landscape~ipad.png to device
[  6%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Default-Portrait@2x~ipad.png to device
[  7%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Default-Portrait~ipad.png to device
[  7%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Default@2x~iphone.png to device
[  7%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Default~iphone.png to device
[  7%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/embedded.mobileprovision to device
[  7%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/en.lproj to device
[  7%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/en.lproj/Localizable.strings to device
[  7%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/HomeworkManager to device
[  8%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-40.png to device
[  8%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-40@2x.png to device
[  8%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-50.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-50@2x.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-60.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-60@2x.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-72.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-72@2x.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-76.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-76@2x.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-small.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon-small@2x.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/icon@2x.png to device
[  9%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/Info.plist to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/MainViewController.nib to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/ResourceRules.plist to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/config.xml to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/cordova.js to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/cordova_plugins.js to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/images to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/images/ajax-loader.gif to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/index.css to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/jqm-demos.css to device
[ 10%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/jquery.mobile-1.4.2.min.css to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/ajax-loader.gif to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/action-black.png to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/action-white.png to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/alert-black.png to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/alert-white.png to device
[ 11%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-d-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-d-l-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-d-l-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-d-r-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-d-r-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-d-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-l-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-l-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-r-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-r-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-u-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-u-l-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-u-l-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-u-r-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-u-r-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/arrow-u-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/audio-black.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/audio-white.png to device
[ 12%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/back-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/back-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/bars-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/bars-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/bullets-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/bullets-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/calendar-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/calendar-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/camera-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/camera-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/carat-d-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/carat-d-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/carat-l-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/carat-l-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/carat-r-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/carat-r-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/carat-u-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/carat-u-white.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/check-black.png to device
[ 13%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/check-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/clock-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/clock-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/cloud-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/cloud-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/comment-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/comment-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/delete-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/delete-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/edit-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/edit-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/eye-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/eye-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/forbidden-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/forbidden-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/forward-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/forward-white.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/gear-black.png to device
[ 14%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/gear-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/grid-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/grid-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/heart-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/heart-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/home-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/home-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/info-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/info-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/location-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/location-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/lock-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/lock-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/mail-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/mail-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/minus-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/minus-white.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/navigation-black.png to device
[ 15%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/navigation-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/phone-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/phone-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/plus-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/plus-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/power-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/power-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/recycle-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/recycle-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/refresh-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/refresh-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/search-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/search-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/shop-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/shop-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/star-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/star-white.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/tag-black.png to device
[ 16%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/tag-white.png to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/user-black.png to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/user-white.png to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/video-black.png to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-png/video-white.png to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/action-black.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/action-white.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/alert-black.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/alert-white.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-d-black.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-d-l-black.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-d-l-white.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-d-r-black.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-d-r-white.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-d-white.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-l-black.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-l-white.svg to device
[ 17%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-r-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-r-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-u-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-u-l-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-u-l-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-u-r-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-u-r-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/arrow-u-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/audio-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/audio-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/back-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/back-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/bars-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/bars-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/bullets-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/bullets-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/calendar-black.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/calendar-white.svg to device
[ 18%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/camera-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/camera-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/carat-d-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/carat-d-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/carat-l-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/carat-l-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/carat-r-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/carat-r-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/carat-u-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/carat-u-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/check-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/check-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/clock-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/clock-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/cloud-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/cloud-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/comment-black.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/comment-white.svg to device
[ 19%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/delete-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/delete-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/edit-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/edit-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/eye-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/eye-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/forbidden-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/forbidden-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/forward-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/forward-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/gear-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/gear-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/grid-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/grid-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/heart-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/heart-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/home-black.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/home-white.svg to device
[ 20%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/info-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/info-white.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/location-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/location-white.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/lock-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/lock-white.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/mail-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/mail-white.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/minus-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/minus-white.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/navigation-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/navigation-white.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/phone-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/phone-white.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/plus-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/plus-white.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/power-black.svg to device
[ 21%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/power-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/recycle-black.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/recycle-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/refresh-black.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/refresh-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/search-black.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/search-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/shop-black.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/shop-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/star-black.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/star-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/tag-black.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/tag-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/user-black.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/user-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/video-black.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/images/icons-svg/video-white.svg to device
[ 22%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/jquery.mobile-1.4.2.min.css to device
[ 23%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/jquery.mobile.external-png-1.4.2.min.css to device
[ 23%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/jquery.mobile.icons-1.4.2.min.css to device
[ 24%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/jquery.mobile.inline-png-1.4.2.min.css to device
[ 24%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/jquery.mobile.inline-svg-1.4.2.min.css to device
[ 25%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/jquery.mobile.structure-1.4.2.min.css to device
[ 25%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/css/themes/default/jquery.mobile.theme-1.4.2.min.css to device
[ 25%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/icon.png to device
[ 25%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/img to device
[ 25%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/img/logo.png to device
[ 25%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/index.html to device
[ 26%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js to device
[ 26%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/classDB.js to device
[ 26%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/deadlinesDB.js to device
[ 26%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/fastclick.js to device
[ 26%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/index.js to device
[ 26%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/iscroll.js to device
[ 26%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/jquery.js to device
[ 27%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/jquery.mobile-1.4.2.min.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/jquery.mobile.router.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/local-notification.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/addNewClass.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/classDB.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/database.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/finishedDB.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/getClassDetail.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/getDeadlineDetail.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/index.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/missedDB.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/js/oldJS/nativetransitions.js to device
[ 28%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib to device
[ 29%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen to device
[ 29%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css to device
[ 29%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome to device
[ 29%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome/css to device
[ 29%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome/css/font-awesome.min.css to device
[ 29%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome/fonts to device
[ 29%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome/fonts/fontawesome-webfont.eot to device
[ 29%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome/fonts/fontawesome-webfont.svg to device
[ 30%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome/fonts/fontawesome-webfont.ttf to device
[ 30%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome/fonts/fontawesome-webfont.woff to device
[ 30%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/font_awesome/fonts/FontAwesome.otf to device
[ 30%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/onsenui.css to device
[ 30%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/polyfill to device
[ 31%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/polyfill/sliding_menu_polyfill.css to device
[ 31%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-android4_4.css to device
[ 31%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-android4_4.min.css to device
[ 31%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-blue.css to device
[ 31%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-blue.min.css to device
[ 31%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-green.css to device
[ 32%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-green.min.css to device
[ 32%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-ios7.css to device
[ 32%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-ios7.min.css to device
[ 32%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-orange.css to device
[ 32%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-orange.min.css to device
[ 32%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-pink.css to device
[ 33%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-pink.min.css to device
[ 33%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-purple.css to device
[ 33%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-purple.min.css to device
[ 33%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-yellow.css to device
[ 33%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/css/topcoat-mobile-onsen-yellow.min.css to device
[ 33%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/img to device
[ 33%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/img/search.svg to device
[ 34%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js to device
[ 34%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular to device
[ 34%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/angular-animate.js to device
[ 34%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/angular-csp.css to device
[ 34%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/angular-touch.js to device
[ 34%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/angular.js to device
[ 36%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/angular.min.js to device
[ 36%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/angular.min.js.gzip to device
[ 37%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/angular.min.js.map to device
[ 37%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/bower.json to device
[ 37%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/angular/README.md to device
[ 37%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/onsenui.js to device
[ 38%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/lib/onsen/js/onsenui_all.js to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html/addNewClass.html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html/addNewDeadline.html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html/classDetail.html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html/classList.html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html/deadlineDetail.html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html/finished.html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html/missed.html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/old html/statistics.html to device
[ 41%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/phonegap.js to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/plugins to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/plugins/de.appplant.cordova.plugin.local-notification to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/plugins/de.appplant.cordova.plugin.local-notification/www to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/plugins/org.apache.cordova.device to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/plugins/org.apache.cordova.device/www to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/plugins/org.apache.cordova.device/www/device.js to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/android to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/android/icon-36-ldpi.png to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/android/icon-48-mdpi.png to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/android/icon-72-hdpi.png to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/android/icon-96-xhdpi.png to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/bada to device
[ 42%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/bada/icon-128.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/bada-wac to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/bada-wac/icon-48-type5.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/bada-wac/icon-50-type3.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/bada-wac/icon-80-type4.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/blackberry to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/blackberry/icon-80.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/ios to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/ios/icon-57-2x.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/ios/icon-57.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/ios/icon-72-2x.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/ios/icon-72.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/tizen to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/tizen/icon-128.png to device
[ 43%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/webos to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/webos/icon-64.png to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/windows-phone to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/windows-phone/icon-173-tile.png to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/windows-phone/icon-48.png to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/icon/windows-phone/icon-62-tile.png to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android/screen-hdpi-landscape.png to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android/screen-hdpi-portrait.png to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android/screen-ldpi-landscape.png to device
[ 44%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android/screen-ldpi-portrait.png to device
[ 45%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android/screen-mdpi-landscape.png to device
[ 45%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android/screen-mdpi-portrait.png to device
[ 45%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android/screen-xhdpi-landscape.png to device
[ 45%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/android/screen-xhdpi-portrait.png to device
[ 45%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/bada to device
[ 45%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/bada/screen-portrait.png to device
[ 46%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/bada-wac to device
[ 46%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/bada-wac/screen-type3.png to device
[ 46%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/bada-wac/screen-type4.png to device
[ 46%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/bada-wac/screen-type5.png to device
[ 46%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/blackberry to device
[ 46%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/blackberry/screen-225.png to device
[ 46%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios to device
[ 46%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-ipad-landscape-2x.png to device
[ 47%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-ipad-landscape.png to device
[ 47%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-ipad-portrait-2x.png to device
[ 47%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-ipad-portrait.png to device
[ 47%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-iphone-landscape-2x.png to device
[ 48%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-iphone-landscape.png to device
[ 48%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-iphone-portrait-2x.png to device
[ 48%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-iphone-portrait-568h-2x.png to device
[ 48%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/ios/screen-iphone-portrait.png to device
[ 48%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/tizen to device
[ 48%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/tizen/README.md to device
[ 48%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/webos to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/webos/screen-64.png to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/windows-phone to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/res/screen/windows-phone/screen-portrait.jpg to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec/helper.js to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec/index.js to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec/lib to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec/lib/jasmine-1.2.0 to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec/lib/jasmine-1.2.0/jasmine-html.js to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec/lib/jasmine-1.2.0/jasmine.css to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec/lib/jasmine-1.2.0/jasmine.js to device
[ 49%] Copying /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app/www/spec/lib/jasmine-1.2.0/MIT.LICENSE to device
[ 52%] CreatingStagingDirectory
[ 57%] ExtractingPackage
[ 60%] InspectingPackage
[ 60%] TakingInstallLock
[ 65%] PreflightingApplication
[ 65%] InstallingEmbeddedProfile
[ 70%] VerifyingApplication
[ 80%] InstallingApplication
[ 85%] PostflightingApplication
[ 90%] SandboxingApplication
[100%] Installed package /Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app
------ Debug phase ------
[  0%] Looking up developer disk image
[ 90%] Mounting developer disk image
[ 95%] Developer disk image already mounted
[100%] Connecting to remote debug server
-------------------------
(lldb) success
Executing commands in '/tmp/fruitstrap-lldb-prep-cmds-'.
(lldb)      platform select remote-ios --sysroot '/Users/thangpq/Library/Developer/Xcode/iOS DeviceSupport/7.1.1 (11D201)/Symbols'
  Platform: remote-ios
 Connected: no
  SDK Path: "/Users/thangpq/Library/Developer/Xcode/iOS DeviceSupport/7.1.1 (11D201)/Symbols"
(lldb)      target create "/Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app"
Current executable set to '/Users/thangpq/HomeworkManager/platforms/ios/build/device/HomeworkManager.app' (armv7).
(lldb)      script fruitstrap_device_app="/private/var/mobile/Applications/898CBBB0-B563-4A06-9335-4405EAA3DD60/HomeworkManager.app"
(lldb)      script fruitstrap_connect_url="connect://127.0.0.1:12345"
(lldb)      command script import "/tmp/fruitstrap_.py"
(lldb)      command script add -f fruitstrap_.connect_command connect
(lldb)      command script add -s asynchronous -f fruitstrap_.run_command run
(lldb)      connect
(lldb)      run
2014-05-11 23:29:09.068 HomeworkManager[4105:60b] Multi-tasking -> Device: YES, App: YES
2014-05-11 23:29:09.211 HomeworkManager[4105:60b] [CDVTimer][localnotification] 0.491023ms
2014-05-11 23:29:09.213 HomeworkManager[4105:60b] [CDVTimer][localnotification] 0.057995ms
2014-05-11 23:29:09.214 HomeworkManager[4105:60b] [CDVTimer][TotalPluginStartup] 3.627956ms
2014-05-11 23:29:10.072 HomeworkManager[4105:60b] Resetting plugins due to page load.
2014-05-11 23:29:11.296 HomeworkManager[4105:60b] Finished load of: file:///var/mobile/Applications/898CBBB0-B563-4A06-9335-4405EAA3DD60/HomeworkManager.app/www/index.html
quit
Quitting LLDB will kill one or more processes. Do you really want to proceed: [Y/n] y
[36m[phonegap][39m successfully installed onto device
bash-3.2$ 