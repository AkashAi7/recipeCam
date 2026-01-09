# RecipeCam 📷

A beautiful mobile camera app with authentic Fujifilm film recipe simulations for both Android and iOS.

## Features

- 📸 **Real-time Camera** - Professional camera interface with live preview
- 🎨 **11 Fuji Film Recipes** - Including Velvia, Provia, Classic Chrome, Eterna, Acros, and more
- 🎯 **Easy Recipe Selection** - Quick-access horizontal recipe selector
- 💾 **Photo Library Integration** - Save your photos with applied film recipes
- 🌓 **Dark Mode UI** - Beautiful gradient-based modern interface
- 📱 **Cross-platform** - Works on both Android and iOS

## Film Recipes Included

1. **Velvia** - Highly saturated colors for landscapes
2. **Provia** - Natural colors for everyday shooting
3. **Astia** - Soft colors for portraits
4. **Classic Chrome** - Muted documentary style
5. **Pro Neg. Hi** - Subtle portrait tones
6. **Pro Neg. Std** - Natural skin tones
7. **Classic Neg.** - Vintage warm look
8. **Eterna** - Cinematic flat colors
9. **Acros** - Rich B&W tones
10. **Acros+R** - B&W with red filter
11. **Monochrome** - Pure B&W

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- For Android: Android Studio and Android SDK
- For iOS: Xcode (macOS only)

### Setup

1. Clone the repository:
```bash
cd /Users/akashdwivedi/Desktop/FunProjects/recipeCam
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:

**Android:**
```bash
npm run android
```

**iOS (macOS only):**
```bash
npm run ios
```

## Project Structure

```
recipeCam/
├── screens/
│   ├── CameraScreen.tsx      # Main camera interface
│   └── RecipeLibraryScreen.tsx # Recipe browser
├── constants/
│   ├── fujiRecipes.ts        # Film recipe data
│   └── theme.ts              # Design system
├── App.tsx                   # Navigation setup
├── app.json                  # Expo configuration
└── package.json
```

## Usage

### Camera Screen
- Tap the **Recipes** button to see available film recipes
- Select your desired recipe from the horizontal scroll
- Tap the large **capture button** to take a photo
- Use the **Flip** button to switch between front/back camera

### Recipe Library
- Browse all 11 Fujifilm simulations
- Tap any recipe to see detailed settings
- View contrast, saturation, grain, and other parameters

## Permissions

The app requires the following permissions:
- **Camera** - To take photos
- **Media Library** - To save photos to your gallery

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **Expo Camera** - Camera API
- **Expo Media Library** - Photo storage

## Development

```bash
# Start development server
npm start

# Run on Android emulator/device
npm run android

# Run on iOS simulator/device (macOS only)
npm run ios

# Run on web browser
npm run web
```

## Building for Production

### Android APK
```bash
expo build:android
```

### iOS IPA
```bash
expo build:ios
```

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

ISC

## Author

Created with ❤️ for photography enthusiasts

---

**Note:** This app simulates Fujifilm film recipes through digital processing. For best results, use in well-lit conditions and experiment with different recipes for various shooting scenarios.
