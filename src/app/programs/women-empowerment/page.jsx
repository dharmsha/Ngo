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
  Heart,
  Sparkles,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Shield,
  Briefcase,
  Scissors,
  Laptop,
  Smile,
  Star,
  Crown,
  Flower,
  Sun,
  Target,
  Zap,
  Lightbulb,
  UserCheck,
  TrendingUp,
  Handshake,
  Globe
} from 'lucide-react';

const WomenEmpowermentPage = () => {
  const programs = [
    {
      icon: <Scissors size={28} />,
      title: "स्वरोजगार प्रशिक्षण",
      description: "सिलाई-कढ़ाई, खाना पकाना, मेहंदी, ब्यूटी पार्लर, बेकिंग और अन्य व्यावसायिक कौशल प्रशिक्षण।",
      color: "#ec4899"
    },
    {
      icon: <Users size={28} />,
      title: "स्वयं सहायता समूह",
      description: "महिलाओं के स्वयं सहायता समूह बनाना, उन्हें आर्थिक रूप से सशक्त बनाना और सामूहिक उद्यमिता को प्रोत्साहित करना।",
      color: "#8b5cf6"
    },
    {
      icon: <Briefcase size={28} />,
      title: "व्यवसायिक प्रशिक्षण",
      description: "छोटे व्यवसाय शुरू करने, बाजार संपर्क, वित्तीय प्रबंधन और उद्यमिता के लिए प्रशिक्षण।",
      color: "#f59e0b"
    },
    {
      icon: <Laptop size={28} />,
      title: "डिजिटल साक्षरता",
      description: "महिलाओं के लिए कंप्यूटर, इंटरनेट, डिजिटल पेमेंट और ऑनलाइन मार्केटिंग प्रशिक्षण।",
      color: "#06b6d4"
    },
    {
      icon: <Shield size={28} />,
      title: "कानूनी जागरूकता",
      description: "महिलाओं के अधिकारों, कानूनी सहायता, पुलिस सहायता और सुरक्षा के बारे में जागरूकता कार्यक्रम।",
      color: "#ef4444"
    },
    {
      icon: <Heart size={28} />,
      title: "स्वास्थ्य एवं पोषण",
      description: "महिलाओं के स्वास्थ्य, पोषण, मातृत्व स्वास्थ्य और स्वच्छता के बारे में जागरूकता।",
      color: "#10b981"
    }
  ];

  const impactStats = [
    {
      number: "5,000+",
      label: "महिलाएं",
      desc: "प्रशिक्षित"
    },
    {
      number: "200+",
      label: "स्वयं सहायता समूह",
      desc: "गठित"
    },
    {
      number: "70%",
      label: "आर्थिक सशक्तिकरण",
      desc: "दर"
    },
    {
      number: "100+",
      label: "उद्यम",
      desc: "स्थापित"
    }
  ];

  const achievements = [
    "5000+ महिलाओं को रोजगार के योग्य बनाया",
    "200+ स्वयं सहायता समूह गठित",
    "100+ छोटे व्यवसाय स्थापित",
    "50+ गाँवों में कार्यक्रम आयोजित",
    "1000+ महिलाओं को डिजिटल साक्षर बनाया",
    "500+ महिलाओं को कानूनी जागरूकता"
  ];

  const empowermentQuotes = [
    "नारी सशक्तिकरण से ही समाज सशक्त होता है",
    "हर महिला में छिपी है एक उद्यमी",
    "शिक्षा ही नारी को स्वतंत्र बनाती है",
    "सशक्त महिला, सशक्त समाज"
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 8 }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #831843 0%, #9d174d 30%, #be185d 60%, #db2777 100%)',
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
                <Users size={20} color="#f9a8d4" />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  महिला सशक्तिकरण
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
                नारी है
                <span style={{ color: '#f9a8d4', display: 'block' }}>
                  सशक्तिकरण की धुरी
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
                स्वरोजगार प्रशिक्षण, स्वयं सहायता समूह, डिजिटल साक्षरता और 
                कानूनी जागरूकता के माध्यम से हम हर महिला को आत्मनिर्भर 
                और सशक्त बना रहे हैं।
              </Typography>

              {/* Empowerment Quotes */}
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                mt: 4
              }}>
                {empowermentQuotes.map((quote, index) => (
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
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
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
                        color: '#db2777',
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
              <span style={{ color: '#db2777' }}>सशक्तिकरण</span> कार्यक्रम
            </Typography>
            <Typography 
              sx={{ 
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              महिला सशक्तिकरण के लिए हमारे विभिन्न कार्यक्रम
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
                      borderColor: '#db2777'
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

      {/* Achievements Section */}
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
                हमारी <span style={{ color: '#db2777' }}>उपलब्धियाँ</span>
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      bgcolor: '#fdf2f8',
                      border: '1px solid #f9a8d4',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#fce7f3',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 30px rgba(219,39,119,0.08)'
                      }
                    }}
                  >
                    <Crown size={20} color="#db2777" />
                    <Typography sx={{ fontWeight: 600, color: '#0f172a' }}>
                      {achievement}
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
        background: 'linear-gradient(135deg, #831843 0%, #9d174d 30%, #be185d 60%, #db2777 100%)',
        py: { xs: 8, md: 10 }
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Crown size={40} color="#f9a8d4" style={{ margin: '0 auto 16px' }} />
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                महिला <span style={{ color: '#f9a8d4' }}>सशक्तिकरण</span> अभियान में शामिल हों
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
                हर महिला आत्मनिर्भर बने - यही हमारा संकल्प। आइए, मिलकर 
                इस अभियान को आगे बढ़ाएं और समाज में बदलाव लाएं।
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
                      bgcolor: '#f9a8d4',
                      color: '#831843',
                      borderRadius: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 10px 30px rgba(219,39,119,0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#f472b6',
                        boxShadow: '0 15px 40px rgba(219,39,119,0.4)',
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
              <Sparkles size={16} color="#db2777" />
              <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                🌳 एक पेड़ माँ के नाम
              </Typography>
              <Sparkles size={16} color="#db2777" />
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#e2e8f0' }} />
              <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
                "नारी सशक्त, समाज सशक्त"
              </Typography>
            </Stack>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', mt: 1 }}>
              हर महिला आत्मनिर्भर बने - हमारा संकल्प
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default WomenEmpowermentPage;