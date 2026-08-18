"use client"

import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, CheckCircle, Eye, EyeOff, Download, Share, User, Clock, Target, Ruler } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface AnalysisResultsProps {
  results?: {
    fractureDetected: boolean
    fractureType: string
    location: { x1: number; y1: number; x2: number; y2: number } | string
    confidence: number
    severity: string
    recommendations: string[]
    heatmapUrl?: string | null
    measurements: {
      displacement: string
      angulation: string
      length: string
    }
    resultImage: string | null
    gradcamImage: string | null
    detectedBoxes: { x1: number; y1: number; x2: number; y2: number; class: string; confidence: number }[]
    processingTime?: string
  }
  originalImage: string | null
}

export function AnalysisResults({ results, originalImage }: AnalysisResultsProps) {
  const [showHeatmap, setShowHeatmap] = useState(false)
  const [showBoxes, setShowBoxes] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  const confidence = results?.confidence ?? 0;

  const confidenceColor =
    confidence >= 90 ? "text-green-600" : confidence >= 70 ? "text-yellow-600" : "text-red-600"

  const severityColor =
    results?.severity === "Severe"
      ? "bg-red-100 text-red-700"
      : results?.severity === "Moderate"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-green-100 text-green-700"

  const handleDownloadReport = () => {
    if (results?.resultImage) {
      const link = document.createElement('a');
      link.href = results.resultImage;
      link.download = `analysis_report_${results.detection_id || 'unknown'}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleShareResults = () => {
    if (results?.resultImage) {
      navigator.clipboard.writeText(window.location.origin + results.resultImage)
        .then(() => alert('Image URL copied to clipboard!'))
        .catch(err => console.error('Failed to copy: ', err));
    }
  };

  return (
    <div
      className="space-y-6"
    >
      {/* Results Header */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {results?.fractureDetected ? (
              <AlertTriangle className="w-8 h-8 text-red-500" />
            ) : (
              <CheckCircle className="w-8 h-8 text-green-500" />
            )}
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {results?.fractureDetected ? "Fracture Detected" : "No Fracture Detected"}
              </h2>
               <p className="text-slate-600">Analysis completed in {results?.processingTime ?? "N/A"}</p>
             </div>
           </div>
           <div className="text-right">
            <div className={`text-3xl font-bold ${confidenceColor}`}>{results?.confidence?.toFixed(1)}%</div>
            <div className="text-sm text-slate-500">Confidence</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-lg font-semibold text-slate-800">{results?.fractureType}</div>
            <div className="text-sm text-slate-600">Type</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-lg font-semibold text-slate-800">{typeof results?.location === "object" ? `(${results?.location?.x1?.toFixed(1)}, ${results?.location?.y1?.toFixed(1)}) - (${results?.location?.x2?.toFixed(1)}, ${results?.location?.y2?.toFixed(1)})` : results?.location}</div>
            <div className="text-sm text-slate-600">Location</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <Badge className={severityColor}>{results?.severity}</Badge>
            <div className="text-sm text-slate-600 mt-1">Severity</div>
          </div>
        </div>
      </Card>

      {/* Image Analysis */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-slate-800">Image Analysis</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant={showHeatmap ? "default" : "outline"}
              size="sm"
              onClick={() => setShowHeatmap(!showHeatmap)}
              className={showHeatmap ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : ""}
            >
              {showHeatmap ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              {showHeatmap ? "Hide" : "Show"} Heatmap
            </Button>
            <Button
              variant={showBoxes ? "default" : "outline"}
              size="sm"
              onClick={() => setShowBoxes(!showBoxes)}
              className={showBoxes ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : ""}
            >
              {showBoxes ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              {showBoxes ? "Hide" : "Show"} Boxes
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            className="relative rounded-lg overflow-hidden"
          >
             {originalImage && (
               <img
                 src={showHeatmap ? results?.gradcamImage : (showBoxes ? results?.resultImage : originalImage) || "/placeholder.svg"}
                 alt="X-ray analysis"
                 className={`w-full max-w-md mx-auto rounded-lg shadow-lg`}
               />
             )}

             {/* <div>
              {showHeatmap && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-yellow-500/30 to-green-500/30 rounded-lg"
                >
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>High Risk</span>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Medium</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Low</span>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </Card>

      {/* Detailed Analysis Tabs */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
        <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg mb-6">
          {[
            { id: "overview", label: "Overview" },
            { id: "measurements", label: "Measurements" },
            { id: "recommendations", label: "Recommendations" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === tab.id ? "bg-white text-cyan-600 shadow-sm" : "text-slate-600 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          {activeTab === "overview" && (
            <div
              key="overview"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Confidence Breakdown</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Fracture Detection</span>
                        <span>{results?.confidence}%</span>
                      </div>
                      <Progress value={results?.confidence} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Location Accuracy</span>
                        <span>{results?.locationAccuracy ?? "N/A"}%</span>
                      </div>
                      <Progress value={results?.locationAccuracy ?? 0} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Type Classification</span>
                        <span>{results?.typeClassification ?? "N/A"}%</span>
                      </div>
                      <Progress value={results?.typeClassification ?? 0} className="h-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Analysis Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>Processing time: {results?.processingTime ?? "N/A"}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-slate-400" />
                      <span>Model version: FractureNet v2.1</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span>Reviewed by: AI Assistant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "measurements" && (
            <div
              key="measurements"
              className="space-y-4"
            >
              <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                <Ruler className="w-5 h-5 mr-2 text-cyan-500" />
                Fracture Measurements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-slate-50">
                  <div className="text-2xl font-bold text-slate-800">{results?.measurements?.displacement}</div>
                  <div className="text-sm text-slate-600">Displacement</div>
                </Card>
                <Card className="p-4 bg-slate-50">
                  <div className="text-2xl font-bold text-slate-800">{results?.measurements?.angulation}</div>
                  <div className="text-sm text-slate-600">Angulation</div>
                </Card>
                <Card className="p-4 bg-slate-50">
                  <div className="text-2xl font-bold text-slate-800">{results?.measurements?.length}</div>
                  <div className="text-sm text-slate-600">Fracture Length</div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "recommendations" && (
            <div
              key="recommendations"
              className="space-y-4"
            >
              <h4 className="font-semibold text-slate-800 mb-4">Clinical Recommendations</h4>
              <div className="space-y-3">
                {results?.recommendations?.map((rec, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-slate-700">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
           <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-200">
             <Button variant="outline" onClick={handleDownloadReport}>
               <Download className="w-4 h-4 mr-2" />
               Download Report
             </Button>
             <Button variant="outline" onClick={handleShareResults}>
               <Share className="w-4 h-4 mr-2" />
               Share Results
             </Button>
           </div>
      </Card>
    </div>
  )
}