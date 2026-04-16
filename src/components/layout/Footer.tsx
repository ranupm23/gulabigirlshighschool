import Link from "next/link";
import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-950 text-primary-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-50 p-2 rounded-lg text-primary-900">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Gulabi High School
              </span>
            </div>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Empowering minds, enriching lives, and shaping the future leaders of tomorrow through holistic education and values.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:bg-primary-500 hover:text-white transition-colors font-bold text-sm">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:bg-primary-500 hover:text-white transition-colors font-bold text-sm">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:bg-primary-500 hover:text-white transition-colors font-bold text-sm">
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/admission" className="text-primary-200 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/gallery" className="text-primary-200 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-primary-200 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-primary-200 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Academics</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">School Calendar</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">E-Learning Portal</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Results</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 shrink-0 mt-1" />
                <span className="text-primary-200">123 Education Boulevard, Knowledge City, Bangalore, 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400 shrink-0" />
                <span className="text-primary-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400 shrink-0" />
                <span className="text-primary-200">info@gulabihighschool.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gulabi High School. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-300">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
