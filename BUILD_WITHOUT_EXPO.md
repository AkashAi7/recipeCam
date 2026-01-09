# Build APK Without Expo Account

## Method 1: Using Android Studio (Local Build)

### Step 1: Install Android Studio
1. Download from: https://developer.android.com/studio
2. Install and open Android Studio
3. Go to: Settings → Appearance & Behavior → System Settings → Android SDK
4. Install:
   - Android SDK Platform 34
   - Android SDK Build-Tools 34
   - Android Emulator (optional)

### Step 2: Set Environment Variables

Add to your `~/.zshrc` or `~/.bash_profile`:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

Then run:
```bash
source ~/.zshrc
```

### Step 3: Build APK

```bash
cd /Users/akashdwivedi/Desktop/FunProjects/recipeCam
npx expo run:android --variant release
```

The APK will be in:
`android/app/build/outputs/apk/release/app-release.apk`

---

## Method 2: Using Appetize.io (Online Android Emulator)

Build and test online without installing anything:

1. Go to: https://appetize.io
2. Create free account
3. Upload your project or build online
4. Test in browser

---

## Method 3: React Native CLI (Advanced)

```bash
# Convert to React Native CLI
npx react-native init RecipeCamCLI --template react-native-template-typescript

# Copy your code
cp -r screens RecipeCamCLI/
cp -r constants RecipeCamCLI/
cp App.tsx RecipeCamCLI/

# Build
cd RecipeCamCLI/android
./gradlew assembleRelease
```

---

## Method 4: Using GitHub Actions (Automated Cloud Build - FREE)

Create `.github/workflows/build.yml`:

```yaml
name: Build APK
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
      - run: npx expo prebuild --platform android
      - run: cd android && ./gradlew assembleRelease
      - uses: actions/upload-artifact@v3
        with:
          name: app-release.apk
          path: android/app/build/outputs/apk/release/
```

Push to GitHub and download APK from Actions tab!

---

## Recommended: Method 1 (Android Studio)

It's the most reliable and doesn't require any external services.

### Quick Install:
```bash
# Install with Homebrew (macOS)
brew install --cask android-studio
```

Then follow steps 1-3 above.
