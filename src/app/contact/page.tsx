"use client";

import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <PageTransition>
      <div className="bg-primary-950 py-20 text-center relative">
        <div className="relative z-10">
          <SectionHeading title="Contact Us" subtitle="We're here to help and answer any question you might have. We look forward to hearing from you." light />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-8 font-['Outfit']">Get In Touch</h2>
            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Our Campus</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    123 Education Boulevard,<br />
                    Knowledge City, Phase 2,<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Phone</h3>
                  <p className="text-foreground/70 mb-1">+91 98765 43210 (General Inquiry)</p>
                  <p className="text-foreground/70">+91 98765 43211 (Admissions)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl shrink-0 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Email</h3>
                  <p className="text-foreground/70 mb-1">info@gulabihighschool.com</p>
                  <p className="text-foreground/70">admissions@gulabihighschool.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-xl shrink-0 mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Visiting Hours</h3>
                  <p className="text-foreground/70 mb-1">Monday - Friday: 9:00 AM - 3:00 PM</p>
                  <p className="text-foreground/70">Saturday: 9:00 AM - 12:30 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-primary-50"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6 font-['Outfit']">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-20 rounded-2xl overflow-hidden h-[400px] border border-primary-100 shadow-sm relative bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500 font-medium">Interactive Map Integration Placeholder (Google Maps / Mapbox)</p>
        </div>

      </div>
    </PageTransition>
  );
}
