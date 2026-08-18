"use client"

import React from "react"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Upload, FileImage, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface UploadSectionProps {
  onImageUpload: (data: any) => void
  uploadedImage: string | null
  isAnalyzing: boolean
}

export function UploadSection({ onImageUpload, uploadedImage, isAnalyzing }: UploadSectionProps) {
  const [dragActive, setDragActive] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleFile = async (file: File) => {
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("http://localhost:8000/detect", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      // Assuming the backend returns the image URL in 'result_image'
      onImageUpload(data)
    } catch (error) {
      console.error("Error uploading image:", error)
      // Handle error, e.g., show a toast notification
    }
  }

  // Simulate progress during analysis
  React.useEffect(() => {
    if (isAnalyzing) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 200)
      return () => clearInterval(interval)
    }
  }, [isAnalyzing])

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border">
      <CardContent className="p-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Upload X-ray Image</h2>
            <p className="text-muted-foreground">Supports DICOM, PNG, and JPG formats</p>
          </div>

          {!uploadedImage ? (
            <motion.div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">Drag and drop your X-ray image here</p>
              <p className="text-muted-foreground mb-4">or click to browse files</p>
              <Button variant="outline" onClick={() => document.getElementById("file-input")?.click()}>
                <FileImage className="h-4 w-4 mr-2" />
                Choose File
              </Button>
              <input
                id="file-input"
                type="file"
                accept=".dcm,.png,.jpg,.jpeg"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="relative rounded-lg overflow-hidden bg-muted">
                <img
                  src={uploadedImage || "/placeholder.svg"}
                  alt="Uploaded X-ray"
                  className="w-full h-64 object-contain"
                />
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                      <p className="text-sm font-medium">Analyzing X-ray...</p>
                      <div className="w-48">
                        <Progress value={progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Image uploaded successfully</p>
                <Button variant="outline" size="sm" onClick={() => document.getElementById("file-input")?.click()}>
                  Upload New Image
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
