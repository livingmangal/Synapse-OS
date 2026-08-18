"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, RotateCcw, ArrowLeft, Brain, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export default function DemoPage() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const demoSteps = [
    {
      title: "X-ray Upload",
      description: "High-resolution medical image uploaded to secure cloud infrastructure",
      progress: 15,
    },
    {
      title: "Image Preprocessing",
      description: "Advanced algorithms enhance image quality and normalize contrast",
      progress: 35,
    },
    {
      title: "AI Analysis",
      description: "Deep learning model analyzes bone structure and identifies anomalies",
      progress: 70,
    },
    {
      title: "Results Generation",
      description: "Comprehensive report with confidence scores and recommendations",
      progress: 100,
    },
  ]

  const startDemo = () => {
    setIsPlaying(true)
    setProgress(0)
    setCurrentStep(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2

        // Update current step based on progress
        const stepIndex = demoSteps.findIndex((step) => newProgress <= step.progress)
        setCurrentStep(stepIndex === -1 ? demoSteps.length - 1 : stepIndex)

        if (newProgress >= 100) {
          clearInterval(interval)
          setIsPlaying(false)
          return 100
        }
        return newProgress
      })
    }, 100)
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentStep(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.back()} className="hover:bg-slate-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">FractureNet Demo</span>
            </div>
          </div>
          <Button
            onClick={() => router.push("/dashboard")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
          >
            Try Live Demo
          </Button>
        </div>
      </motion.header>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              See FractureNet in Action
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Watch our AI analyze a real X-ray image and detect fractures with clinical-grade accuracy
            </p>
          </div>

          {/* Demo Interface */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-xl">
            {/* Demo Image */}
            <div className="relative mb-8">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"
                  animate={{
                    opacity: isPlaying ? [0.2, 0.4, 0.2] : 0.2,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 1.5, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0 }}
                    >
                      <Brain className="w-24 h-24 text-slate-400 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-slate-500 text-lg">X-ray Analysis Simulation</p>
                  </div>
                </div>

                {/* Analysis Overlay */}
                <AnimatePresence>
                  {progress > 50 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-4 right-4"
                    >
                      <Badge className="bg-red-100 text-red-700 border-red-200">
                        <Target className="w-3 h-3 mr-1" />
                        Fracture Detected
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Analysis Progress</span>
                <span className="text-sm text-slate-500">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Current Step */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <Card className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Zap className="w-5 h-5 text-cyan-600" />
                    <h3 className="text-lg font-semibold text-slate-800">{demoSteps[currentStep]?.title}</h3>
                  </div>
                  <p className="text-slate-600">{demoSteps[currentStep]?.description}</p>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                onClick={isPlaying ? () => setIsPlaying(false) : startDemo}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    Pause Demo
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Start Demo
                  </>
                )}
              </Button>
              <Button onClick={resetDemo} variant="outline" size="lg" className="px-8 bg-transparent">
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            </div>
          </Card>

          {/* Results Preview */}
          <AnimatePresence>
            {progress === 100 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200/50">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Analysis Complete</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">94.7%</div>
                      <div className="text-slate-600">Confidence Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">Moderate</div>
                      <div className="text-slate-600">Severity Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">&lt; 30s</div>
                      <div className="text-slate-600">Analysis Time</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  )
}
