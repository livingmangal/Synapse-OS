import { NextResponse } from 'next/server';

interface FoodItem {
  keywords: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  unit: string;
}

// Pre-defined database of foods for the semantic text analyzer
const FOOD_DATABASE: FoodItem[] = [
  { keywords: ['egg', 'eggs', 'huevo'], calories: 72, protein: 6.3, carbs: 0.4, fat: 4.8, unit: 'large' },
  { keywords: ['salmon', 'fish', 'pescado'], calories: 180, protein: 22, carbs: 0, fat: 10, unit: '100g' },
  { keywords: ['chicken', 'breast', 'pollo'], calories: 165, protein: 31, carbs: 0, fat: 3.6, unit: '100g' },
  { keywords: ['bread', 'toast', 'pan'], calories: 80, protein: 3, carbs: 15, fat: 1, unit: 'slice' },
  { keywords: ['avocado', 'aguacate'], calories: 160, protein: 2, carbs: 9, fat: 15, unit: 'medium' },
  { keywords: ['rice', 'arroz'], calories: 130, protein: 2.7, carbs: 28, fat: 0.3, unit: '100g' },
  { keywords: ['salad', 'lettuce', 'ensalada'], calories: 45, protein: 1.5, carbs: 8, fat: 0.2, unit: 'bowl' },
  { keywords: ['apple', 'manzana'], calories: 95, protein: 0.5, carbs: 25, fat: 0.3, unit: 'medium' },
  { keywords: ['banana', 'platano'], calories: 105, protein: 1.3, carbs: 27, fat: 0.3, unit: 'medium' },
  { keywords: ['milk', 'leche'], calories: 120, protein: 8, carbs: 12, fat: 5, unit: 'cup' },
  { keywords: ['oats', 'oatmeal', 'avena'], calories: 150, protein: 5, carbs: 27, fat: 2.5, unit: 'cup cooked' },
  { keywords: ['coffee', 'cafe'], calories: 5, protein: 0, carbs: 0, fat: 0, unit: 'cup' },
  { keywords: ['steak', 'beef', 'carne'], calories: 250, protein: 26, carbs: 0, fat: 16, unit: '100g' },
  { keywords: ['broccoli', 'brocoli'], calories: 35, protein: 2.8, carbs: 7, fat: 0.4, unit: 'cup' },
  { keywords: ['almonds', 'nuts', 'almendras'], calories: 160, protein: 6, carbs: 6, fat: 14, unit: 'handful' },
  { keywords: ['yogurt', 'yogur'], calories: 120, protein: 10, carbs: 6, fat: 4, unit: 'cup' },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;

    // 1. Food Text Macro Analyzer
    if (action === 'analyze_food') {
      const { text } = body;
      if (!text || typeof text !== 'string') {
        return NextResponse.json({ error: 'Text prompt is required' }, { status: 400 });
      }

      const textLower = text.toLowerCase();
      const matchedItems: any[] = [];
      let totalCalories = 0;
      let totalProtein = 0;
      let totalCarbs = 0;
      let totalFat = 0;

      // Simple scanning algorithm looking for matches & quantities
      FOOD_DATABASE.forEach((food) => {
        food.keywords.forEach((keyword) => {
          if (textLower.includes(keyword)) {
            // Check for potential quantities, e.g. "2 eggs", "double chicken"
            let quantity = 1;
            const words = textLower.split(/\s+/);
            const kwIdx = words.findIndex((w) => w.includes(keyword));
            if (kwIdx > 0) {
              const prevWord = words[kwIdx - 1];
              const parsedVal = parseInt(prevWord, 10);
              if (!isNaN(parsedVal)) {
                quantity = parsedVal;
              } else if (prevWord === 'two' || prevWord === 'double') {
                quantity = 2;
              } else if (prevWord === 'three') {
                quantity = 3;
              }
            }

            // Avoid adding the same food category twice under different keywords
            if (!matchedItems.some((item) => item.food === food.keywords[0])) {
              const itemCalories = Math.round(food.calories * quantity);
              const itemProtein = Number((food.protein * quantity).toFixed(1));
              const itemCarbs = Number((food.carbs * quantity).toFixed(1));
              const itemFat = Number((food.fat * quantity).toFixed(1));

              matchedItems.push({
                food: food.keywords[0].toUpperCase(),
                quantity,
                unit: food.unit,
                calories: itemCalories,
                protein: itemProtein,
                carbs: itemCarbs,
                fat: itemFat,
              });

              totalCalories += itemCalories;
              totalProtein += itemProtein;
              totalCarbs += itemCarbs;
              totalFat += itemFat;
            }
          }
        });
      });

      // Default values if no ingredients matched
      if (matchedItems.length === 0) {
        return NextResponse.json({
          success: true,
          analyzedText: text,
          items: [{ food: 'CUSTOM MEAL', quantity: 1, unit: 'serving', calories: 350, protein: 18, carbs: 40, fat: 12 }],
          totals: { calories: 350, protein: 18, carbs: 40, fat: 12 }
        });
      }

      return NextResponse.json({
        success: true,
        analyzedText: text,
        items: matchedItems,
        totals: {
          calories: Math.round(totalCalories),
          protein: Number(totalProtein.toFixed(1)),
          carbs: Number(totalCarbs.toFixed(1)),
          fat: Number(totalFat.toFixed(1)),
        },
      });
    }

    // 2. Personal Meal Planner Generator
    if (action === 'generate_meal_plan') {
      const { dietType, targetCalories } = body;
      const calories = targetCalories ? parseInt(targetCalories, 10) : 2000;

      // Adjust splits based on diet preference
      let proteinPct = 0.25;
      let carbPct = 0.50;
      let fatPct = 0.25;

      if (dietType === 'keto') {
        proteinPct = 0.20;
        carbPct = 0.05;
        fatPct = 0.75;
      } else if (dietType === 'vegan') {
        proteinPct = 0.15;
        carbPct = 0.60;
        fatPct = 0.25;
      } else if (dietType === 'high-protein') {
        proteinPct = 0.35;
        carbPct = 0.35;
        fatPct = 0.30;
      }

      const totalProteinG = Math.round((calories * proteinPct) / 4);
      const totalCarbsG = Math.round((calories * carbPct) / 4);
      const totalFatG = Math.round((calories * fatPct) / 9);

      // Meal recommendations
      const meals = [
        {
          name: 'Breakfast',
          time: '08:30 AM',
          title: dietType === 'keto' ? 'Avocado Egg Skillet' : dietType === 'vegan' ? 'Berry Almond Chia Oats' : 'Maple Oatmeal with Boiled Eggs',
          calories: Math.round(calories * 0.25),
          macros: { protein: Math.round(totalProteinG * 0.25), carbs: Math.round(totalCarbsG * 0.20), fat: Math.round(totalFatG * 0.30) },
          instructions: 'Whisk ingredients, cook gently over medium heat, serve warm with a dash of sea salt and olive oil.'
        },
        {
          name: 'Lunch',
          time: '01:30 PM',
          title: dietType === 'keto' ? 'Grilled Garlic Salmon with Asparagus' : dietType === 'vegan' ? 'Quinoa Buddha Bowl with Tahini' : 'Herb Grilled Chicken Breast with Brown Rice',
          calories: Math.round(calories * 0.35),
          macros: { protein: Math.round(totalProteinG * 0.35), carbs: Math.round(totalCarbsG * 0.40), fat: Math.round(totalFatG * 0.30) },
          instructions: 'Sear protein, steam grains/greens, arrange in a shallow bowl, drizzle with dressing.'
        },
        {
          name: 'Dinner',
          time: '07:30 PM',
          title: dietType === 'keto' ? 'Baked Butter Cod & Cauliflower Mash' : dietType === 'vegan' ? 'Lentil Sweet Potato Curry' : 'Roasted Turkey Breast with Sweet Potatoes & Broccoli',
          calories: Math.round(calories * 0.30),
          macros: { protein: Math.round(totalProteinG * 0.30), carbs: Math.round(totalCarbsG * 0.30), fat: Math.round(totalFatG * 0.30) },
          instructions: 'Bake in preheated oven at 200°C for 22 minutes. Garnish with fresh parsley and lemon wedges.'
        },
        {
          name: 'Snack',
          time: '04:30 PM',
          title: dietType === 'keto' ? 'Salted Macadamia Nuts' : dietType === 'vegan' ? 'Apple Slices with Peanut Butter' : 'Greek Yogurt with Pumpkin Seeds',
          calories: Math.round(calories * 0.10),
          macros: { protein: Math.round(totalProteinG * 0.10), carbs: Math.round(totalCarbsG * 0.10), fat: Math.round(totalFatG * 0.10) },
          instructions: 'Serve chilled or eat directly as a quick energy-boosting snack.'
        }
      ];

      return NextResponse.json({
        success: true,
        dietType,
        targetCalories: calories,
        macros: { protein: totalProteinG, carbs: totalCarbsG, fat: totalFatG },
        meals,
      });
    }

    // 3. Workout Routine Generator & Video References
    if (action === 'generate_workout') {
      const { fitnessLevel, targetGoal } = body;
      
      const level = fitnessLevel || 'intermediate';
      const goal = targetGoal || 'endurance';

      // Curated video resources (using high-quality free video links suitable for clinical wellness demo)
      const WORKOUT_VIDEOS = {
        strength: {
          title: 'Full Body Kettlebell Strength Routine',
          videoUrl: 'https://player.vimeo.com/video/312028688', // Vimeo demonstration workout
          duration: '35 mins',
          coach: 'Coach Mark R.',
          description: 'A comprehensive resistance training program targeting primary muscle groups: chest, back, quadriceps, and core.',
          exercises: [
            { name: 'Kettlebell Goblet Squats', specs: level === 'beginner' ? '3 sets of 10' : '4 sets of 12' },
            { name: 'Dumbbell Renegade Rows', specs: level === 'beginner' ? '3 sets of 8/side' : '4 sets of 10/side' },
            { name: 'Pike Pushups', specs: level === 'beginner' ? '3 sets of 8' : '4 sets of 12' },
            { name: 'Dumbbell Romanian Deadlifts', specs: level === 'beginner' ? '3 sets of 12' : '4 sets of 15' },
          ]
        },
        loss: {
          title: 'HIIT Fat Burning Calisthenics Routine',
          videoUrl: 'https://player.vimeo.com/video/510344443', // HIIT training demonstration
          duration: '22 mins',
          coach: 'Coach Angela M.',
          description: 'High-intensity interval cardiovascular workout designed to maximize oxygen intake and support long-term metabolic function.',
          exercises: [
            { name: 'Jumping Jacks (Warmup)', specs: '90 seconds' },
            { name: 'Bodyweight Squat Jumps', specs: level === 'beginner' ? '3 sets of 30s' : '4 sets of 45s' },
            { name: 'Mountain Climbers', specs: level === 'beginner' ? '3 sets of 40s' : '4 sets of 60s' },
            { name: 'Bicycle Crunches', specs: level === 'beginner' ? '3 sets of 30s' : '4 sets of 45s' },
          ]
        },
        endurance: {
          title: 'Core Stability & Mobility Routine',
          videoUrl: 'https://player.vimeo.com/video/701046422', // Yoga and mobility demonstration
          duration: '28 mins',
          coach: 'Coach Elena Y.',
          description: 'Low-impact core conditioning session designed to improve spinal alignment, joint flexibility, and postural durability.',
          exercises: [
            { name: 'Bird-Dog Core Extension', specs: '3 sets of 12/side' },
            { name: 'Forearm Side Plank', specs: level === 'beginner' ? '3 sets of 30s' : '4 sets of 45s' },
            { name: 'Kneeling Push-Ups', specs: '3 sets of 10' },
            { name: 'Dead Bug Stability Holds', specs: '3 sets of 10/side' },
          ]
        }
      };

      const selected = goal === 'muscle' ? WORKOUT_VIDEOS.strength : goal === 'loss' ? WORKOUT_VIDEOS.loss : WORKOUT_VIDEOS.endurance;

      return NextResponse.json({
        success: true,
        fitnessLevel: level,
        targetGoal: goal,
        workout: selected,
      });
    }

    return NextResponse.json({ error: 'Invalid action parameter' }, { status: 400 });
  } catch (err: any) {
    console.error('API Error:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
