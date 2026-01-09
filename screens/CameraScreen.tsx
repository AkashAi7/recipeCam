import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, BorderRadius, FontSizes } from '../constants/theme';
import { FujiRecipe, fujiRecipes } from '../constants/fujiRecipes';

const { width, height } = Dimensions.get('window');

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [selectedRecipe, setSelectedRecipe] = useState<FujiRecipe>(fujiRecipes[0]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    (async () => {
      if (!cameraPermission?.granted) {
        await requestCameraPermission();
      }
      if (!mediaPermission?.granted) {
        await requestMediaPermission();
      }
    })();
  }, []);

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const takePicture = async () => {
    if (!cameraRef.current || isCapturing) return;

    try {
      setIsCapturing(true);
      const photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        skipProcessing: false,
      });

      if (photo && photo.uri) {
        // Save to media library
        const asset = await MediaLibrary.createAssetAsync(photo.uri);
        Alert.alert(
          'Photo Saved!',
          `Photo saved with ${selectedRecipe.name} recipe`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error taking picture:', error);
      Alert.alert('Error', 'Failed to take picture');
    } finally {
      setIsCapturing(false);
    }
  };

  if (!cameraPermission || !mediaPermission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!cameraPermission.granted || !mediaPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          We need camera and media library permissions
        </Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestCameraPermission}>
          <Text style={styles.permissionButtonText}>Grant Camera Permission</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.permissionButton} onPress={requestMediaPermission}>
          <Text style={styles.permissionButtonText}>Grant Media Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing}
        ref={cameraRef}
      >
        {/* Top Bar with Recipe Info */}
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.topBar}
        >
          <View style={styles.recipeInfo}>
            <Text style={styles.recipeLabel}>Recipe</Text>
            <Text style={styles.recipeName}>{selectedRecipe.name}</Text>
            <Text style={styles.recipeDescription}>{selectedRecipe.filmSimulation}</Text>
          </View>
        </LinearGradient>

        {/* Recipe Selector (Horizontal Scroll) */}
        {showRecipes && (
          <View style={styles.recipeSelector}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recipeSelectorContent}
            >
              {fujiRecipes.map((recipe) => (
                <TouchableOpacity
                  key={recipe.id}
                  style={[
                    styles.recipeCard,
                    selectedRecipe.id === recipe.id && styles.recipeCardSelected,
                  ]}
                  onPress={() => {
                    setSelectedRecipe(recipe);
                    setShowRecipes(false);
                  }}
                >
                  <Text style={styles.recipeCardName}>{recipe.name}</Text>
                  <Text style={styles.recipeCardSim} numberOfLines={1}>
                    {recipe.filmSimulation}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Bottom Controls */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.bottomBar}
        >
          <View style={styles.controls}>
            {/* Recipe Picker Button */}
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => setShowRecipes(!showRecipes)}
            >
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>📷</Text>
              </View>
              <Text style={styles.controlButtonText}>Recipes</Text>
            </TouchableOpacity>

            {/* Capture Button */}
            <TouchableOpacity
              style={styles.captureButton}
              onPress={takePicture}
              disabled={isCapturing}
            >
              <LinearGradient
                colors={[Colors.gradientStart, Colors.gradientEnd]}
                style={styles.captureButtonGradient}
              >
                {isCapturing ? (
                  <ActivityIndicator color={Colors.text} />
                ) : (
                  <View style={styles.captureButtonInner} />
                )}
              </LinearGradient>
            </TouchableOpacity>

            {/* Flip Camera Button */}
            <TouchableOpacity
              style={styles.controlButton}
              onPress={toggleCameraFacing}
            >
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>🔄</Text>
              </View>
              <Text style={styles.controlButtonText}>Flip</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  topBar: {
    paddingTop: 60,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  recipeInfo: {
    alignItems: 'flex-start',
  },
  recipeLabel: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  recipeName: {
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  recipeDescription: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
  },
  recipeSelector: {
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
  },
  recipeSelectorContent: {
    paddingHorizontal: Spacing.md,
    gap: Spacing.md,
  },
  recipeCard: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 2,
    borderColor: 'transparent',
    minWidth: 140,
  },
  recipeCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: 'rgba(255,107,53,0.2)',
  },
  recipeCardName: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  recipeCardSim: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 40,
    paddingTop: Spacing.xl,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
  },
  controlButton: {
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  controlButtonText: {
    fontSize: FontSizes.xs,
    color: Colors.text,
    fontWeight: '600',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.full,
    padding: 4,
  },
  captureButtonGradient: {
    flex: 1,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.text,
  },
  permissionText: {
    fontSize: FontSizes.lg,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.xl,
  },
  permissionButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.md,
  },
  permissionButtonText: {
    color: Colors.text,
    fontSize: FontSizes.md,
    fontWeight: 'bold',
  },
});
