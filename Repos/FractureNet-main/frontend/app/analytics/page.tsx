"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Download, RefreshCw, Target, Clock, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DashboardHeader } from "@/components/dashboard-header"
import { AnalyticsChart } from "@/components/analytics-chart"
import { MetricsGrid } from "@/components/metrics-grid"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const timeRanges = [
    { value: "24h", label: "24 Hours" },
    { value: "7d", label: "7 Days" },
    { value: "30d", label: "30 Days" },
    { value: "90d", label: "90 Days" },
  ]

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Page Header */}
          <motion.div variants={itemVariants} className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Analytics Dashboard
              </h1>
              <p className="text-slate-600 mt-2">Comprehensive insights into AI performance and usage patterns</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 bg-white rounded-lg border border-slate-200 p-1">
                {timeRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setTimeRange(range.value)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                      timeRange === range.value
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-800"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center space-x-2 bg-transparent"
              >
                <motion.div
                  animate={isRefreshing ? { rotate: 360 } : {}}
                  transition={{ duration: 1, repeat: isRefreshing ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
                >
                  <RefreshCw className="w-4 h-4" />
                </motion.div>
                <span>Refresh</span>
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div variants={itemVariants}>
            <MetricsGrid timeRange={timeRange} />
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-cyan-500" />
                    Analysis Volume
                  </h3>
                  <Badge className="bg-green-100 text-green-700">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12.5%
                  </Badge>
                </div>
                <AnalyticsChart type="volume" timeRange={timeRange} />
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-cyan-500" />
                    Detection Accuracy
                  </h3>
                  <Badge className="bg-blue-100 text-blue-700">94.7% Avg</Badge>
                </div>
                <AnalyticsChart type="accuracy" timeRange={timeRange} />
              </Card>
            </motion.div>
          </div>

          {/* Performance Metrics */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-cyan-500" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Average Processing Time</span>
                      <span className="font-medium">24.3s</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-slate-500 mt-1">Target: &lt; 30s</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">System Uptime</span>
                      <span className="font-medium">99.8%</span>
                    </div>
                    <Progress value={99.8} className="h-2" />
                    <p className="text-xs text-slate-500 mt-1">Target: &gt; 99.5%</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Queue Processing</span>
                      <span className="font-medium">2.1s</span>
                    </div>
                    <Progress value={90} className="h-2" />
                    <p className="text-xs text-slate-500 mt-1">Target: &lt; 5s</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Error Rate</span>
                      <span className="font-medium">0.2%</span>
                    </div>
                    <Progress value={2} className="h-2" />
                    <p className="text-xs text-slate-500 mt-1">Target: &lt; 1%</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Model Confidence</span>
                      <span className="font-medium">94.7%</span>
                    </div>
                    <Progress value={94.7} className="h-2" />
                    <p className="text-xs text-slate-500 mt-1">Target: &gt; 90%</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">User Satisfaction</span>
                      <span className="font-medium">4.8/5</span>
                    </div>
                    <Progress value={96} className="h-2" />
                    <p className="text-xs text-slate-500 mt-1">Target: &gt; 4.5/5</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Recent Alerts */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-cyan-500" />
                System Alerts
              </h3>
              <div className="space-y-3">
                {[
                  { type: "warning", message: "Processing queue above normal capacity", time: "2 minutes ago" },
                  { type: "info", message: "Model updated to version 2.1.3", time: "1 hour ago" },
                  { type: "success", message: "Daily backup completed successfully", time: "3 hours ago" },
                ].map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 rounded-lg border-l-4 ${
                      alert.type === "warning"
                        ? "bg-yellow-50 border-yellow-400"
                        : alert.type === "info"
                          ? "bg-blue-50 border-blue-400"
                          : "bg-green-50 border-green-400"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-slate-700">{alert.message}</p>
                      <span className="text-xs text-slate-500">{alert.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
