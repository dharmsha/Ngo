"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Facebook, Instagram, Youtube, 
  Heart, Award, Send, ChevronRight, Twitter 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0F] text-white overflow-hidden border-t border-white/5">
      {/* Background Glow - Simple and Error-free */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-orange-600/20 blur-[100px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Logo & Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <h2 className="text-3xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent inline-block">
                GHAZIPUR
              </h2>
              <p className="text-[10px] font-bold text-white/40 tracking-[0.4em] uppercase mt-1">
                Pratibha Khoj Sansthan
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Ghazipur ke har vidyarthi ki pratibha ko naye pankh dene ka ek sankalp. Hum unhe shiksha aur scholarship ke madhyam se aage badhne mein madad karte hain.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="p-2.5 bg-white/5 rounded-xl border border-white/10 hover:bg-orange-600 hover:border-orange-500 transition-all text-white/70 hover:text-white">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-1 h-4 bg-orange-500 rounded-full" /> Navigation
              </h3>
              <ul className="space-y-4 text-sm text-white/50">
                {['Home', 'About NGO', 'Winners List', 'Exams'].map(item => (
                  <li key={item} className="group flex items-center gap-2">
                    <ChevronRight size={14} className="group-hover:text-orange-500 transition-colors" />
                    <Link href="#" className="group-hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-1 h-4 bg-orange-500 rounded-full" /> Support
              </h3>
              <ul className="space-y-4 text-sm text-white/50">
                {['Contact Us', 'Help Center', 'Privacy Policy', 'Terms'].map(item => (
                  <li key={item} className="group flex items-center gap-2">
                    <ChevronRight size={14} className="group-hover:text-orange-500 transition-colors" />
                    <Link href="#" className="group-hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] space-y-5">
              <h4 className="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-wider">
                <Mail size={16} className="text-orange-500" /> Stay Updated
              </h4>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email yahan likhein"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-orange-500 transition-all text-white"
                />
                <button className="absolute right-1 top-1 p-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors">
                  <Send size={16} />
                </button>
              </div>
              <div className="pt-2 space-y-3 border-t border-white/5">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Phone size={16} className="text-orange-500" />
                  <span className="font-bold">+91 9415289162</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MapPin size={16} className="text-orange-500" />
                  <span>Ghazipur, UP, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 tracking-wide text-center md:text-left">
            © {currentYear} <span className="text-white/60">GHAZIPUR PRATIBHA KHOJ</span>. <br className="md:hidden" /> Made with <Heart size={10} className="inline text-red-500 mx-1 fill-red-500" /> for Students.
          </p>
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <Award size={16} className="text-orange-500" />
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Certified NGO Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;