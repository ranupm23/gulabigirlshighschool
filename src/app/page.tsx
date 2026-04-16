"use client";

import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Users, Trophy, Target, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary-950">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-800/60 z-10 mix-blend-multiply" />
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentImageIndex}
              src={heroImages[currentImageIndex]} 
              alt="School campus" 
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 text-primary-100 mb-6 font-medium text-sm tracking-widest uppercase">
              Welcome to Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Outfit'] leading-tight">
              Igniting Minds, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent text-glow">
                Shaping Futures
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-primary-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Gulabi High School provides a holistic, innovative, and values-driven education that prepares students to lead in a global society.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/admission" 
                className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Start Your Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto justify-center flex items-center"
              >
                Discover Our Campus
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Quick Stats/Features */}
      <section className="py-20 bg-background relative z-30 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Modern Curriculum", desc: "Global standards tailored to local values." },
              { icon: Users, title: "Expert Faculty", desc: "Passionate educators dedicated to excellence." },
              { icon: Trophy, title: "Sports & Arts", desc: "Comprehensive extracurricular programs." },
              { icon: Globe, title: "Global Exposure", desc: "Preparing students for international success." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-primary-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-['Outfit']">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="py-24 bg-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                  alt="School building" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/10" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border-l-4 border-primary-500">
                <p className="text-4xl font-bold text-primary-600 mb-2 font-['Outfit']">25+</p>
                <p className="text-foreground/80 font-medium text-sm uppercase tracking-wider">Years of<br />Excellence</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-2 text-primary-600 font-semibold uppercase tracking-wider mb-4 text-sm">
                <Target size={18} />
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6 font-['Outfit'] leading-tight">
                Empowering the Leaders of Tomorrow.
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                At Gulabi High School, we believe that education extends far beyond the classroom walls. Our approach integrates rigorous academics with character building, cultural appreciation, and physical well-being.
              </p>
              <ul className="space-y-4 mb-10">
                {['Innovative teaching methodologies', 'State-of-the-art infrastructure', 'Focus on emotional intelligence', 'Strong community values'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                      <ArrowRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-950">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <SectionHeading title="Ready to Join Us?" subtitle="Admissions for the upcoming academic year are now open. Secure your child's future at Gulabi High School." light />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <Link 
              href="/admission" 
              className="bg-accent hover:bg-amber-400 text-primary-950 px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 inline-block shadow-xl shadow-accent/20"
            >
              Apply Online Now
            </Link>
          </motion.div>
        </div>
      </section>

    </PageTransition>
  );
}
