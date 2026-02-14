"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, 
  Clock, MessageSquare, Facebook, 
  Instagram, Youtube, Twitter 
} from 'lucide-react';

const ContactPage = () => {
  
  const contactDetails = [
    {
      icon: <Phone className="text-orange-600" />,
      title: "Hamein Call Karein",
      info: "+91 9415289162",
      subInfo: "Mon-Sat, 10am to 6pm",
      bg: "bg-orange-50"
    },
    {
      icon: <Mail className="text-indigo-600" />,
      title: "Email Likhein",
      info: "info@ghazipurpratibha.org",
      subInfo: "24/7 Support Online",
      bg: "bg-indigo-50"
    },
    {
      icon: <MapPin className="text-green-600" />,
      title: "Office Address",
      info: "Ghazipur, Uttar Pradesh",
      subInfo: "Pin: 233001, India",
      bg: "bg-green-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 bg-[#0A0A0F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mt-4"
          >
            Humein <span className="text-orange-500 text-outline">Sampark</span> Karein
          </motion.h1>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
            Ghazipur Pratibha Khoj se judi kisi bhi jankari ya sahayata ke liye niche diye gaye form ya details ka upyog karein.
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactDetails.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-700 font-medium">{item.info}</p>
                <p className="text-slate-400 text-sm mt-1">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-900">Message Bhejein</h2>
                <p className="text-slate-500 mt-2">Hum 24 ghante ke andar aapse sampark karenge.</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Poora Naam</label>
                    <input type="text" placeholder="Rahul Kumar" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-orange-500 transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-orange-500 transition-all shadow-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input type="email" placeholder="example@gmail.com" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-orange-500 transition-all shadow-sm" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Aapka Sawal / Message</label>
                  <textarea rows="4" placeholder="Apna sandesh yahan likhein..." className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 outline-none focus:border-orange-500 transition-all shadow-sm resize-none"></textarea>
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center gap-3 transition-all active:scale-95">
                  Message Bhejein <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Map & Socials */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Google Map Placeholder */}
              <div className="w-full h-[400px] rounded-[3rem] overflow-hidden border-8 border-slate-100 shadow-xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115163.665719918!2d83.51147575294025!3d25.57618118029598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991e0a29a00966f%3A0xc608a0d4b96860d5!2sGhazipur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy" 
                ></iframe>
              </div>

              {/* Social Connect */}
              <div className="p-10 bg-indigo-600 rounded-[3rem] text-white">
                <h3 className="text-2xl font-black mb-4">Social Media Par Judein</h3>
                <p className="text-indigo-100 mb-8">Latest updates, exam dates aur winners ki jankari ke liye hamein follow karein.</p>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 bg-white/10 hover:bg-white hover:text-indigo-600 rounded-xl flex items-center justify-center transition-all border border-white/20">
                      <Icon size={24} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;