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
  Heart,
  Activity,
  Droplets,
  Shield,
  Users,
  Sparkles,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Stethoscope,
  Ambulance,
  Pill,
  Syringe,
  Bandage,
  HeartPulse,
  Microscope,
  Brain,
  Smile,
  Zap
} from 'lucide-react';

const HealthPage = () => {
  const programs = [
    {
      icon: <Stethoscope size={28} />,
      title: "निःशुल्क स्वास्थ्य शिविर",
      description: "ग्रामीण और शहरी क्षेत्रों में नियमित स्वास्थ्य शिविर आयोजित करना। मुफ्त जांच, दवाई और विशेषज्ञ परामर्श।",
      color: "#ef4444"
    },
    {
      icon: <Droplets size={28} />,
      title: "रक्तदान शिविर",
      description: "नियमित रक्तदान शिविर आयोजित करना। रक्त की कमी को दूर करना और जरूरतमंदों तक रक्त पहुंचाना।",
      color: "#dc2626"
    },
    {
      icon: <HeartPulse size={28} />,
      title: "हृदय रोग जागरूकता",
      description: "हृदय रोगों के लक्षण, बचाव और उपचार के बारे में जागरूकता अभियान। नियमित जांच और परामर्श।",
      color: "#b91c1c"
    },
    {
      icon: <Brain size={28} />,
      title: "मानसिक स्वास्थ्य",
      description: "मानसिक स्वास्थ्य जागरूकता, परामर्श और सहायता। तनाव, अवसाद और अन्य मानसिक समस्याओं का समाधान।",
      color: "#7c3aed"
    },
    {
      icon: <Smile size={28} />,
      title: "बाल स्वास्थ्य",
      description: "बच्चों के लिए विशेष स्वास्थ्य कार्यक्रम। टीकाकरण, पोषण और विकास संबंधी परामर्श।",
      color: "#10b981"
    },
    {
      icon: <Microscope size={28} />,
      title: "स्वास्थ्य जागरूकता",
      description: "स्वच्छता, पोषण, बीमारियों की रोकथाम और स्वस्थ जीवनशैली के बारे में जागरूकता अभियान।",
      color: "#06b6d4"
    }
  ];

  const impactStats = [
    {
      number: "10,000+",
      label: "मरीजों की जांच",
      desc: "अब तक"
    },
    {
      number: "50+",
      label: "स्वास्थ्य शिविर",
      desc: "आयोजित"
    },
    {
      number: "500+",
      label: "रक्तदान",
      desc: "यूनिट्स"
    },
    {
      number: "25+",
      label: "विशेषज्ञ",
      desc: "जुड़े हुए"
    }
  ];

  const services = [
    "मुफ्त स्वास्थ्य जांच",
    "विशेषज्ञ परामर्श",
    "दवाई वितरण",
    "रक्तदान शिविर",
    "मानसिक स्वास्थ्य परामर्श",
    "टीकाकरण शिविर",
    "पोषण परामर्श",
    "योग एवं ध्यान कार्यक्रम"
  ];

  const healthTips = [
    "नियमित व्यायाम करें",
    "संतुलित आहार लें",
    "पर्याप्त पानी पीएं",
    "नियमित स्वास्थ्य जांच करवाएं",
    "तनाव से दूर रहें",
    "स्वच्छता का ध्यान रखें"
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 8 }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 30%, #b91c1c 60%, #dc2626 100%)',
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
                <Heart size={20} color="#fca5a5" />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  स्वास्थ्य सेवा
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
                स्वास्थ्य है
                <span style={{ color: '#fca5a5', display: 'block' }}>
                  सबसे बड़ा उपहार
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
                निःशुल्क स्वास्थ्य शिविर, रक्तदान, मानसिक स्वास्थ्य परामर्श और 
                स्वास्थ्य जागरूकता अभियान - हर घर तक स्वास्थ्य सेवा पहुंचाना 
                हमारा संकल्प है।
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
                        color: '#dc2626',
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
              हमारे <span style={{ color: '#dc2626' }}>स्वास्थ्य</span> कार्यक्रम
            </Typography>
            <Typography 
              sx={{ 
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              स्वास्थ्य के क्षेत्र में हमारे विभिन्न कार्यक्रम
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
                      borderColor: '#dc2626'
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

      {/* Services Section */}
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
                हमारी <span style={{ color: '#dc2626' }}>सेवाएँ</span>
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {services.map((service, index) => (
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
                      bgcolor: '#fef2f2',
                      border: '1px solid #fca5a5',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 30px rgba(220,38,38,0.1)',
                        bgcolor: '#fee2e2'
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
                      bgcolor: '#fecaca',
                      color: '#dc2626'
                    }}>
                      <CheckCircle2 size={24} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, color: '#0f172a' }}>
                      {service}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Health Tips Section */}
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
              स्वास्थ्य <span style={{ color: '#dc2626' }}>टिप्स</span>
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {healthTips.map((tip, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    bgcolor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#fef2f2',
                      borderColor: '#dc2626'
                    }
                  }}
                >
                  <Heart size={20} color="#dc2626" />
                  <Typography sx={{ fontWeight: 600, color: '#0f172a' }}>
                    {tip}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
        py: { xs: 8, md: 10 }
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <HeartPulse size={40} color="#fca5a5" style={{ margin: '0 auto 16px' }} />
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                स्वास्थ्य सेवा <span style={{ color: '#fca5a5' }}>अभियान</span> में जुड़ें
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
                हर घर तक स्वास्थ्य सेवा पहुंचाने के इस अभियान में आप भी शामिल हों। 
                आपका सहयोग किसी जरूरतमंद के जीवन में बड़ा बदलाव ला सकता है।
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
                      bgcolor: '#fca5a5',
                      color: '#7f1d1d',
                      borderRadius: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 10px 30px rgba(220,38,38,0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#f87171',
                        boxShadow: '0 15px 40px rgba(220,38,38,0.4)',
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
              <Sparkles size={16} color="#dc2626" />
              <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                🌳 एक पेड़ माँ के नाम
              </Typography>
              <Sparkles size={16} color="#dc2626" />
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#e2e8f0' }} />
              <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
                "स्वस्थ जीवन, सशक्त समाज"
              </Typography>
            </Stack>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', mt: 1 }}>
              हर घर तक स्वास्थ्य सेवा पहुंचाने का संकल्प
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HealthPage;