"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, GraduationCap, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="text-orange-600" />,
      title: "Hamara Lakshya",
      desc: "Ghazipur ke har pratibha ko sahi disha aur manch pradan karna."
    },
    {
      icon: <Users className="text-indigo-600" />,
      title: "Community Support",
      desc: "Gaanv ke bacchon tak pahunch kar unhe shiksha ke prati jagruk banana."
    },
    {
      icon: <GraduationCap className="text-green-600" />,
      title: "Scholarship Program",
      desc: "Zarooratmand aur honhaar vidyarthiyon ko arthik sahayata dena."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image/Visual side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Box */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" 
                alt="Helping Students"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full">
                  <p className="text-white font-medium italic">Shiksha hi sabse bada dhan hai, aur hum ise har ghar tak pahunchana chahte hain.</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full -z-0 blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full -z-0 blur-3xl" />
          </motion.div>

          {/* Right: Content side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm bg-orange-50 px-4 py-1.5 rounded-full">
                Humari Pehchan
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Ghazipur Ke Yuvaon Ke <br />
                Sath <span className="text-indigo-600">Kadam se Kadam.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ghazipur Pratibha Khoj Sansthan sirf ek sanstha nahi, balki ek vishwas hai jo har honhaar vidyarthi ko unke sapno tak pahunchane mein madad karti hai. Humne ab tak hazaron bacchon ko guide kiya hai.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action in About */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex items-center gap-4 text-slate-700 font-bold">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-[10px] text-white">+500</div>
                </div>
                <span>Volunteers Ghazipur Mein Saath Hain.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;