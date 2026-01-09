or it# RecipeCam - Build Instructions for Android APK

## Quick Build Guide

### Option 1: Using EAS Build (Recommended - Cloud Build)

1. **Install EAS CLI:**
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo:**
   ```bash
   eas login
   ```
   (Create a free account at expo.dev if you don't have one)

3. **Configure EAS:**
   ```bash
   eas build:configure
   ```

4. **Build APK:**
   ```bash
   eas build --platform android --profile preview
   ```
   
   This will build an APK in the cloud and provide a download link when complete.

### Option 2: Local Build (No Expo Account Needed)

1. **Install Android Studio** and set up Android SDK

2. **Build locally:**
   ```bash
   npx expo run:android
   ```
   
   This will:
   - Generate the native Android project
   - Build and install on connected device/emulator

3. **Create APK manually:**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```
   
   APK location: `android/app/build/outputs/apk/release/app-release.apk`

### Option 3: Expo Development Build

For a development APK with native modules:

```bash
eas build --profile development --platform android
```

## Build Profiles

- **development**: For testing during development
- **preview**: For internal testing (APK format)
- **production**: For Play Store release (APK or AAB)

## Requirements

- Node.js and npm installed
- Expo account (for EAS Build)
- OR Android Studio (for local builds)

## Getting the APK

After EAS build completes:
1. Download link will appear in terminal
2. Or visit: https://expo.dev/accounts/YOUR_USERNAME/projects/recipecam/builds
3. Share the APK file directly to install on Android devices

## Installing on Device

1. Download the APK to your Android device
2. Enable "Install from Unknown Sources" in Settings
3. Tap the APK file to install
4. Grant camera and storage permissions when prompted

---

**Current Configuration:** 
- The `eas.json` file is already configured
- Preview and Production profiles will generate APK files
- No Google Play Store submission required for APK distribution
