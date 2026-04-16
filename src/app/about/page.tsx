"use client";

import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Heart, Shield } from "lucide-react";

export default function About() {
  const values = [
    { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum and innovative teaching methods." },
    { icon: Heart, title: "Character Building", desc: "Fostering empathy, integrity, and social responsibility." },
    { icon: Award, title: "Holistic Development", desc: "Balancing arts, sports, and academics." },
    { icon: Shield, title: "Safe Environment", desc: "A secure, inclusive, and nurturing campus." }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-primary-950 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10">
          <SectionHeading title="About Us" subtitle="Discover our roots, our mission, and what drives our pursuit of educational excellence." light />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 font-['Outfit']">Our Vision & Mission</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              At Gulabi High School, our vision is to be a beacon of educational transformation, where every student is empowered to realize their full potential and contribute meaningfully to society.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Our mission is to provide an inclusive, stimulating environment that fosters intellectual curiosity, critical thinking, and a lifelong love for learning, while staying deeply rooted in our cultural values.
            </p>
            <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
              <p className="italic text-primary-800 font-medium">"Education is not the learning of facts, but the training of the mind to think."</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Students studying" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-['Outfit']">Our Core Values</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">The principles that guide our everyday actions and shape our institution's culture.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-primary-100 shadow-sm text-center hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <v.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{v.title}</h3>
                <p className="text-foreground/70">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
