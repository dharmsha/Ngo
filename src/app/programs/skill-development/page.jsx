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
  Briefcase,
  Computer,
  Scissors,
  Users,
  Target,
  Sparkles,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Laptop,
  Cpu,
  Code,
  Smartphone,
  Wrench,
  Hammer,
  Watch,
  Building,
  TrendingUp,
  Lightbulb,
  UserCheck,
  Zap
} from 'lucide-react';

const SkillDevelopmentPage = () => {
  const programs = [
    {
      icon: <Computer size={28} />,
      title: "कंप्यूटर प्रशिक्षण",
      description: "बेसिक से एडवांस कंप्यूटर कोर्स, टाइपिंग, MS Office, इंटरनेट और डिजिटल साक्षरता प्रशिक्षण।",
      color: "#06b6d4"
    },
    {
      icon: <Scissors size={28} />,
      title: "सिलाई-कढ़ाई प्रशिक्षण",
      description: "महिलाओं के लिए सिलाई, कढ़ाई, ड्रेस डिजाइनिंग और फैशन टेक्नोलॉजी का व्यावसायिक प्रशिक्षण।",
      color: "#ec4899"
    },
    {
      icon: <Wrench size={28} />,
      title: "व्यावसायिक प्रशिक्षण",
      description: "इलेक्ट्रिकल, प्लंबिंग, कारपेंटरी, वेल्डिंग और अन्य कौशल आधारित व्यावसायिक प्रशिक्षण।",
      color: "#f59e0b"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "रोजगार मार्गदर्शन",
      description: "करियर काउंसलिंग, रिज्यूमे बनाना, इंटरव्यू की तैयारी और रोजगार के अवसरों की जानकारी।",
      color: "#10b981"
    },
    {
      icon: <Smartphone size={28} />,
      title: "डिजिटल मार्केटिंग",
      description: "सोशल मीडिया मार्केटिंग, ई-कॉमर्स, डिजिटल एडवरटाइजिंग और ऑनलाइन बिजनेस प्रशिक्षण।",
      color: "#8b5cf6"
    },
    {
      icon: <Building size={28} />,
      title: "उद्यमिता विकास",
      description: "स्टार्टअप, छोटे व्यवसाय, बिजनेस प्लानिंग और उद्यमिता कौशल विकास कार्यक्रम।",
      color: "#ef4444"
    }
  ];

  const impactStats = [
    {
      number: "2,500+",
      label: "युवा",
      desc: "प्रशिक्षित"
    },
    {
      number: "100+",
      label: "कार्यशालाएँ",
      desc: "आयोजित"
    },
    {
      number: "60%",
      label: "रोजगार दर",
      desc: "प्रशिक्षण के बाद"
    },
    {
      number: "25+",
      label: "साझेदार",
      desc: "उद्योग/संस्थान"
    }
  ];

  const courses = [
    "बेसिक कंप्यूटर (DCA)",
    "एडवांस कंप्यूटर (ADCA)",
    "टाइपिंग (हिंदी/अंग्रेजी)",
    "सिलाई एवं कढ़ाई",
    "फैशन डिजाइनिंग",
    "इलेक्ट्रिकल वायरिंग",
    "प्लंबिंग",
    "कारपेंटरी",
    "वेल्डिंग",
    "डिजिटल मार्केटिंग"
  ];

  const benefits = [
    "व्यावसायिक कौशल विकास",
    "अनुभवी प्रशिक्षक",
    "प्रैक्टिकल ट्रेनिंग",
    "प्रमाण पत्र प्रदान",
    "रोजगार सहायता",
    "उद्यमिता अवसर"
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 8 }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
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
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
                mb: 3
              }}>
                <Briefcase size={20} color="#f59e0b" />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  कौशल विकास
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
                कौशल बढ़ाएं,
                <span style={{ color: '#f59e0b', display: 'block' }}>
                  रोजगार पाएं
                </span>
              </Typography>

              <Typography 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '1.15rem',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.8
                }}
              >
                कंप्यूटर से लेकर सिलाई-कढ़ाई तक, हर कौशल हमारे प्रशिक्षण केंद्रों पर। 
                आत्मनिर्भर बनें और एक सशक्त भविष्य की ओर कदम बढ़ाएं।
              </Typography>
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
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
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
                        color: '#f59e0b',
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
              हमारे <span style={{ color: '#f59e0b' }}>कौशल</span> कार्यक्रम
            </Typography>
            <Typography 
              sx={{ 
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              विभिन्न क्षेत्रों में कौशल विकास के अवसर
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
                      borderColor: '#f59e0b'
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

      {/* Courses Offered */}
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
                हमारे <span style={{ color: '#f59e0b' }}>कोर्सेज</span>
              </Typography>
              <Typography 
                sx={{ 
                  color: '#64748b',
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                विभिन्न कौशल विकास कोर्सेज की सूची
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={2}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                      bgcolor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#fffbeb',
                        borderColor: '#f59e0b',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <CheckCircle2 size={20} color="#f59e0b" />
                    <Typography sx={{ fontWeight: 600, color: '#0f172a' }}>
                      {course}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
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
              <span style={{ color: '#f59e0b' }}>लाभ</span> और अवसर
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    bgcolor: '#fffbeb',
                    border: '1px solid #fcd34d',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 30px rgba(245,158,11,0.1)'
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
                    bgcolor: '#fef3c7',
                    color: '#f59e0b'
                  }}>
                    <Zap size={24} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: '#0f172a' }}>
                    {benefit}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        py: { xs: 8, md: 10 }
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Lightbulb size={40} color="#f59e0b" style={{ margin: '0 auto 16px' }} />
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                अपना <span style={{ color: '#f59e0b' }}>कौशल</span> बढ़ाएं
              </Typography>
              <Typography 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.8
                }}
              >
                आत्मनिर्भर बनें और एक सशक्त भविष्य की ओर कदम बढ़ाएं। 
                हमारे साथ जुड़ें और नए अवसरों को पाएं।
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
                      bgcolor: '#f59e0b',
                      color: '#0f172a',
                      borderRadius: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 10px 30px rgba(245,158,11,0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#d97706',
                        boxShadow: '0 15px 40px rgba(245,158,11,0.4)',
                        transform: 'translateY(-2px)',
                        color: '#fff'
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
              <Sparkles size={16} color="#f59e0b" />
              <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                🌳 एक पेड़ माँ के नाम
              </Typography>
              <Sparkles size={16} color="#f59e0b" />
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#e2e8f0' }} />
              <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
                "कौशल ही सफलता की कुंजी है"
              </Typography>
            </Stack>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', mt: 1 }}>
              हर युवा को कौशल, हर कौशल को रोजगार
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default SkillDevelopmentPage;