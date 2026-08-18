"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, Download, Send, Eye, EyeOff } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface ResultsPanelProps {
  results: {
    fractureDetected: boolean
    fractureType: string
    confidence: number
    heatmapUrl: string
  }
  originalImage: string | null
  onSendToRadiologist: () => void
}

export function ResultsPanel({ results, originalImage, onSendToRadiologist }: ResultsPanelProps) {
  const [showHeatmap, setShowHeatmap] = useState(false)
  const [heatmapOpacity, setHeatmapOpacity] = useState([50])
  const { toast } = useToast()

  const handleSendToRadiologist = () => {
    onSendToRadiologist()
    toast({
      title: "Sent to Radiologist",
      description: "Case has been forwarded for expert review.",
    })
  }

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Report and heatmap are being prepared.",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Card className="bg-card/50 backdrop-blur-sm border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {results.fractureDetected ? (
              <CheckCircle className="h-5 w-5 text-destructive" />
            ) : (
              <XCircle className="h-5 w-5 text-accent" />
            )}
            <span>Analysis Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Results Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-4 bg-muted/50 rounded-lg"
            >
              <p className="text-sm text-muted-foreground mb-1">Fracture Status</p>
              <Badge variant={results.fractureDetected ? "destructive" : "secondary"} className="text-sm">
                {results.fractureDetected ? "Detected" : "Not Detected"}
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-4 bg-muted/50 rounded-lg"
            >
              <p className="text-sm text-muted-foreground mb-1">Type</p>
              <p className="font-medium text-foreground">{results.fractureType}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-4 bg-muted/50 rounded-lg"
            >
              <p className="text-sm text-muted-foreground mb-1">Confidence</p>
              <p className="text-2xl font-bold text-primary">{results.confidence}%</p>
            </motion.div>
          </div>

          {/* Image Viewer with Heatmap */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Image Analysis</h3>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => setShowHeatmap(!showHeatmap)}>
                  {showHeatmap ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showHeatmap ? "Hide" : "Show"} Heatmap
                </Button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden bg-muted">
              {originalImage && (
                <img
                  src={originalImage || "/placeholder.svg"}
                  alt="X-ray analysis"
                  className="w-full h-80 object-contain"
                />
              )}

              {showHeatmap && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: heatmapOpacity[0] / 100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <img
                    src={results.heatmapUrl || "/placeholder.svg"}
                    alt="Fracture heatmap"
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </motion.div>
              )}
            </div>

            {showHeatmap && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                <label className="text-sm font-medium text-foreground">Heatmap Opacity: {heatmapOpacity[0]}%</label>
                <Slider
                  value={heatmapOpacity}
                  onValueChange={setHeatmapOpacity}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </motion.div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleSendToRadiologist} className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Send to Radiologist
            </Button>
            <Button variant="outline" onClick={handleDownload} className="flex-1 bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
