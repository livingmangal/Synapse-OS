"use client"

import { motion } from "framer-motion"
import { Clock, CheckCircle, AlertTriangle, Eye, MoreHorizontal } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RecentCases() {
  const cases = [
    {
      id: "FN-2024-001",
      timestamp: "2024-01-15 14:30",
      patient: "Patient #4521",
      status: "completed",
      fractureDetected: true,
      confidence: 94.7,
      location: "Distal radius",
      priority: "high",
    },
    {
      id: "FN-2024-002",
      timestamp: "2024-01-15 13:45",
      patient: "Patient #4520",
      status: "pending",
      fractureDetected: false,
      confidence: 87.2,
      location: "Femur",
      priority: "medium",
    },
    {
      id: "FN-2024-003",
      timestamp: "2024-01-15 12:15",
      patient: "Patient #4519",
      status: "reviewed",
      fractureDetected: true,
      confidence: 91.8,
      location: "Tibia",
      priority: "high",
    },
    {
      id: "FN-2024-004",
      timestamp: "2024-01-15 11:30",
      patient: "Patient #4518",
      status: "completed",
      fractureDetected: false,
      confidence: 96.1,
      location: "Humerus",
      priority: "low",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "reviewed":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700"
      case "medium":
        return "bg-yellow-100 text-yellow-700"
      case "low":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-slate-800 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-cyan-500" />
          Recent Cases
        </h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {cases.map((case_, index) => (
          <motion.div
            key={case_.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {case_.fractureDetected ? (
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                  <span className="font-medium text-slate-800">{case_.id}</span>
                </div>
                <Badge className={getPriorityColor(case_.priority)}>{case_.priority}</Badge>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600">{case_.patient}</p>
                <p className="text-slate-500">{case_.timestamp}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-600">{case_.location}</p>
                <p className="text-slate-500">{case_.confidence}% confidence</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <Badge className={getStatusColor(case_.status)}>{case_.status}</Badge>
              <Button variant="ghost" size="sm" className="text-cyan-600 hover:text-cyan-700">
                <Eye className="w-4 h-4 mr-1" />
                View
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}
