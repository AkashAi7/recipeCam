import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Spacing, BorderRadius, FontSizes } from '../constants/theme';
import { FujiRecipe, fujiRecipes } from '../constants/fujiRecipes';

const { width } = Dimensions.get('window');

export default function RecipeLibraryScreen() {
  const [selectedRecipe, setSelectedRecipe] = useState<FujiRecipe | null>(null);

  const renderRecipeDetails = (recipe: FujiRecipe) => (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>{recipe.name}</Text>
      <Text style={styles.detailsSubtitle}>{recipe.filmSimulation}</Text>
      <Text style={styles.detailsDescription}>{recipe.description}</Text>

      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Settings</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Contrast</Text>
          <Text style={styles.settingValue}>{recipe.settings.contrast.toFixed(1)}</Text>
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Saturation</Text>
          <Text style={styles.settingValue}>{recipe.settings.saturation.toFixed(1)}</Text>
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Highlights</Text>
          <Text style={styles.settingValue}>
            {recipe.settings.highlights > 0 ? '+' : ''}{recipe.settings.highlights}
          </Text>
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Shadows</Text>
          <Text style={styles.settingValue}>
            {recipe.settings.shadows > 0 ? '+' : ''}{recipe.settings.shadows}
          </Text>
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Grain Effect</Text>
          <Text style={styles.settingValue}>{recipe.settings.grainEffect.toFixed(1)}</Text>
        </View>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Color Chrome</Text>
          <Text style={styles.settingValue}>{recipe.settings.colorChrome.toFixed(1)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setSelectedRecipe(null)}
      >
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientEnd]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Film Recipe Library</Text>
        <Text style={styles.headerSubtitle}>
          {fujiRecipes.length} Fujifilm Simulations
        </Text>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {fujiRecipes.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            style={styles.recipeCard}
            onPress={() => setSelectedRecipe(recipe)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['rgba(255,107,53,0.1)', 'rgba(247,147,30,0.05)']}
              style={styles.recipeCardGradient}
            >
              <View style={styles.recipeCardContent}>
                <View style={styles.recipeCardHeader}>
                  <Text style={styles.recipeCardTitle}>{recipe.name}</Text>
                  <View style={styles.recipeCardBadge}>
                    <Text style={styles.recipeCardBadgeText}>
                      {recipe.settings.saturation > 1 ? 'Vivid' : 
                       recipe.settings.saturation < 0.8 ? 'Muted' : 'Natural'}
                    </Text>
                  </View>
                </View>
                
                <Text style={styles.recipeCardSim}>{recipe.filmSimulation}</Text>
                <Text style={styles.recipeCardDescription} numberOfLines={2}>
                  {recipe.description}
                </Text>
                
                <View style={styles.recipeCardStats}>
                  <View style={styles.stat}>
                    <Text style={styles.statLabel}>Contrast</Text>
                    <Text style={styles.statValue}>{recipe.settings.contrast.toFixed(1)}</Text>
                  </View>
                  <View style={styles.stat}>
                    <Text style={styles.statLabel}>Saturation</Text>
                    <Text style={styles.statValue}>{recipe.settings.saturation.toFixed(1)}</Text>
                  </View>
                  <View style={styles.stat}>
                    <Text style={styles.statLabel}>Grain</Text>
                    <Text style={styles.statValue}>{recipe.settings.grainEffect.toFixed(1)}</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {renderRecipeDetails(selectedRecipe)}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: Spacing.xl,
    paddingHorizontal: Spacing.lg,
  },
  headerTitle: {
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  headerSubtitle: {
    fontSize: FontSizes.md,
    color: Colors.text,
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.md,
    gap: Spacing.md,
  },
  recipeCard: {
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    marginBottom: Spacing.md,
  },
  recipeCardGradient: {
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.lg,
  },
  recipeCardContent: {
    gap: Spacing.sm,
  },
  recipeCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.xs,
  },
  recipeCardTitle: {
    fontSize: FontSizes.xl,
    fontWeight: 'bold',
    color: Colors.text,
    flex: 1,
  },
  recipeCardBadge: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
  },
  recipeCardBadgeText: {
    fontSize: FontSizes.xs,
    color: Colors.text,
    fontWeight: 'bold',
  },
  recipeCardSim: {
    fontSize: FontSizes.sm,
    color: Colors.primary,
    fontWeight: '600',
  },
  recipeCardDescription: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  recipeCardStats: {
    flexDirection: 'row',
    gap: Spacing.lg,
    marginTop: Spacing.sm,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  stat: {
    flex: 1,
  },
  statLabel: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  statValue: {
    fontSize: FontSizes.md,
    color: Colors.text,
    fontWeight: 'bold',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
  },
  detailsContainer: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  detailsTitle: {
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  detailsSubtitle: {
    fontSize: FontSizes.md,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Spacing.sm,
  },
  detailsDescription: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
    lineHeight: 22,
  },
  settingsContainer: {
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  settingsTitle: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  settingLabel: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
  },
  settingValue: {
    fontSize: FontSizes.md,
    color: Colors.text,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    color: Colors.text,
  },
});
