"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, ImageIcon, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface UploadZoneProps {
  onImageUpload: (file: File) => void
  uploadedImage: string | null
  isAnalyzing: boolean
}

export function UploadZone({ onImageUpload, uploadedImage, isAnalyzing }: UploadZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find((file) => file.type.startsWith("image/"))

    if (imageFile) {
      onImageUpload(imageFile)
    }
  }, [onImageUpload])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      onImageUpload(file)
    }
  }, [onImageUpload])

  return (
    <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200/50">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
        <Upload className="w-6 h-6 mr-3 text-cyan-500" />
        Upload X-ray Image
      </h2>

      <AnimatePresence mode="wait">
        {uploadedImage ? (
          <motion.div
            key="uploaded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-green-800 font-medium">Image uploaded successfully</span>
            </div>

            <div className="relative">
              <img
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded X-ray"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
              >
                <CheckCircle className="w-5 h-5 text-white" />
              </motion.div>
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => {
                  onImageUpload("")
                  setUploadProgress(0)
                }}
                className="mr-4"
              >
                Upload Different Image
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
              isDragOver ? "border-cyan-400 bg-cyan-50/50" : "border-slate-300 hover:border-slate-400"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <motion.div animate={isDragOver ? { scale: 1.1 } : { scale: 1 }} transition={{ duration: 0.2 }}>
              <ImageIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            </motion.div>

            <h3 className="text-xl font-semibold text-slate-700 mb-2">Drop your X-ray image here</h3>
            <p className="text-slate-500 mb-6">or click to browse files</p>

            <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" id="file-upload" />
            <label htmlFor="file-upload">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              >
                <span className="cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Select Image
                </span>
              </Button>
            </label>

            <div className="mt-6 text-xs text-slate-400">Supported formats: JPEG, PNG, DICOM • Max size: 50MB</div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
