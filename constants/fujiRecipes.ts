export interface FujiRecipe {
  id: string;
  name: string;
  filmSimulation: string;
  description: string;
  settings: {
    brightness: number;
    contrast: number;
    saturation: number;
    highlights: number;
    shadows: number;
    grainEffect: number;
    colorChrome: number;
  };
  colorTone: {
    red: number;
    green: number;
    blue: number;
  };
}

export const fujiRecipes: FujiRecipe[] = [
  {
    id: 'velvia',
    name: 'Velvia',
    filmSimulation: 'VELVIA/VIVID',
    description: 'Highly saturated colors, perfect for landscapes and nature',
    settings: {
      brightness: 0,
      contrast: 1.2,
      saturation: 1.4,
      highlights: -10,
      shadows: 10,
      grainEffect: 0,
      colorChrome: 1.1,
    },
    colorTone: {
      red: 1.15,
      green: 1.1,
      blue: 1.05,
    },
  },
  {
    id: 'provia',
    name: 'Provia',
    filmSimulation: 'PROVIA/STANDARD',
    description: 'Natural colors and balanced tones for everyday shooting',
    settings: {
      brightness: 0,
      contrast: 1.0,
      saturation: 1.0,
      highlights: 0,
      shadows: 0,
      grainEffect: 0,
      colorChrome: 1.0,
    },
    colorTone: {
      red: 1.0,
      green: 1.0,
      blue: 1.0,
    },
  },
  {
    id: 'astia',
    name: 'Astia',
    filmSimulation: 'ASTIA/SOFT',
    description: 'Soft colors and gentle tones, ideal for portraits',
    settings: {
      brightness: 5,
      contrast: 0.9,
      saturation: 0.85,
      highlights: 5,
      shadows: -5,
      grainEffect: 0,
      colorChrome: 0.9,
    },
    colorTone: {
      red: 1.05,
      green: 0.95,
      blue: 0.98,
    },
  },
  {
    id: 'classic-chrome',
    name: 'Classic Chrome',
    filmSimulation: 'CLASSIC CHROME',
    description: 'Muted colors with rich tones, documentary style',
    settings: {
      brightness: -5,
      contrast: 1.1,
      saturation: 0.7,
      highlights: -15,
      shadows: 15,
      grainEffect: 0.3,
      colorChrome: 1.2,
    },
    colorTone: {
      red: 0.95,
      green: 0.92,
      blue: 0.88,
    },
  },
  {
    id: 'pro-neg-hi',
    name: 'Pro Neg. Hi',
    filmSimulation: 'PRO NEG. HI',
    description: 'Subtle colors with soft contrast for portraits',
    settings: {
      brightness: 5,
      contrast: 0.85,
      saturation: 0.8,
      highlights: 10,
      shadows: -10,
      grainEffect: 0,
      colorChrome: 0.85,
    },
    colorTone: {
      red: 1.0,
      green: 0.98,
      blue: 1.02,
    },
  },
  {
    id: 'pro-neg-std',
    name: 'Pro Neg. Std',
    filmSimulation: 'PRO NEG. STD',
    description: 'Natural skin tones with subdued colors',
    settings: {
      brightness: 0,
      contrast: 0.9,
      saturation: 0.75,
      highlights: 5,
      shadows: -5,
      grainEffect: 0,
      colorChrome: 0.9,
    },
    colorTone: {
      red: 0.98,
      green: 0.95,
      blue: 0.98,
    },
  },
  {
    id: 'classic-neg',
    name: 'Classic Neg.',
    filmSimulation: 'CLASSIC NEG.',
    description: 'Vintage look with warm tones and faded colors',
    settings: {
      brightness: 5,
      contrast: 1.15,
      saturation: 0.8,
      highlights: -10,
      shadows: 10,
      grainEffect: 0.4,
      colorChrome: 1.1,
    },
    colorTone: {
      red: 1.08,
      green: 0.95,
      blue: 0.85,
    },
  },
  {
    id: 'eterna',
    name: 'Eterna',
    filmSimulation: 'ETERNA/CINEMA',
    description: 'Cinematic look with muted colors and flat contrast',
    settings: {
      brightness: 0,
      contrast: 0.8,
      saturation: 0.7,
      highlights: -5,
      shadows: 5,
      grainEffect: 0.2,
      colorChrome: 0.95,
    },
    colorTone: {
      red: 0.95,
      green: 0.98,
      blue: 1.0,
    },
  },
  {
    id: 'acros',
    name: 'Acros',
    filmSimulation: 'ACROS',
    description: 'Black and white with rich tones and smooth gradation',
    settings: {
      brightness: 0,
      contrast: 1.1,
      saturation: 0,
      highlights: -10,
      shadows: 10,
      grainEffect: 0.2,
      colorChrome: 1.0,
    },
    colorTone: {
      red: 1.0,
      green: 1.0,
      blue: 1.0,
    },
  },
  {
    id: 'acros-r',
    name: 'Acros+R',
    filmSimulation: 'ACROS+R',
    description: 'Black and white with red filter effect',
    settings: {
      brightness: 0,
      contrast: 1.15,
      saturation: 0,
      highlights: -15,
      shadows: 15,
      grainEffect: 0.2,
      colorChrome: 1.0,
    },
    colorTone: {
      red: 1.2,
      green: 0.8,
      blue: 0.8,
    },
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    filmSimulation: 'MONOCHROME',
    description: 'Pure black and white with neutral tones',
    settings: {
      brightness: 0,
      contrast: 1.0,
      saturation: 0,
      highlights: 0,
      shadows: 0,
      grainEffect: 0.15,
      colorChrome: 1.0,
    },
    colorTone: {
      red: 1.0,
      green: 1.0,
      blue: 1.0,
    },
  },
];
