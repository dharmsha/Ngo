"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Trophy,
  Users,
  Target,
} from "lucide-react";

const navItems = [
  { name: "होम", href: "/" },
  { name: "हमारे बारे में", href: "/about" },
  {
    name: "कार्यक्रम",
    dropdown: [
      { name: "शिक्षा अभियान", href: "/programs/education" },
      { name: "कौशल विकास", href: "/programs/skill-development" },
      { name: "स्वास्थ्य सेवा", href: "/programs/health" },
      { name: "महिला सशक्तिकरण", href: "/programs/women-empowerment" },
      { name: "युवा विकास", href: "/programs/youth-development" },
      { name: "सामाजिक न्याय", href: "/programs/social-justice" },
    ],
  },
  { name: "हमारा उद्देश्य", href: "/objective" },
  { name: "हमारा संकल्प", href: "/mission" },
  { name: "सदस्यता", href: "/membership" },
  { name: "संपर्क करें", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Information Bar - Enhanced */}
      <div className="hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm">
          <div className="flex items-center gap-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-amber-300/90 font-medium"
            >
              <Sparkles size={14} className="text-amber-400" />
              शिक्षा • रोजगार • सामाजिक न्याय
            </motion.p>
            <div className="flex items-center gap-4 text-slate-400 text-xs">
              <span className="flex items-center gap-1">
                <Phone size={12} />
                +91 88817 03633
              </span>
              <span className="w-px h-4 bg-slate-700"></span>
              <span className="flex items-center gap-1">
                <Mail size={12} />
                info@pratibhakhoj.org
              </span>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-medium text-sm"
          >
            🌳 एक पेड़ माँ के नाम • 
            <span className="text-amber-300 ml-1 font-bold">श्री अरविंद भूषण सरकार</span>
          </motion.p>
        </div>
      </div>

      {/* Main Navbar - Enhanced */}
      <motion.header 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "border-b border-slate-200/80 bg-white/95 shadow-lg backdrop-blur-md" 
            : "border-b border-slate-200/50 bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo - Enhanced */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div 
              whileHover={{ rotate: [0, -5, 5, -3, 0] }}
              transition={{ duration: 0.5 }}
              className="relative h-14 w-14 overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-white shadow-md group-hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/abc.jpeg"
                alt="गाजीपुर प्रतिभा खोज संगठन Logo"
                fill
                priority
                className="object-contain p-1.5"
              />
            </motion.div>

            <div className="leading-tight">
              <motion.h1 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-lg font-extrabold text-slate-900 sm:text-xl tracking-tight"
              >
                गाजीपुर प्रतिभा खोज
              </motion.h1>

              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold text-amber-600 tracking-[0.15em] uppercase">
                  संगठन
                </span>
                <span className="w-px h-3 bg-slate-300"></span>
                <span className="text-[10px] font-medium text-slate-500">
                  शिक्षा • सम्मान • अवसर
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item, index) => {
              if (item.dropdown) {
                return (
                  <motion.div 
                    key={item.name} 
                    className="group relative"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => setProgramOpen(!programOpen)}
                      className="flex items-center gap-1 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 hover:scale-105"
                    >
                      {item.name}
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown - Enhanced */}
                    <div className="invisible absolute left-0 top-full mt-1 w-64 translate-y-2 rounded-2xl border border-slate-100 bg-white/95 p-2 opacity-0 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-t border-l border-slate-100"></div>
                      {item.dropdown.map((subItem, idx) => (
                        <motion.div
                          key={subItem.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={subItem.href}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:text-amber-700 hover:pl-5"
                          >
                            <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                              <GraduationCap size={15} />
                            </div>
                            {subItem.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="relative rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 hover:scale-105"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* CTA - Enhanced */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/membership"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-300/50 hover:scale-105 hover:from-amber-600 hover:to-orange-600"
            >
              <HeartHandshake size={18} />
              सदस्य बनें
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse"></span>
            </Link>
          </motion.div>

          {/* Mobile Button - Enhanced */}
          <motion.button
            type="button"
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-800 transition-all duration-200 hover:bg-amber-50 hover:border-amber-300 lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-slate-200 bg-white/98 backdrop-blur-sm px-4 pb-6 pt-3 shadow-2xl lg:hidden"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <div key={item.name}>
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setProgramOpen(!programOpen)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 font-semibold text-slate-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50"
                        >
                          <span>{item.name}</span>

                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              programOpen ? "rotate-180" : ""
                            }`}
                          />
                        </motion.button>

                        <AnimatePresence>
                          {programOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-4 border-l-2 border-amber-400 pl-3"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 hover:pl-6"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-4 py-3.5 font-semibold text-slate-700 transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:text-amber-700"
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Mobile CTA - Enhanced */}
                <Link
                  href="/membership"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-4 font-bold text-white shadow-lg shadow-amber-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-300/50"
                >
                  <HeartHandshake size={18} />
                  सदस्य बनें
                </Link>

                {/* Mobile Contact Info */}
                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone size={16} className="text-amber-500" />
                    <span>+91  94152 89162</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail size={16} className="text-amber-500" />
                    <span>info@pratibhakhoj.org</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <Sparkles size={12} className="text-amber-400" />
                    <span>🌳 एक पेड़ माँ के नाम</span>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}