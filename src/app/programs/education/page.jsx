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
  Divider,
  Button
} from '@mui/material';
import {
  BookOpen,
  GraduationCap,
  Users,
  Heart,
  Sparkles,
  Award,
  Clock,
  MapPin,
  Target,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Book,
  PenTool,
  School,
  Tablet,
  Globe,
  Lightbulb,
  UserCheck
} from 'lucide-react';

const EducationPage = () => {
  const programs = [
    {
      icon: <Book size={28} />,
      title: "निःशुल्क कोचिंग",
      description: "प्रतियोगी परीक्षाओं और बोर्ड परीक्षाओं के लिए मुफ्त कोचिंग कक्षाएं। अनुभवी शिक्षकों द्वारा मार्गदर्शन।",
      color: "#10b981"
    },
    {
      icon: <Award size={28} />,
      title: "छात्रवृत्ति कार्यक्रम",
      description: "मेधावी और जरूरतमंद छात्रों को शैक्षिक सहायता। नियमित छात्रवृत्ति वितरण और शैक्षिक सामग्री प्रदान।",
      color: "#f59e0b"
    },
    {
      icon: <BookOpen size={28} />,
      title: "पुस्तक एवं स्टेशनरी वितरण",
      description: "निःशुल्क किताबें, कॉपियाँ, पेन, पेंसिल और अन्य शैक्षिक सामग्री का वितरण।",
      color: "#8b5cf6"
    },
    {
      icon: <Tablet size={28} />,
      title: "डिजिटल शिक्षा",
      description: "कंप्यूटर लैब, ऑनलाइन लर्निंग प्लेटफॉर्म और डिजिटल संसाधनों तक पहुंच।",
      color: "#06b6d4"
    },
    {
      icon: <School size={28} />,
      title: "स्कूल सहायता कार्यक्रम",
      description: "ग्रामीण स्कूलों में बुनियादी ढांचे, शिक्षक प्रशिक्षण और शैक्षिक संसाधनों का विकास।",
      color: "#ec4899"
    },
    {
      icon: <Globe size={28} />,
      title: "साक्षरता अभियान",
      description: "वयस्कों और बच्चों के लिए साक्षरता कार्यक्रम। रात्रि पाठशालाएं और सामुदायिक शिक्षा केंद्र।",
      color: "#ef4444"
    }
  ];

  const impactStats = [
    {
      number: "5,000+",
      label: "विद्यार्थी",
      desc: "अब तक शिक्षित"
    },
    {
      number: "200+",
      label: "गाँव",
      desc: "हमारी पहुंच"
    },
    {
      number: "₹10L+",
      label: "छात्रवृत्ति",
      desc: "वितरित सहायता"
    },
    {
      number: "50+",
      label: "स्कूल",
      desc: "जुड़े हुए"
    }
  ];

  const features = [
    "अनुभवी शिक्षकों का पैनल",
    "कम खर्च में गुणवत्तापूर्ण शिक्षा",
    "व्यक्तिगत ध्यान और मार्गदर्शन",
    "नियमित टेस्ट और मूल्यांकन",
    "करियर काउंसलिंग",
    "डिजिटल लर्निंग संसाधन"
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
                <BookOpen size={20} color="#10b981" />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  शिक्षा अभियान
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
                शिक्षा है 
                <span style={{ color: '#10b981', display: 'block' }}>
                  बदलाव की कुंजी
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
                हर बच्चे को गुणवत्तापूर्ण शिक्षा मिले - यही हमारा संकल्प। 
                निःशुल्क कोचिंग, छात्रवृत्ति और डिजिटल शिक्षा के माध्यम से 
                हम हर घर तक शिक्षा पहुंचा रहे हैं।
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
          background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
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
                        color: '#10b981',
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
              हमारे <span style={{ color: '#10b981' }}>शिक्षा</span> कार्यक्रम
            </Typography>
            <Typography 
              sx={{ 
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              शिक्षा के क्षेत्र में हमारे विभिन्न कार्यक्रम
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
                      borderColor: '#10b981'
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

      {/* Features Section */}
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
                हमारी <span style={{ color: '#10b981' }}>विशेषताएँ</span>
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
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
                        bgcolor: '#f0fdf4',
                        borderColor: '#10b981'
                      }
                    }}
                  >
                    <CheckCircle2 size={20} color="#10b981" />
                    <Typography sx={{ fontWeight: 600, color: '#0f172a' }}>
                      {feature}
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
        background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
        py: { xs: 8, md: 10 }
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Lightbulb size={40} color="#fcd34d" style={{ margin: '0 auto 16px' }} />
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                शिक्षा के इस <span style={{ color: '#fcd34d' }}>अभियान</span> में जुड़ें
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
                हर बच्चे की शिक्षा हमारी जिम्मेदारी। आइए, मिलकर हर घर 
                तक शिक्षा की रोशनी पहुंचाएं।
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
              <Sparkles size={16} color="#10b981" />
              <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                🌳 एक पेड़ माँ के नाम
              </Typography>
              <Sparkles size={16} color="#10b981" />
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#e2e8f0' }} />
              <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
                "शिक्षा ही सबसे बड़ा अधिकार है"
              </Typography>
            </Stack>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', mt: 1 }}>
              हर बच्चे तक शिक्षा पहुंचाने का संकल्प
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default EducationPage;