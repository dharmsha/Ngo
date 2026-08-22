"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  HeartHandshake,
  Sparkles,
  Heart,
} from "lucide-react";

const programs = [
  { name: "शिक्षा अभियान", href: "/programs/education" },
  { name: "कौशल विकास", href: "/programs/skill-development" },
  { name: "स्वास्थ्य सेवा", href: "/programs/health" },
  { name: "महिला सशक्तिकरण", href: "/programs/women-empowerment" },
  { name: "युवा विकास", href: "/programs/youth-development" },
  { name: "सामाजिक न्याय", href: "/programs/social-justice" },
];

const quickLinks = [
  { name: "होम", href: "/" },
  { name: "हमारे बारे में", href: "/about" },
  { name: "हमारा उद्देश्य", href: "/objective" },
  { name: "हमारा संकल्प", href: "/mission" },
  { name: "सदस्यता", href: "/membership" },
  { name: "संपर्क करें", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* CTA SECTION - Enhanced */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-emerald-800 px-6 py-10 shadow-2xl sm:px-10"
          >
            {/* Decorative circles */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10"
            />
            <div className="absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-white/5" />
            <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-yellow-400/5 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">

              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-3 flex items-center gap-2 text-green-200"
                >
                  <HeartHandshake size={20} />
                  <span className="text-sm font-semibold tracking-wide">
                    बदलाव का हिस्सा बनें
                  </span>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="max-w-2xl text-2xl font-black sm:text-3xl"
                >
                  शिक्षा, सम्मान और अवसर के लिए
                  <span className="block text-yellow-300"> हमारे साथ जुड़ें।</span>
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 max-w-2xl text-sm leading-7 text-green-50 sm:text-base"
                >
                  आपके छोटे से सहयोग से किसी विद्यार्थी, युवा, किसान या
                  जरूरतमंद परिवार के जीवन में बड़ा बदलाव आ सकता है।
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/membership"
                  className="group flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-green-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-2xl"
                >
                  सदस्य बनें
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* MAIN FOOTER - Enhanced */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-flex items-center gap-3 group">

              <motion.div 
                whileHover={{ rotate: [0, -5, 5, -3, 0] }}
                transition={{ duration: 0.5 }}
                className="relative h-14 w-14 overflow-hidden rounded-2xl border-2 border-amber-400 bg-white shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src="/abc.jpeg"
                  alt="गाजीपुर प्रतिभा खोज संगठन Logo"
                  fill
                  className="object-contain p-1.5"
                />
              </motion.div>

              <div>
                <h3 className="text-lg font-extrabold leading-tight">
                  गाजीपुर प्रतिभा
                  <br />
                  खोज संगठन
                </h3>

                <p className="mt-1 text-xs text-amber-400 font-medium tracking-wider">
                  ✦ शिक्षा • सम्मान • अवसर ✦
                </p>
              </div>

            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              हमारा उद्देश्य शोषित, गरीब और सामाजिक रूप से पिछड़े वर्गों
              को शिक्षा, सम्मान और अवसर उपलब्ध कराना है।
            </p>

            {/* Motto Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/30 rounded-full border border-green-700/30">
              <Sparkles size={12} className="text-green-400" />
              <span className="text-xs text-green-300 font-medium">🌳 एक पेड़ माँ के नाम</span>
            </div>

            {/* Social Media - Enhanced */}
            <div className="mt-6 flex items-center gap-3">

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Facebook size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/20"
              >
                <Youtube size={18} />
              </motion.a>

            </div>
          </motion.div>

          {/* QUICK LINKS - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-bold relative">
              महत्वपूर्ण लिंक
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-green-500 rounded-full"></span>
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:text-green-400 hover:pl-1"
                  >
                    <ArrowRight
                      size={14}
                      className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-400"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PROGRAMS - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-lg font-bold relative">
              हमारे कार्यक्रम
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-green-500 rounded-full"></span>
            </h3>

            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:text-green-400 hover:pl-1"
                  >
                    <div className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT - Enhanced with correct details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-lg font-bold relative">
              संपर्क करें
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-green-500 rounded-full"></span>
            </h3>

            <div className="space-y-5">

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-3 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-700/20 text-green-400 group-hover:bg-green-600/30 group-hover:text-green-300 transition-all duration-300">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    कार्यालय
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    गाजीपुर, उत्तर प्रदेश, भारत
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-3 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-700/20 text-green-400 group-hover:bg-green-600/30 group-hover:text-green-300 transition-all duration-300">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    फोन
                  </p>
                  <a
                    href="tel:+918881703633"
                    className="mt-1 block text-sm text-slate-300 transition-all duration-300 hover:text-green-400"
                  >
                    +91 94152 89162
                  </a>
                  <a
                    href="tel:+9194152 89162"
                    className="mt-0.5 block text-sm text-slate-400 transition-all duration-300 hover:text-green-400"
                  >
                    +91 94152 89162
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-3 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-700/20 text-green-400 group-hover:bg-green-600/30 group-hover:text-green-300 transition-all duration-300">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    ईमेल
                  </p>
                  <a
                    href="mailto:info@pratibhakhoj.org"
                    className="mt-1 block break-all text-sm text-slate-300 transition-all duration-300 hover:text-green-400"
                  >
                    info@pratibhakhoj.org
                  </a>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM BAR - Enhanced */}
      <div className="border-t border-white/10 bg-slate-900/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} गाजीपुर प्रतिभा खोज संगठन।
            <span className="hidden sm:inline"> सर्वाधिकार सुरक्षित।</span>
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500 sm:text-sm">
            <Link
              href="/privacy-policy"
              className="transition-all duration-300 hover:text-green-400 hover:underline underline-offset-2"
            >
              Privacy Policy
            </Link>

            <span className="w-px h-4 bg-slate-700"></span>

            <Link
              href="/terms"
              className="transition-all duration-300 hover:text-green-400 hover:underline underline-offset-2"
            >
              Terms & Conditions
            </Link>

            <span className="w-px h-4 bg-slate-700 hidden sm:block"></span>

            <span className="hidden sm:flex items-center gap-1 text-[10px] text-amber-400/50">
              <Heart size={10} fill="currentColor" />
              समाज सेवा
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}