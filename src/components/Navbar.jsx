"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, GraduationCap, Trophy, Phone, Home, ArrowRight, ChevronDown, User, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(null);

  // Move navLinks outside of useEffect but before it's used
  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} />, id: 'home' },
    { name: 'About Us', href: 'about', icon: <GraduationCap size={18} />, id: 'about' },
    { 
      name: 'Winners', 
      href: '#winners', 
      icon: <Trophy size={18} />, 
      id: 'winners',
      dropdown: [
        { name: '2026 Winners', href: 'winners-2026' },
        { name: '2025 Winners', href: 'winners-2025' },
        { name: 'Hall of Fame', href: 'hall-of-fame' },
      ]
    },
    { name: 'Contact', href: 'contact', icon: <Phone size={18} />, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array is fine now since navLinks is stable

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
    setShowDropdown(null);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* NGO Logo Section with hover effect */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group relative"
              onClick={() => setActiveLink('Home')}
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Heart size={24} fill="white" />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"
                />
              </motion.div>
              
              <div className="flex flex-col">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-xl font-black leading-none tracking-tight transition-colors duration-300 ${
                    scrolled ? 'text-slate-900' : 'text-slate-800'
                  }`}
                >
                  GHAZIPUR
                </motion.span>
                <span className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase">
                  Pratibha Khoj
                </span>
              </div>
            </Link>

            {/* Desktop Links with hover effects */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setShowDropdown(link.name)}
                  onMouseLeave={() => setShowDropdown(null)}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick(link.name)}
                    className={`relative text-sm font-bold transition-all duration-300 group flex items-center gap-1 ${
                      activeLink === link.name 
                        ? 'text-orange-600' 
                        : 'text-slate-700 hover:text-orange-600'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown size={16} className={`transition-transform duration-300 ${showDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                    
                    {/* Active indicator */}
                    {activeLink === link.name && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && showDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors flex items-center gap-2"
                >
                  <LogIn size={16} />
                  Login
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-7 py-3 rounded-xl font-bold shadow-lg shadow-orange-200 hover:shadow-xl hover:from-orange-600 hover:to-orange-700 hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
                >
                  Apply Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button with animation */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600 relative overflow-hidden group"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-orange-200"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 2, opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark background blur with click outside */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[110] lg:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-gradient-to-b from-white to-slate-50 z-[120] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 border-b border-slate-100 flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                    <Heart size={20} fill="white" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Menu</span>
                    <p className="text-xs text-slate-500">Navigation</p>
                  </div>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)} 
                  className="p-2 bg-white shadow-md rounded-full text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </motion.div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 overflow-y-auto">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.name)}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                          activeLink === link.name 
                            ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600' 
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span className={`p-2 rounded-xl transition-colors ${
                          activeLink === link.name 
                            ? 'bg-orange-600 text-white' 
                            : 'bg-slate-100 text-slate-600 group-hover:bg-orange-600 group-hover:text-white'
                        }`}>
                          {link.icon}
                        </span>
                        <span className="font-bold text-base">{link.name}</span>
                        
                        {link.dropdown && (
                          <ChevronDown size={16} className="ml-auto text-slate-400" />
                        )}
                      </Link>

                      {/* Mobile Dropdown */}
                      {link.dropdown && activeLink === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          className="ml-14 mt-1 space-y-1"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block p-3 text-sm font-medium text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Quick Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-4 bg-gradient-to-br from-orange-50 to-indigo-50 rounded-2xl"
                >
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">Quick Stats</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xl font-black text-slate-900">10k+</p>
                      <p className="text-xs text-slate-600">Students</p>
                    </div>
                    <div>
                      <p className="text-xl font-black text-slate-900">₹5L+</p>
                      <p className="text-xs text-slate-600">Scholarship</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer with actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 bg-white border-t border-slate-100 space-y-4"
              >
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-100 hover:shadow-2xl transition-all"
                >
                  Register Now
                </motion.button>
                
                <div className="flex items-center justify-between">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-slate-600 font-medium hover:text-orange-600 transition-colors"
                  >
                    <User size={16} />
                    <span className="text-sm">Login</span>
                  </motion.button>
                  
                  <div className="flex items-center gap-2 text-slate-500">
                    <Phone size={14} />
                    <span className="text-sm font-medium">+91 9415289162</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;