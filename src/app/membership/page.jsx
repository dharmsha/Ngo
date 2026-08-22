"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  Target,
  Shield,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  BookOpen,
  Briefcase,
  Heart,
} from "lucide-react";

export default function Membership() {
  const benefits = [
    {
      icon: <BookOpen className="text-green-600" size={24} />,
      title: "शिक्षा अभियान",
      desc: "निःशुल्क कोचिंग, छात्रवृत्ति और डिजिटल शिक्षा के अवसर",
    },
    {
      icon: <Briefcase className="text-green-600" size={24} />,
      title: "कौशल विकास",
      desc: "कंप्यूटर, सिलाई, कढ़ाई और व्यावसायिक प्रशिक्षण",
    },
    {
      icon: <Heart className="text-green-600" size={24} />,
      title: "स्वास्थ्य सेवा",
      desc: "निःशुल्क स्वास्थ्य शिविर, रक्तदान और स्वास्थ्य जागरूकता",
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "महिला सशक्तिकरण",
      desc: "स्वरोजगार प्रशिक्षण और स्वयं सहायता समूह",
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: "युवा विकास",
      desc: "खेल-प्रतियोगिता, करियर काउंसलिंग और नेतृत्व विकास",
    },
    {
      icon: <Shield className="text-green-600" size={24} />,
      title: "सामाजिक न्याय",
      desc: "संविधान जागरूकता, कानूनी सहायता और मानवाधिकार",
    },
  ];

  const membershipTiers = [
    {
      name: "साधारण सदस्य",
      price: "₹100",
      features: [
        "संगठन की गतिविधियों में भागीदारी",
        "मासिक न्यूज़लेटर",
        "कार्यक्रमों में प्राथमिकता",
        "सदस्यता प्रमाण पत्र",
      ],
      color: "from-emerald-400 to-emerald-600",
      popular: false,
    },
    {
      name: "आजीवन सदस्य",
      price: "₹1,000",
      features: [
        "सभी सुविधाएँ",
        "आजीवन सदस्यता कार्ड",
        "कार्यक्रमों में विशेष आमंत्रण",
        "संगठन के निर्णयों में भागीदारी",
        "विशेष सम्मान",
      ],
      color: "from-amber-400 to-orange-500",
      popular: true,
    },
    {
      name: "संरक्षक सदस्य",
      price: "₹5,000+",
      features: [
        "सभी सुविधाएँ",
        "संरक्षक सदस्यता प्रमाण पत्र",
        "संगठन के मुख्य कार्यक्रमों में मुख्य अतिथि",
        "मीडिया में विशेष उल्लेख",
        "जीवन भर सम्मान",
      ],
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-4">
            <HeartHandshake size={18} />
            हमारे साथ जुड़ें
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            सदस्यता लें और बनें
            <span className="block text-green-600">बदलाव का हिस्सा</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            गाजीपुर प्रतिभा खोज संगठन के साथ मिलकर शिक्षा, सम्मान और अवसर के इस 
            अभियान को आगे बढ़ाएं।
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Membership Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            सदस्यता विकल्प
          </h2>
          <p className="text-center text-slate-600 mb-12">
            अपनी सहभागिता के अनुसार सदस्यता चुनें
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                className={`relative bg-white rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  tier.popular 
                    ? "border-amber-400 shadow-xl shadow-amber-100/50 scale-105" 
                    : "border-slate-200 shadow-lg"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    लोकप्रिय
                  </div>
                )}

                <div className={`p-8 rounded-t-3xl bg-gradient-to-r ${tier.color} text-white`}>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black">{tier.price}</span>
                    <span className="text-sm opacity-75">/ वार्षिक</span>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`https://wa.me/9194152 89162?text=मैं ${tier.name} सदस्यता लेना चाहता/चाहती हूँ`}
                    target="_blank"
                    className={`mt-6 w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      tier.popular
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-105"
                        : "bg-green-600 text-white shadow-lg shadow-green-200 hover:shadow-xl hover:scale-105 hover:bg-green-700"
                    }`}
                  >
                    सदस्य बनें
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                अधिक जानकारी के लिए संपर्क करें
              </h2>
              <p className="text-emerald-100 mb-4">
                हमारी टीम आपकी हर सहायता के लिए उपलब्ध है
              </p>
              <div className="space-y-2 text-sm text-emerald-50">
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+91 88817 03633</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>info@pratibhakhoj.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>गाजीपुर, उत्तर प्रदेश</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="https://wa.me/9194152 89162"
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp पर संपर्क करें
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Motto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-slate-600">
            <Sparkles size={16} className="text-green-500" />
            <span className="font-medium">🌳 एक पेड़ माँ के नाम</span>
            <Sparkles size={16} className="text-green-500" />
          </div>
          <p className="text-sm text-slate-500 mt-2">
            "शिक्षा, सम्मान, अवसर" - हर सदस्य एक बदलाव
          </p>
        </motion.div>
      </div>
    </section>
  );
}