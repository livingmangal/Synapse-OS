"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowRight, HeartPulse, Shield, Clock, Activity, Microscope, Upload, CheckCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LandingPage() {
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [-2, 2, -2],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-cyan-300/20 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-slate-200/20"
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg"
              variants={pulseVariants}
              animate="animate"
            >
              <HeartPulse className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              FractureNet
            </span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => router.push("/dashboard")}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-500 px-6 py-3 text-lg font-medium"
            >
              Launch Analysis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100/80 to-blue-100/80 backdrop-blur-sm rounded-full text-cyan-700 text-sm font-semibold mb-8 border border-cyan-200/50"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Activity className="w-4 h-4 mr-2 animate-pulse" />
              AI-Powered Medical Imaging
            </motion.div>
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
              Detect Fractures
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>
            <motion.p
              className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Revolutionary AI technology that analyzes X-ray images in seconds, providing radiologists with precise
              fracture detection and detailed diagnostic insights.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => router.push("/dashboard")}
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 text-white px-10 py-5 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl"
              >
                Start Analysis
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: ">90% Accuracy",
                  desc: "Clinical-grade precision",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Clock,
                  title: "< 15 Seconds",
                  desc: "Lightning-fast analysis",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Microscope,
                  title: "Advanced AI",
                  desc: "Deep learning technology",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.7}s` }}
                  whileHover={{
                    scale: 1.08,
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <Card className="p-8 bg-white/70 backdrop-blur-xl border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all duration-700 rounded-3xl group">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-lg">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 relative"
        >
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Powered by Advanced
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Medical AI
              </span>
            </motion.h2>
            <motion.p
              className="text-2xl text-slate-300 max-w-4xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our neural networks are trained on millions of medical images from leading hospitals worldwide
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: HeartPulse,
                title: "Deep Neural Networks",
                desc: "Advanced convolutional neural networks specifically designed for medical imaging analysis",
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                icon: Activity,
                title: "Real-time Processing",
                desc: "Instant analysis with detailed heatmaps and confidence scoring for immediate diagnosis",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                icon: Shield,
                title: "Medical Grade Security",
                desc: "HIPAA compliant infrastructure with end-to-end encryption for patient data protection",
                gradient: "from-purple-500 to-indigo-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-500 h-full">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
