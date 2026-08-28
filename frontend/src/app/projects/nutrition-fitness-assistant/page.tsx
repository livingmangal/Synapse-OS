'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface MacroStats {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface Meal {
  name: string;
  time: string;
  title: string;
  calories: number;
  macros: { protein: number; carbs: number; fat: number };
  instructions: string;
}

interface Exercise {
  name: string;
  specs: string;
}

interface WorkoutPlan {
  title: string;
  videoUrl: string;
  duration: string;
  coach: string;
  description: string;
  exercises: Exercise[];
}

export default function NutritionFitnessPage() {
  // Local active trackers
  const [currentMacros, setCurrentMacros] = useState<MacroStats>({
    calories: 820,
    protein: 42,
    carbs: 95,
    fat: 28,
  });

  const targetMacros = {
    calories: 2200,
    protein: 130,
    carbs: 240,
    fat: 75,
  };

  const [foodText, setFoodText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzedMeals, setAnalyzedMeals] = useState<any[]>([]);

  // Diet planner states
  const [dietType, setDietType] = useState('balanced');
  const [targetCalories, setTargetCalories] = useState(2000);
  const [mealPlan, setMealPlan] = useState<Meal[]>([]);
  const [planLoading, setPlanLoading] = useState(false);

  // Workout recommender states
  const [fitnessLevel, setFitnessLevel] = useState('intermediate');
  const [workoutGoal, setWorkoutGoal] = useState('endurance');
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);
  const [workoutLoading, setWorkoutLoading] = useState(false);

  // Load initial meal and workout plans
  useEffect(() => {
    fetchMealPlan();
    fetchWorkout();
  }, []);

  const fetchMealPlan = async (type = dietType, cal = targetCalories) => {
    try {
      setPlanLoading(true);
      const res = await fetch('/api/nutrition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate_meal_plan', dietType: type, targetCalories: cal }),
      });
      const data = await res.json();
      if (data.success) {
        setMealPlan(data.meals);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setPlanLoading(false);
    }
  };

  const fetchWorkout = async (level = fitnessLevel, goal = workoutGoal) => {
    try {
      setWorkoutLoading(true);
      const res = await fetch('/api/nutrition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate_workout', fitnessLevel: level, targetGoal: goal }),
      });
      const data = await res.json();
      if (data.success) {
        setWorkoutPlan(data.workout);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setWorkoutLoading(false);
    }
  };

  // Handle Food analysis submit
  const handleAnalyzeFood = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!foodText.trim()) return;

    try {
      setAnalyzing(true);
      const res = await fetch('/api/nutrition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'analyze_food', text: foodText }),
      });
      const data = await res.json();
      if (data.success) {
        // Append parsed meal
        setAnalyzedMeals((prev) => [
          ...prev,
          {
            text: foodText,
            items: data.items,
            totals: data.totals,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);

        // Add to active trackers
        setCurrentMacros((prev) => ({
          calories: Math.min(targetMacros.calories, prev.calories + data.totals.calories),
          protein: Math.min(targetMacros.protein, prev.protein + data.totals.protein),
          carbs: Math.min(targetMacros.carbs, prev.carbs + data.totals.carbs),
          fat: Math.min(targetMacros.fat, prev.fat + data.totals.fat),
        }));

        setFoodText('');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAnalyzing(false);
    }
  };

  // Helper to calculate percentages
  const getPercentage = (curr: number, target: number) => {
    return Math.min(100, Math.round((curr / target) * 100));
  };

  // Clean loaders dismiss
  useEffect(() => {
    const splash = document.getElementById('video-splash');
    if (splash) {
      splash.style.display = 'none';
      splash.classList.add('hide-splash');
    }
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', color: '#ECE4DA', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'var(--f-izmir), sans-serif' }}>
      
      {/* Top Banner Navigation Header */}
      <header className="pt-28 pb-10 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Link href="/projects" className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 hover:text-white transition-colors">
              ← Back to Agents
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-green-500/50 text-green-400 bg-green-500/5 font-semibold">
              Live Dashboard
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif uppercase tracking-tight text-white mb-2 leading-none">
            Nutrition & Fitness Suite
          </h1>
          <p className="text-sm md:text-base text-[#ECE4DA]/60 max-w-2xl font-light">
            SynapseOS AI agent cluster dedicated to clinical-grade dietary tracking, custom meal planning, exercise diagnostics, and longevity education.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-16">
        
        {/* SECTION 1: MACRO TRACKER DASHBOARD */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Progress Rings Container */}
          <div className="lg:col-span-7 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h2 className="text-lg uppercase tracking-wider text-white font-semibold mb-1">Today&apos;s Nutrition Summary</h2>
              <p className="text-xs text-[#ECE4DA]/50 mb-6 font-light">Values auto-updated from voice logs and typed intake forms.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center my-auto py-6 border-b border-white/5">
              {/* Calories Ring */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="48" cy="48" r="40" stroke="#ea580c" strokeWidth="6" fill="transparent"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * getPercentage(currentMacros.calories, targetMacros.calories)) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-bold text-white">{currentMacros.calories}</span>
                    <span className="text-[9px] text-[#ECE4DA]/40 uppercase tracking-widest">KCAL</span>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase mt-3 font-semibold text-[#ECE4DA]/80">Target: {targetMacros.calories}</span>
              </div>

              {/* Protein Ring */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="48" cy="48" r="40" stroke="#10b981" strokeWidth="6" fill="transparent"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * getPercentage(currentMacros.protein, targetMacros.protein)) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-bold text-white">{currentMacros.protein}g</span>
                    <span className="text-[9px] text-[#ECE4DA]/40 uppercase tracking-widest">Protein</span>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase mt-3 font-semibold text-[#ECE4DA]/80">Target: {targetMacros.protein}g</span>
              </div>

              {/* Carbs Ring */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="48" cy="48" r="40" stroke="#3b82f6" strokeWidth="6" fill="transparent"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * getPercentage(currentMacros.carbs, targetMacros.carbs)) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-bold text-white">{currentMacros.carbs}g</span>
                    <span className="text-[9px] text-[#ECE4DA]/40 uppercase tracking-widest">Carbs</span>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase mt-3 font-semibold text-[#ECE4DA]/80">Target: {targetMacros.carbs}g</span>
              </div>

              {/* Fat Ring */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="48" cy="48" r="40" stroke="#f59e0b" strokeWidth="6" fill="transparent"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * getPercentage(currentMacros.fat, targetMacros.fat)) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-bold text-white">{currentMacros.fat}g</span>
                    <span className="text-[9px] text-[#ECE4DA]/40 uppercase tracking-widest">Fats</span>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase mt-3 font-semibold text-[#ECE4DA]/80">Target: {targetMacros.fat}g</span>
              </div>
            </div>

            {/* Sub-values */}
            <div className="pt-5 flex flex-wrap gap-4 text-xs font-light text-[#ECE4DA]/50">
              <div>Daily Limits Met: <span className="font-bold text-green-400">Stable</span></div>
              <span className="text-white/10">|</span>
              <div>Water Intake: <span className="font-bold text-blue-400">1.8 / 2.5 L</span></div>
              <span className="text-white/10">|</span>
              <div>Calories Remaining: <span className="font-bold text-white">{targetMacros.calories - currentMacros.calories} kcal</span></div>
            </div>
          </div>

          {/* Food text analyzer */}
          <div className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-lg uppercase tracking-wider text-white font-semibold mb-1">Interactive Food Log</h2>
              <p className="text-xs text-[#ECE4DA]/50 mb-6 font-light">Type food descriptions below. Our API parses the text and logs the macros.</p>
              
              <form onSubmit={handleAnalyzeFood} className="space-y-4">
                <textarea
                  value={foodText}
                  onChange={(e) => setFoodText(e.target.value)}
                  placeholder="e.g. 'Avocado salad, 2 boiled eggs, and a glass of milk'"
                  rows={3}
                  className="w-full p-3.5 bg-black/40 border border-white/10 rounded-xl text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/30 focus:outline-none focus:border-[#ea580c] transition-colors"
                />
                <button
                  type="submit"
                  disabled={analyzing}
                  className="w-full h-11 bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-xl hover:bg-[#ECE4DA] transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {analyzing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                      <span>Analyzing Ingredients...</span>
                    </>
                  ) : (
                    <span>Analyze &amp; Add Meal</span>
                  )}
                </button>
              </form>
            </div>

            {/* Recents Log */}
            {analyzedMeals.length > 0 && (
              <div className="mt-6 pt-5 border-t border-white/5 max-h-40 overflow-y-auto space-y-2">
                <h4 className="text-[10px] uppercase tracking-widest text-[#ECE4DA]/40 mb-2">Recently Analyzed</h4>
                {analyzedMeals.map((meal, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs p-2 rounded bg-white/5">
                    <div className="truncate max-w-[70%]">
                      <p className="font-semibold text-white truncate">{meal.text}</p>
                      <p className="text-[9px] text-[#ECE4DA]/40">{meal.timestamp}</p>
                    </div>
                    <span className="text-[#ea580c] font-semibold">+{meal.totals.calories} kcal</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: PERSONALIZED MEAL PLANNER CONSOLE */}
        <section className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl uppercase tracking-wider text-white font-semibold mb-1">Clinical Meal Planner</h2>
              <p className="text-xs text-[#ECE4DA]/50 font-light">Generate customized meal regimes aligned to target metabolic targets.</p>
            </div>
            
            {/* Planner controls */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-widest text-[#ECE4DA]/40 mb-1">Diet Preference</label>
                <div className="flex bg-black/60 p-0.5 rounded-lg border border-white/5">
                  {['balanced', 'keto', 'vegan', 'high-protein'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setDietType(type);
                        fetchMealPlan(type, targetCalories);
                      }}
                      className={`px-3 py-1 rounded text-[10px] uppercase font-semibold transition-all cursor-pointer ${
                        dietType === type ? 'bg-[#ea580c] text-white' : 'text-[#ECE4DA]/60 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-44">
                <div className="flex justify-between text-[9px] uppercase tracking-widest text-[#ECE4DA]/40 mb-1">
                  <span>Target Energy</span>
                  <span className="font-bold text-white">{targetCalories} kcal</span>
                </div>
                <input
                  type="range"
                  min="1200"
                  max="3500"
                  step="100"
                  value={targetCalories}
                  onChange={(e) => {
                    const cal = parseInt(e.target.value, 10);
                    setTargetCalories(cal);
                    fetchMealPlan(dietType, cal);
                  }}
                  className="w-full accent-[#ea580c] h-1 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {planLoading ? (
            <div className="h-64 flex flex-col items-center justify-center text-[#ECE4DA]/50">
              <span className="w-8 h-8 border-3 border-[#ea580c] border-t-transparent rounded-full animate-spin mb-4"></span>
              <span className="text-xs uppercase tracking-widest font-semibold">Generating plan...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mealPlan.map((meal) => (
                <div key={meal.name} className="bg-black/30 border border-white/5 p-5 rounded-xl flex flex-col justify-between hover:border-white/15 transition-all">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-[#ECE4DA]/60 border border-white/5">
                        {meal.name}
                      </span>
                      <span className="text-[10px] text-[#ECE4DA]/40">{meal.time}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2 leading-snug">{meal.title}</h4>
                    <p className="text-xs text-[#ECE4DA]/50 font-light line-clamp-3 mb-4">{meal.instructions}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider text-[#ECE4DA]/60">
                    <span className="text-[#ea580c]">{meal.calories} kcal</span>
                    <div className="flex gap-2">
                      <span>P: {meal.macros.protein}g</span>
                      <span>C: {meal.macros.carbs}g</span>
                      <span>F: {meal.macros.fat}g</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 3: FITNESS & EXERCISE SUITE WITH EMBEDDED VIDEOS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls and schedule */}
          <div className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-xl uppercase tracking-wider text-white font-semibold mb-1">Workout Generator</h2>
              <p className="text-xs text-[#ECE4DA]/50 font-light">Exercise diagnostics matching cardiovascular and strength goals.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#ECE4DA]/40 mb-1.5">Fitness Level</label>
                <div className="flex bg-black/60 p-0.5 rounded-lg border border-white/5">
                  {['beginner', 'intermediate', 'advanced'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        setFitnessLevel(lvl);
                        fetchWorkout(lvl, workoutGoal);
                      }}
                      className={`flex-1 py-1.5 rounded text-[10px] uppercase font-semibold transition-all cursor-pointer ${
                        fitnessLevel === lvl ? 'bg-[#ea580c] text-white' : 'text-[#ECE4DA]/60 hover:text-white'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#ECE4DA]/40 mb-1.5">Workout Goal</label>
                <div className="flex bg-black/60 p-0.5 rounded-lg border border-white/5">
                  {[
                    { key: 'endurance', label: 'Endurance & Core' },
                    { key: 'muscle', label: 'Hypertrophy / Power' },
                    { key: 'loss', label: 'Metabolic HIIT' }
                  ].map((gl) => (
                    <button
                      key={gl.key}
                      onClick={() => {
                        setWorkoutGoal(gl.key);
                        fetchWorkout(fitnessLevel, gl.key);
                      }}
                      className={`flex-1 py-1.5 rounded text-[10px] uppercase font-semibold transition-all cursor-pointer ${
                        workoutGoal === gl.key ? 'bg-[#ea580c] text-white' : 'text-[#ECE4DA]/60 hover:text-white'
                      }`}
                    >
                      {gl.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {workoutPlan && !workoutLoading && (
              <div className="pt-4 border-t border-white/5 space-y-3">
                <h4 className="text-[10px] uppercase tracking-widest text-[#ECE4DA]/40">Recommended Exercises</h4>
                <div className="divide-y divide-white/5">
                  {workoutPlan.exercises.map((ex, i) => (
                    <div key={i} className="py-2.5 flex justify-between items-center text-xs">
                      <span className="text-white font-medium">{ex.name}</span>
                      <span className="text-[#ea580c] font-semibold">{ex.specs}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Workout Video Player */}
          <div className="lg:col-span-7 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex flex-col justify-between">
            {workoutLoading ? (
              <div className="h-[380px] flex flex-col items-center justify-center text-[#ECE4DA]/50">
                <span className="w-8 h-8 border-3 border-[#ea580c] border-t-transparent rounded-full animate-spin mb-4"></span>
                <span className="text-xs uppercase tracking-widest font-semibold">Configuring workouts...</span>
              </div>
            ) : workoutPlan ? (
              <>
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={workoutPlan.videoUrl}
                    title={workoutPlan.title}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded border border-white/15 bg-white/5 text-[#ECE4DA]/50 mr-2">
                        {workoutPlan.duration}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-[#ea580c] font-semibold">
                        Led by {workoutPlan.coach}
                      </span>
                      <h3 className="text-lg font-serif uppercase tracking-tight text-white mt-1.5">{workoutPlan.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-[#ECE4DA]/60 leading-relaxed font-light">{workoutPlan.description}</p>
                </div>
              </>
            ) : null}
          </div>
        </section>

        {/* SECTION 4: HEALTH & WELLNESS BLOG */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl uppercase tracking-wider text-white font-semibold mb-1">Clinical Wellness Library</h2>
            <p className="text-xs text-[#ECE4DA]/50 font-light">Latest science-backed publications on longevity, metabolic scheduling, and cardiac hygiene.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <article className="group bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] uppercase tracking-widest text-[#ea580c] font-semibold">Dietary Science</span>
                <h3 className="text-base font-serif uppercase tracking-tight text-white group-hover:text-[#ea580c] transition-colors leading-tight">
                  Protein Distribution and Skeletal Muscle Synthesis
                </h3>
                <p className="text-xs text-[#ECE4DA]/50 leading-relaxed font-light">
                  How spreading protein intake uniformly across 4 daily boluses (30g-40g each) optimizes myofibrillar protein synthesis compared to a single evening spike.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-[#ECE4DA]/40 uppercase tracking-widest">
                <span>Read Time: 5 mins</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="group bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] uppercase tracking-widest text-[#ea580c] font-semibold">Neurology &amp; Gut</span>
                <h3 className="text-base font-serif uppercase tracking-tight text-white group-hover:text-[#ea580c] transition-colors leading-tight">
                  The Gut Microbiome and Neurotransmitter Production
                </h3>
                <p className="text-xs text-[#ECE4DA]/50 leading-relaxed font-light">
                  Reviewing the biochemical pathways through which gut bacterial fermentation of dietary fibers modulates systemic serotonin and GABA profiles.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-[#ECE4DA]/40 uppercase tracking-widest">
                <span>Read Time: 8 mins</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="group bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[9px] uppercase tracking-widest text-[#ea580c] font-semibold">Cardiology</span>
                <h3 className="text-base font-serif uppercase tracking-tight text-white group-hover:text-[#ea580c] transition-colors leading-tight">
                  Heart Rate Variability: Metrics of Autonomic Balance
                </h3>
                <p className="text-xs text-[#ECE4DA]/50 leading-relaxed font-light">
                  A physiological breakdown of RMSSD, SDNN, and raw ECG interval fluctuations as diagnostic proxies for systemic stress and physical recovery times.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-[#ECE4DA]/40 uppercase tracking-widest">
                <span>Read Time: 6 mins</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>
          </div>
        </section>

      </main>

    </div>
  );
}
