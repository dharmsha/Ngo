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
  Target,
  Heart,
  Shield,
  Sparkles,
  Flag,
  Compass,
  Star,
  Award,
  Users,
  Handshake,
  Globe,
  BookOpen,
  Briefcase,
  HeartHandshake,
  Crown,
  Zap,
} from 'lucide-react';

const MissionPage = () => {
  const corePillars = [
    {
      icon: <BookOpen size={28} />,
      title: "शिक्षा",
      description: "गुणवत्तापूर्ण शिक्षा, निःशुल्क कोचिंग, छात्रवृत्ति और डिजिटल शिक्षा के माध्यम से हर बच्चे तक ज्ञान पहुंचाना।",
      color: "#10b981"
    },
    {
      icon: <Briefcase size={28} />,
      title: "रोजगार",
      description: "कौशल विकास, व्यावसायिक प्रशिक्षण और रोजगार मार्गदर्शन से युवाओं को आत्मनिर्भर बनाना।",
      color: "#f59e0b"
    },
    {
      icon: <Shield size={28} />,
      title: "सामाजिक न्याय",
      description: "समानता, स्वतंत्रता और बंधुत्व के मूल्यों को स्थापित करना। संविधान जागरूकता और कानूनी सहायता।",
      color: "#ef4444"
    }
  ];

  const commitments = [
    {
      icon: <Globe size={24} />,
      title: "व्यापक पहुंच",
      desc: "राष्ट्रीय, राज्य, जिला, ब्लॉक और ग्राम स्तर पर हमारी पहुंच"
    },
    {
      icon: <Users size={24} />,
      title: "सामुदायिक भागीदारी",
      desc: "स्थानीय प्रशासन, विद्यालयों और सामाजिक संस्थाओं के साथ समन्वय"
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "सदस्यता अभियान",
      desc: "समाज के हर वर्ग को जोड़ने का निरंतर प्रयास"
    }
  ];

  const futureGoals = [
    {
      number: "10,000+",
      label: "छात्र",
      desc: "हर साल शिक्षा तक पहुंच"
    },
    {
      number: "₹50 लाख+",
      label: "सहायता",
      desc: "छात्रवृत्ति और सामग्री सहायता"
    },
    {
      number: "100+",
      label: "कार्यक्रम",
      desc: "हर साल विभिन्न क्षेत्रों में"
    },
    {
      number: "50+",
      label: "गाँव",
      desc: "हमारी सेवा का विस्तार"
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 8 }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #064e3b 0%, #065f46 30%, #047857 70%, #059669 100%)',
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
                mb: 3,
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <Flag size={20} color="#fcd34d" />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  हमारा संकल्प
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
                शिक्षा, रोजगार और
                <span style={{ color: '#fcd34d', display: 'block' }}>
                  सामाजिक न्याय की बहाली
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
                संविधान के मूल्यों - समानता, स्वतंत्रता, बंधुत्व व न्याय का प्रचार-प्रसार 
                करते हुए एक सशक्त और समृद्ध समाज का निर्माण हमारा संकल्प है।
              </Typography>

              {/* Motto Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '24px',
                  padding: '12px 24px',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50px',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}
              >
                <Heart size={18} color="#fcd34d" fill="#fcd34d" />
                <Typography sx={{ color: '#fcd34d', fontWeight: 700, letterSpacing: '1px' }}>
                  "एक पेड़ माँ के नाम 🌳"
                </Typography>
              </motion.div>
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
          background: 'radial-gradient(circle, rgba(252,211,77,0.08) 0%, transparent 70%)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
        }} />
      </Box>

      {/* Core Pillars Section */}
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
              हमारे <span style={{ color: '#059669' }}>मुख्य</span> स्तंभ
            </Typography>
            <Typography 
              sx={{ 
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              इन तीन स्तंभों पर टिका है हमारा संकल्प - शिक्षा, रोजगार और सामाजिक न्याय
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {corePillars.map((pillar, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                    textAlign: 'center',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                      borderColor: '#059669'
                    }
                  }}
                >
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    bgcolor: pillar.color,
                  }} />

                  <Box sx={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    bgcolor: `${pillar.color}15`,
                    color: pillar.color,
                  }}>
                    {pillar.icon}
                  </Box>

                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 800,
                      color: '#0f172a',
                      mb: 2
                    }}
                  >
                    {pillar.title}
                  </Typography>

                  <Typography 
                    sx={{ 
                      color: '#64748b',
                      lineHeight: 1.8,
                      fontSize: '0.95rem'
                    }}
                  >
                    {pillar.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Implementation Framework */}
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
                कार्यान्वयन की <span style={{ color: '#059669' }}>रूपरेखा</span>
              </Typography>
              <Typography 
                sx={{ 
                  color: '#64748b',
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                हमारी संरचना और कार्यप्रणाली
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {commitments.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      borderRadius: '20px',
                      bgcolor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#f0fdf4',
                        borderColor: '#059669',
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    <Box sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      bgcolor: '#d1fae5',
                      color: '#059669',
                    }}>
                      {item.icon}
                    </Box>

                    <Typography 
                      sx={{ 
                        fontWeight: 700,
                        color: '#0f172a',
                        mb: 1
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography 
                      sx={{ 
                        color: '#64748b',
                        fontSize: '0.9rem',
                        lineHeight: 1.6
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Future Goals */}
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
              हमारे <span style={{ color: '#059669' }}>लक्ष्य</span>
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {futureGoals.map((goal, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    textAlign: 'center',
                    bgcolor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      borderColor: '#059669'
                    }
                  }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 900,
                      color: '#059669',
                      mb: 0.5
                    }}
                  >
                    {goal.number}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontWeight: 700,
                      color: '#0f172a',
                      fontSize: '1rem'
                    }}
                  >
                    {goal.label}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#94a3b8',
                      fontSize: '0.75rem',
                      mt: 0.5
                    }}
                  >
                    {goal.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: '#064e3b', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Crown size={40} color="#fcd34d" style={{ margin: '0 auto 16px' }} />
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                हमारे साथ <span style={{ color: '#fcd34d' }}>संकल्प</span> को साकार करें
              </Typography>
              <Typography 
                sx={{ 
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.8
                }}
              >
                आपका एक कदम हजारों जीवनों में बदलाव ला सकता है। 
                आइए, मिलकर एक बेहतर समाज का निर्माण करें।
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
                      bgcolor: '#fcd34d',
                      color: '#064e3b',
                      borderRadius: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 10px 30px rgba(252,211,77,0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#fbbf24',
                        boxShadow: '0 15px 40px rgba(252,211,77,0.4)',
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
              <Zap size={16} color="#059669" />
              <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                🌳 एक पेड़ माँ के नाम
              </Typography>
              <Zap size={16} color="#059669" />
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#e2e8f0' }} />
              <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
                संस्थापक: श्री अरविंद भूषण सरकार जी
              </Typography>
            </Stack>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', mt: 1 }}>
              "शिक्षा, रोजगार और सामाजिक न्याय की बहाली - हमारा जीवन संकल्प"
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default MissionPage;