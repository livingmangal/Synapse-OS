"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Activity, Users, Clock, Target, AlertTriangle, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MetricsGridProps {
  timeRange: string
}

export function MetricsGrid({ timeRange }: MetricsGridProps) {
  const metrics = [
    {
      title: "Total Analyses",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Fractures Detected",
      value: "342",
      change: "+8.2%",
      trend: "up",
      icon: Target,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Average Accuracy",
      value: "94.7%",
      change: "+2.1%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Processing Time",
      value: "24.3s",
      change: "-15.3%",
      trend: "down",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Active Users",
      value: "156",
      change: "+23.1%",
      trend: "up",
      icon: Users,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      title: "System Alerts",
      value: "3",
      change: "-50%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {metrics.map((metric, index) => (
        <motion.div key={metric.title} variants={itemVariants}>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-slate-600">{metric.title}</p>
                  <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                    <metric.icon className={`w-4 h-4 ${metric.color}`} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-800 mb-2">{metric.value}</p>
                <div className="flex items-center">
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  )}
                  <span className="text-sm text-green-600 font-medium mr-2">{metric.change}</span>
                  <Badge variant="outline" className="text-xs">
                    vs last {timeRange === "24h" ? "day" : timeRange === "7d" ? "week" : "month"}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
