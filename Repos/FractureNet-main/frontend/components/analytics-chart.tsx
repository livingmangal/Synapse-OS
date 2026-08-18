"use client"

import { motion } from "framer-motion"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

interface AnalyticsChartProps {
  type: "volume" | "accuracy" | "performance"
  timeRange: string
}

export function AnalyticsChart({ type, timeRange }: AnalyticsChartProps) {
  // Mock data - in real app this would come from API
  const volumeData = [
    { name: "Mon", value: 45, previous: 38 },
    { name: "Tue", value: 52, previous: 42 },
    { name: "Wed", value: 48, previous: 45 },
    { name: "Thu", value: 61, previous: 48 },
    { name: "Fri", value: 55, previous: 52 },
    { name: "Sat", value: 32, previous: 28 },
    { name: "Sun", value: 28, previous: 25 },
  ]

  const accuracyData = [
    { name: "Mon", accuracy: 94.2, confidence: 92.1 },
    { name: "Tue", accuracy: 95.1, confidence: 93.4 },
    { name: "Wed", accuracy: 93.8, confidence: 91.9 },
    { name: "Thu", accuracy: 96.2, confidence: 94.7 },
    { name: "Fri", accuracy: 94.9, confidence: 93.2 },
    { name: "Sat", accuracy: 95.4, confidence: 94.1 },
    { name: "Sun", accuracy: 94.7, confidence: 92.8 },
  ]

  const performanceData = [
    { name: "Mon", time: 24.2, queue: 2.1 },
    { name: "Tue", time: 23.8, queue: 1.9 },
    { name: "Wed", time: 25.1, queue: 2.4 },
    { name: "Thu", time: 22.9, queue: 1.8 },
    { name: "Fri", time: 24.7, queue: 2.2 },
    { name: "Sat", time: 23.3, queue: 1.7 },
    { name: "Sun", time: 24.1, queue: 2.0 },
  ]

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg">
          <p className="font-medium text-slate-800">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {type === "accuracy" ? "%" : type === "performance" ? "s" : ""}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        {type === "volume" && (
          <AreaChart data={volumeData}>
            <defs>
              <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} fill="url(#volumeGradient)" />
            <Line type="monotone" dataKey="previous" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
          </AreaChart>
        )}

        {type === "accuracy" && (
          <LineChart data={accuracyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis domain={[90, 100]} stroke="#64748b" />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ fill: "#06b6d4", strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="confidence"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: "#3b82f6", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        )}

        {type === "performance" && (
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="time" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            <Bar dataKey="queue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </motion.div>
  )
}
