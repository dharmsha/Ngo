"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Divider
} from '@mui/material';
import {
  Users,
  Trophy,
  Target,
  Sparkles,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Shield,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Star,
  Crown,
  Zap,
  TrendingUp,
  UserCheck,
  Handshake,
  Globe,
  Compass,
  Rocket,
  Medal,
  Dumbbell,
  Heart,
  Brain,
  Code
} from 'lucide-react';

const YouthDevelopmentPage = () => {
  const programs = [
    {
      icon: <Trophy size={28} />,
      title: "खेल-प्रतियोगिता",
      description: "क्रिकेट, फुटबॉल, वॉलीबॉल, कबड्डी, एथलेटिक्स और अन्य खेलों में प्रतियोगिताएं आयोजित करना। खिलाड़ियों को प्रोत्साहित करना।",
      color: "#f59e0b"
    },
    {
      icon: <Compass size={28} />,
      title: "करियर काउंसलिंग",
      description: "युवाओं के लिए करियर मार्गदर्शन, कोर्स चयन, उच्च शिक्षा के अवसर और रोजगार की जानकारी।",
      color: "#06b6d4"
    },
    {
      icon: <Star size={28} />,
      title: "नेतृत्व विकास",
      description: "युवाओं में नेतृत्व क्षमता, टीम वर्क, संचार कौशल और प्रबंधन क्षमताओं का विकास।",
      color: "#8b5cf6"
    },
    {
      icon: <Briefcase size={28} />,
      title: "उद्यमिता प्रशिक्षण",
      description: "युवाओं को उद्यमिता, स्टार्टअप, बिजनेस प्लानिंग और वित्तीय प्रबंधन का प्रशिक्षण।",
      color: "#10b981"
    },
    {
      icon: <Brain size={28} />,
      title: "स्किल डेवलपमेंट",
      description: "तकनीकी कौशल, सॉफ्ट स्किल्स, डिजिटल मार्केटिंग, कोडिंग और आधुनिक कौशल प्रशिक्षण।",
      color: "#ef4444"
    },
    {
      icon: <Heart size={28} />,
      title: "मानसिक स्वास्थ्य",
      description: "युवाओं के लिए मानसिक स्वास्थ्य परामर्श, तनाव प्रबंधन और सकारात्मक सोच विकास कार्यक्रम।",
      color: "#ec4899"
    }
  ];

  const impactStats = [
    {
      number: "10,000+",
      label: "युवा",
      desc: "जुड़े हुए"
    },
    {
      number: "500+",
      label: "प्रतियोगिताएं",
      desc: "आयोजित"
    },
    {
      number: "300+",
      label: "करियर सत्र",
      desc: "आयोजित"
    },
    {
      number: "80%",
      label: "सफलता दर",
      desc: "युवाओं में"
    }
  ];

  const workshops = [
    "नेतृत्व विकास कार्यशाला",
    "संचार कौशल प्रशिक्षण",
    "टीम वर्क और सहयोग",
    "समस्या समाधान कौशल",
    "निर्णय लेने की कला",
    "समय प्रबंधन",
    "तनाव प्रबंधन",
    "सकारात्मक सोच विकास"
  ];

  const youthQuotes = [
    "युवा शक्ति ही राष्ट्र की ताकत है",
    "हर युवा में है बदलाव की क्षमता",
    "सपने देखो, संकल्प करो, सफल हो जाओ",
    "युवा ही भविष्य के निर्माता हैं"
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 8 }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 30%, #1e40af 60%, #2563eb 100%)',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 1.5,
                px: 3,
                py: 1.5,
                bgcolor: 'rgba(255,255,255,0.12)',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
                mb: 3
              }}>
                <Users size={20} color="#93c5fd" />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  युवा विकास
                </Typography>
              </Box>

              <Typography 
                variant="h2" 
                sx={{ 
                  color: '#fff', 
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  mb: 3,
                  lineHeight: 1.2
                }}
              >
                युवा हैं
                <span style={{ color: '#93c5fd', display: 'block' }}>
                  कल के निर्माता
                </span>
              </Typography>

              <Typography 
                sx={{ 
                  color: 'rgba(255,255,255,0.95)',
                  fontSize: '1.15rem',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.8
                }}
              >
                खेल-प्रतियोगिता, करियर काउंसलिंग, नेतृत्व विकास और कौशल प्रशिक्षण 
                के माध्यम से हम युवाओं को उनके सपनों को साकार करने के लिए 
                तैयार कर रहे हैं।
              </Typography>

              {/* Youth Quotes */}
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                mt: 4
              }}>
                {youthQuotes.map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        px: 4,
                        py: 2,
                        bgcolor: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '50px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.15)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                        {quote}
                      </Typography>
                    </Paper>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>

        {/* Decorative elements */}
        <Box sx={{
          position: 'absolute',
          top: -150,
          right: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147,197,253,0.05) 0%, transparent 70%)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147,197,253,0.03) 0%, transparent 70%)',
        }} />
      </Box>

      {/* Impact Stats */}
      <Box sx={{ 
        bgcolor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        py: 4
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {impactStats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 900,
                        color: '#2563eb',
                        fontSize: { xs: '1.5rem', md: '2.5rem' }
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontWeight: 700,
                        color: '#0f172a',
                        fontSize: { xs: '0.9rem', md: '1rem' }
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#94a3b8',
                        fontSize: '0.75rem'
                      }}
                    >
                      {stat.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 900, 
                color: '#0f172a',
                mb: 2
              }}
            >
              <span style={{ color: '#2563eb' }}>युवा</span> विकास कार्यक्रम
            </Typography>
            <Typography 
              sx={{ 
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              युवाओं के सर्वांगीण विकास के लिए हमारे कार्यक्रम
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    bgcolor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    height: '100%',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                      borderColor: '#2563eb'
                    }
                  }}
                >
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    bgcolor: program.color,
                  }} />

                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      bgcolor: `${program.color}15`,
                      color: program.color,
                    }}>
                      {program.icon}
                    </Box>

                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 800,
                          color: '#0f172a',
                          mb: 1
                        }}
                      >
                        {program.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#64748b',
                          lineHeight: 1.8,
                          fontSize: '0.95rem'
                        }}
                      >
                        {program.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Workshops Section */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 900, 
                  color: '#0f172a',
                  mb: 2
                }}
              >
                <span style={{ color: '#2563eb' }}>कार्यशालाएं</span> और प्रशिक्षण
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {workshops.map((workshop, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      bgcolor: '#eff6ff',
                      border: '1px solid #93c5fd',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 30px rgba(37,99,235,0.1)',
                        bgcolor: '#dbeafe'
                      }
                    }}
                  >
                    <Box sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      bgcolor: '#bfdbfe',
                      color: '#2563eb'
                    }}>
                      <Zap size={24} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>
                      {workshop}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 30%, #1e40af 60%, #2563eb 100%)',
        py: { xs: 8, md: 10 }
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Rocket size={40} color="#93c5fd" style={{ margin: '0 auto 16px' }} />
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                युवा <span style={{ color: '#93c5fd' }}>सशक्तिकरण</span> अभियान में जुड़ें
              </Typography>
              <Typography 
                sx={{ 
                  color: 'rgba(255,255,255,0.95)',
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.8
                }}
              >
                युवा शक्ति को सही दिशा देने के इस अभियान में आप भी शामिल हों। 
                आपका सहयोग किसी युवा के जीवन को बदल सकता है।
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Box
                    component="a"
                    href="/membership"
                    sx={{
                      display: 'inline-block',
                      px: 6,
                      py: 2.5,
                      bgcolor: '#93c5fd',
                      color: '#0f172a',
                      borderRadius: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 10px 30px rgba(37,99,235,0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#60a5fa',
                        boxShadow: '0 15px 40px rgba(37,99,235,0.4)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    सदस्य बनें
                  </Box>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Box
                    component="a"
                    href="/contact"
                    sx={{
                      display: 'inline-block',
                      px: 6,
                      py: 2.5,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      borderRadius: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.15)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    संपर्क करें
                  </Box>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Footer Motto */}
      <Box sx={{ bgcolor: '#f8fafc', py: 4 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            sx={{ textAlign: 'center' }}
          >
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" flexWrap="wrap">
              <Sparkles size={16} color="#2563eb" />
              <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                🌳 एक पेड़ माँ के नाम
              </Typography>
              <Sparkles size={16} color="#2563eb" />
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#e2e8f0' }} />
              <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
                "युवा शक्ति, राष्ट्र की प्रगति"
              </Typography>
            </Stack>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', mt: 1 }}>
              हर युवा को सशक्त बनाने का संकल्प
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default YouthDevelopmentPage;