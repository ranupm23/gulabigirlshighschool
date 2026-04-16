"use client";

import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { FileText, CalendarCheck, Users, CheckCircle2 } from "lucide-react";

export default function Admission() {
  const steps = [
    { icon: FileText, title: "Step 1: Application form", desc: "Fill out the online application form with all required details and documents." },
    { icon: Users, title: "Step 2: Interaction", desc: "An informal interaction session with the student and parents." },
    { icon: CheckCircle2, title: "Step 3: Admission Offer", desc: "Selected candidates will receive an admission offer letter via email." },
    { icon: CalendarCheck, title: "Step 4: Fee Payment", desc: "Complete the enrollment process by paying the necessary fees." }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-primary-950 py-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <SectionHeading title="Admissions Overview" subtitle="Join the Gulabi High School family. Information on the application process, dates, and requirements." light />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-3xl font-bold text-primary-900 mb-6 font-['Outfit']">Admission Process 2026-27</h2>
              <p className="text-lg text-foreground/80 mb-8">
                We are delighted that you are considering Gulabi High School for your child's education. We seek students who will benefit from our rigorous academic program and contribute positively to our community.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 relative">
                <div className="absolute hidden sm:block w-0.5 bg-primary-200 left-1/2 top-10 bottom-10 -translate-x-1/2" />
                {steps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-primary-100 flex gap-4 items-start z-10 relative"
                  >
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg shrink-0">
                      <step.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary-900 mb-2">{step.title}</h3>
                      <p className="text-foreground/70 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar / Inquiry Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-primary-50 sticky top-32">
              <h3 className="text-2xl font-bold text-primary-900 mb-6 font-['Outfit']">Admission Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1">Parent's Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Enter parent's name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Enter email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Enter phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-1">Grade Applying For</label>
                  <select className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white">
                    <option>Kindergarten</option>
                    <option>Primary (Grades 1-5)</option>
                    <option>Middle School (Grades 6-8)</option>
                    <option>High School (Grades 9-10)</option>
                  </select>
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
