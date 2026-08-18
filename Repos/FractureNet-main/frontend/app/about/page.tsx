import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbulb, Rocket, HeartPulse, Microscope, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen neural-bg text-white dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="absolute top-4 right-4 flex gap-4">
            <Button size="lg" className="neural-button px-8 py-4 text-lg font-semibold rounded-full" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button size="lg" className="neural-button px-8 py-4 text-lg font-semibold rounded-full" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
          <div className="float-animation mb-8">
            <HeartPulse className="w-20 h-20 text-red-500 mx-auto mb-6 brain-pulse" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white dark:text-white mb-6 font-mono">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              FractureNet
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing medical imaging analysis with AI-powered diagnostics.
          </p>
          <Button size="lg" className="neural-button px-8 py-4 text-lg font-semibold rounded-full" asChild>
            <Link href="#developer-section">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="neural-card p-8 rounded-2xl text-center">
            <Microscope className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-white/80 dark:text-gray-300">
              To enhance diagnostic accuracy and efficiency in healthcare through innovative, accessible, and reliable AI solutions for medical imaging.
            </p>
          </div>
          <div className="neural-card p-8 rounded-2xl text-center">
            <ShieldCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-white/80 dark:text-gray-300">
              To be the global leader in AI-driven medical diagnostics, empowering clinicians and improving patient outcomes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-mono">What We Offer</h2>
          <p className="text-lg mb-6 text-white/80 dark:text-gray-300">
            FractureNet provides advanced AI algorithms for analyzing various medical images, including X-rays, CT scans, and MRIs. Our platform assists radiologists and clinicians in detecting anomalies, quantifying disease progression, and making more informed decisions.
          </p>
          <p className="text-lg mb-6 text-white/80 dark:text-gray-300">
            We are committed to continuous research and development, ensuring our solutions remain at the forefront of medical technology. Join us in shaping the future of healthcare!
          </p>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer-section" className="py-16 px-4 bg-black/20 dark:bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-mono">Meet the Developer</h2>
          <div className="neural-card p-8 rounded-2xl inline-block">
            <p className="text-xl font-semibold mb-4">Shaikh Warsi</p>
            <p className="text-lg mb-6 text-white/80 dark:text-gray-300">
              This platform was passionately developed by Shaikh Warsi, dedicated to creating tools that enhance medical diagnostics.
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/yamin_shaikh28" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
                Instagram
              </a>
              <a href="https://github.com/shaikhwarsi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                <img src="/github-icon.svg" alt="GitHub" className="w-6 h-6" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shaikh-mohammad-warsi-141532271/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
