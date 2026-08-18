"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Activity, Users, Clock, Target } from "lucide-react"
import { Card } from "@/components/ui/card"

export function StatsCards() {
  const stats = [
    {
      title: "Total Analyses",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Activity,
      color: "text-blue-600",
    },
    {
      title: "Fractures Detected",
      value: "342",
      change: "+8.2%",
      trend: "up",
      icon: Target,
      color: "text-red-600",
    },
    {
      title: "Avg. Processing Time",
      value: "24s",
      change: "-15.3%",
      trend: "down",
      icon: Clock,
      color: "text-green-600",
    },
    {
      title: "Active Users",
      value: "156",
      change: "+23.1%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
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
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div key={stat.title} variants={itemVariants}>
          <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  )}
                  <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                </div>
              </div>
              <div className={`p-3 rounded-full bg-slate-100 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
