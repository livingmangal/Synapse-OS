"use client"

import { motion } from "framer-motion"
import { Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Case {
  id: number
  timestamp: string
  status: "reviewed" | "pending"
  fractureDetected: boolean
  confidence: number
}

interface CaseLogProps {
  cases: Case[]
}

export function CaseLog({ cases }: CaseLogProps) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border h-fit">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>Case Log</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {cases.map((case_, index) => (
              <motion.div
                key={case_.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-muted/30 rounded-lg border border-border/50"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {case_.status === "reviewed" ? (
                      <CheckCircle className="h-4 w-4 text-accent" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-primary" />
                    )}
                    <span className="text-sm font-medium">Case #{case_.id}</span>
                  </div>
                  <Badge variant={case_.status === "reviewed" ? "secondary" : "default"} className="text-xs">
                    {case_.status}
                  </Badge>
                </div>

                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{case_.timestamp}</p>
                  <div className="flex items-center justify-between">
                    <span>{case_.fractureDetected ? "Fracture detected" : "No fracture"}</span>
                    <span className="font-medium text-primary">{case_.confidence}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
