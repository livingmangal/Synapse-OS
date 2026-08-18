"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, HeartPulse, Clock, CheckCircle, Zap, Shield, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { UploadZone } from "@/components/upload-zone"
import { AnalysisResults } from "@/components/analysis-results"
import { RecentCases } from "@/components/recent-cases"

export default function Dashboard() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [analysisResults, setAnalysisResults] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("upload")
  const [totalAnalyses, setTotalAnalyses] = useState<number | null>(null);

  useEffect(() => {
    const fetchTotalAnalyses = async () => {
      try {
        const response = await fetch('http://localhost:8000/total_analyses');
        const data = await response.json();
        setTotalAnalyses(data.total_analyses);
      } catch (error) {
        console.error('Error fetching total analyses:', error);
      }
    };

    fetchTotalAnalyses();
  }, []);

  const handleImageUpload = async (file: File) => {
    setUploadedImage(URL.createObjectURL(file))
    setIsAnalyzing(true)
    setAnalysisProgress(0)
    setAnalysisResults(null)
    setActiveTab("analysis")

    const formData = new FormData()
    formData.append("file", file)

    try {
      const uploadResponse = await fetch("http://localhost:8000/detect", {
        method: "POST",
        body: formData,
      })

      if (!uploadResponse.ok) {
        throw new Error(`HTTP error! status: ${uploadResponse.status}`)
      }

      const data = await uploadResponse.json();
      setAnalysisResults(prevResults => ({
        ...prevResults,
        resultImage: `http://localhost:8000${data.result_image}`,
        gradcamImage: data.gradcam_image ? `http://localhost:8000${data.gradcam_image}` : null,
        fractureDetected: data.detections.length > 0,
        fractureType: data.detections.length > 0 ? data.detections[0].class : "N/A",
        location: data.detections.length > 0 ? data.detections[0].box : "N/A",
        confidence: data.detections.length > 0 ? data.detections[0].confidence * 100 : 0,
        detectedBoxes: data.detections || [],
      }));
      setAnalysisProgress(100);
      const firstDetection = data.detections.length > 0 ? data.detections[0] : null;

      setAnalysisResults({
        fractureDetected: !!firstDetection,
        fractureType: firstDetection?.class || "N/A",
        location: firstDetection?.box || "N/A",
        confidence: firstDetection?.confidence ? firstDetection.confidence * 100 : 0,
        severity: "Moderate", // This would ideally come from the backend
        recommendations: [
          "Consult with an orthopedic specialist for further evaluation.",
          "Consider a follow-up X-ray in 2-4 weeks to monitor healing.",
          "Prescribe pain management as needed.",
        ],
        heatmapUrl: data.gradcam_image ? `http://localhost:8000${data.gradcam_image}` : null,
        resultImage: `http://localhost:8000${data.result_image}`,
        gradcamImage: data.gradcam_image ? `http://localhost:8000${data.gradcam_image}` : null,
        measurements: {
          displacement: "2mm", // Placeholder
          angulation: "5 degrees", // Placeholder
          length: "3cm", // Placeholder
        },
        detectedBoxes: data.detections || [],
      });
    } catch (error) {
      console.error("Error uploading image:", error)
      // Optionally, show an error message to the user
    } finally {
      setIsAnalyzing(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-200/10 to-blue-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-emerald-200/10 to-cyan-300/10 rounded-full blur-3xl"
        />
      </div>

      <DashboardHeader />

      <main className="container mx-auto px-6 py-8 relative">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Total Analyses", value: totalAnalyses !== null ? totalAnalyses : 'Loading...', icon: HeartPulse, color: "from-cyan-500 to-blue-600" },
                { title: "Average Time", value: analysisResults?.processingTime ?? "3s", icon: Clock, color: "from-emerald-500 to-teal-600" },
                { title: "Accuracy Rate", value: ">90%", icon: Shield, color: "from-purple-500 to-indigo-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">{stat.title}</p>
                        <p className="text-3xl font-bold text-slate-800 mt-1">{stat.title === "Analyses Today" ? (totalAnalyses !== null ? totalAnalyses : 'Loading...') : stat.value}</p>
                      </div>
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column - Upload & Analysis */}
            <div className="xl:col-span-2 space-y-8">
              <motion.div variants={itemVariants}>
                <div className="flex space-x-2 bg-slate-100/80 backdrop-blur-sm p-2 rounded-2xl border border-slate-200/50">
                  {[
                    { id: "upload", label: "Upload X-Ray", icon: Upload },
                    { id: "analysis", label: "AI Analysis", icon: HeartPulse },
                    { id: "history", label: "Recent Cases", icon: Clock },
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-500 ${
                        activeTab === tab.id
                          ? "bg-white text-cyan-600 shadow-lg shadow-slate-200/50"
                          : "text-slate-600 hover:text-slate-800 hover:bg-white/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === "upload" && (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <UploadZone onImageUpload={handleImageUpload} uploadedImage={uploadedImage} isAnalyzing={isAnalyzing} />
                  </motion.div>
                )}

                {activeTab === "analysis" && (
                  <motion.div
                    key="analysis"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isAnalyzing ? (
                      <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200/50">
                        <div className="text-center space-y-6">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-16 h-16 mx-auto"
                          >
                            <HeartPulse className="w-16 h-16 text-cyan-500" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">AI Analysis in Progress</h3>
                            <p className="text-slate-600 mb-4">
                              Our advanced neural network is analyzing your X-ray image...
                            </p>
                            <Progress value={analysisProgress} className="w-full max-w-md mx-auto" />
                            <p className="text-sm text-slate-500 mt-2">{Math.round(analysisProgress)}% Complete</p>
                          </div>
                        </div>
                      </Card>
                    ) : analysisResults ? (
                      <AnalysisResults
                        originalImage={uploadedImage}
                        results={analysisResults}
                      />
                    ) : (
                      <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200/50 text-center">
                        <HeartPulse className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">No Analysis Yet</h3>
                        <p className="text-slate-500">Upload an X-ray image to begin AI analysis</p>
                      </Card>
                    )}
                  </motion.div>
                )}

                {activeTab === "history" && (
                  <motion.div
                    key="history"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RecentCases />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column - Sidebar */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Quick Actions */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full justify-start bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 text-lg font-medium">
                      <Upload className="w-5 h-5 mr-3" />
                      New Analysis
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="w-full justify-start bg-transparent py-3 text-lg">
                      <Activity className="w-5 h-5 mr-3" />
                      View Results
                    </Button>
                  </motion.div>
                </div>
              </Card>

              {/* System Status */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-6">AI System Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">Neural Network</span>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Badge className="bg-green-100 text-green-700 px-3 py-1">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Active
                      </Badge>
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">Processing Speed</span>
                    <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
                      <Zap className="w-4 h-4 mr-2" />
                      Optimal
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
