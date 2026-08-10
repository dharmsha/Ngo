"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Users,
  Sprout,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#f8faf5]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-2 lg:px-8">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm"
          >
            <Sprout size={18} />
            शिक्षा • सम्मान • अवसर
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            किसान, युवा और
            <span className="block text-green-700">
              समाज का विकास
            </span>
            <span className="block">
              हमारी प्राथमिकता
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            गाजीपुर प्रतिभा खोज संगठन का उद्देश्य शोषित, गरीब और सामाजिक
            रूप से पिछड़े वर्गों को शिक्षा, सम्मान और अवसर उपलब्ध कराना है।
            शिक्षा, रोजगार और सामाजिक न्याय के माध्यम से एक सशक्त समाज
            का निर्माण हमारा संकल्प है।
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/membership"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-1 hover:bg-green-800"
            >
              हमारे साथ जुड़ें
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:-translate-y-1 hover:border-green-600 hover:text-green-700"
            >
              हमारे कार्यक्रम
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <BookOpen className="mb-2 text-green-700" size={22} />
              <p className="text-xl font-black text-slate-900">शिक्षा</p>
              <p className="text-xs text-slate-500">सबके लिए</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <Users className="mb-2 text-green-700" size={22} />
              <p className="text-xl font-black text-slate-900">युवा</p>
              <p className="text-xs text-slate-500">सशक्तिकरण</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <HeartHandshake className="mb-2 text-green-700" size={22} />
              <p className="text-xl font-black text-slate-900">न्याय</p>
              <p className="text-xs text-slate-500">समान अवसर</p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT FARMER VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >

          {/* Main Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl"
          >
            <Image
              src="/abc.jpeg"
              alt="किसान और ग्रामीण विकास"
              fill
              priority
              className="object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Image Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-2 flex items-center gap-2">
                <Sprout size={20} />
                <span className="font-semibold">हमारा संकल्प</span>
              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                मेहनत को मिले
                <span className="text-yellow-300"> सम्मान</span>
              </h2>

              <p className="mt-2 text-sm text-white/85">
                किसान • शिक्षा • रोजगार • अवसर
              </p>
            </div>
          </motion.div>

          {/* Floating Card - Top */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-3 top-8 hidden rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:block lg:-left-8"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-100 p-3 text-green-700">
                <Sprout size={22} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  ग्रामीण विकास
                </p>
                <p className="font-bold text-slate-900">
                  नई उम्मीद
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card - Bottom */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 right-2 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:right-[-15px]"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
                <HeartHandshake size={22} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  हमारा लक्ष्य
                </p>
                <p className="font-bold text-slate-900">
                  समान अवसर
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-8 -top-8 hidden h-24 w-24 rounded-full border-2 border-dashed border-green-300 lg:block"
          />

        </motion.div>

      </div>
    </section>
  );
}