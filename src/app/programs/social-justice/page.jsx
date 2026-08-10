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
  Shield,
  Scale,
  Users,
  Heart,
  Sparkles,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calendar,
  BookOpen,
  Gavel,
  Handshake,
  Globe,
  Flag,
  Target,
  Zap,
  Lightbulb,
  UserCheck,
  TrendingUp,
  Crown,
  Star,
  Compass,
  FileText,
  BadgeHelp,
  Equal,
  Scales
} from 'lucide-react';

const SocialJusticePage = () => {
  const programs = [
    {
      icon: <BookOpen size={28} />,
      title: "संविधान जागरूकता",
      description: "संविधान के मूल्यों - समानता, स्वतंत्रता, बंधुत्व व न्याय का प्रचार-प्रसार। लोगों को उनके अधिकारों के बारे में जागरूक करना।",
      color: "#8b5cf6"
    },
    {
      icon: <Gavel size={28} />,
      title: "कानूनी सहायता",
      description: "जरूरतमंदों को कानूनी सलाह, मुफ्त कानूनी सहायता, अधिवक्ताओं से संपर्क और कानूनी प्रक्रियाओं में मार्गदर्शन।",
      color: "#ef4444"
    },
    {
      icon: <Heart size={28} />,
      title: "मानवाधिकार जागरूकता",
      description: "मानवाधिकारों के बारे में जागरूकता, मानवाधिकार उल्लंघन के मामलों में सहायता और मानवाधिकार संरक्षण।",
      color: "#10b981"
    },
    {
      icon: <Equal size={28} />,
      title: "सामाजिक समानता",
      description: "समाज में जाति, धर्म, लिंग और वर्ग के आधार पर भेदभाव को समाप्त करना। सभी को समान अवसर और अधिकार दिलाना।",
      color: "#f59e0b"
    },
    {
      icon: <Users size={28} />,
      title: "दलित/पिछड़ा वर्ग उत्थान",
      description: "दलितों, अनुसूचित जातियों, अनुसूचित जनजातियों और पिछड़े वर्गों के उत्थान के लिए विशेष कार्यक्रम।",
      color: "#06b6d4"
    },
    {
      icon: <Flag size={28} />,
      title: "संविधान दिवस",
      description: "26 नवंबर को संविधान दिवस के रूप में मनाना। संविधान के महत्व और मूल्यों के बारे में जागरूकता अभियान चलाना।",
      color: "#ec4899"
    }
  ];

  const impactStats = [
    {
      number: "15,000+",
      label: "लोग",
      desc: "जागरूक किए"
    },
    {
      number: "500+",
      label: "कानूनी सहायता",
      desc: "मामले"
    },
    {
      number: "200+",
      label: "कार्यक्रम",
      desc: "आयोजित"
    },
    {
      number: "100+",
      label: "गाँव",
      desc: "जागरूकता पहुंच"
    }
  ];

  const constitutionalValues = [
    "समानता (Equality)",
    "स्वतंत्रता (Freedom)",
    "बंधुत्व (Fraternity)",
    "न्याय (Justice)"
  ];

  const services = [
    "संविधान जागरूकता शिविर",
    "मुफ्त कानूनी परामर्श",
    "मानवाधिकार जागरूकता",
    "भेदभाव विरोधी अभियान",
    "दलित/पिछड़ा वर्ग सहायता",
    "संविधान दिवस समारोह",
    "कानूनी साक्षरता अभियान",
    "अधिकार जागरूकता"
  ];

  const justiceQuotes = [
    "न्याय ही समाज का आधार है",
    "संविधान हम सब की रक्षा करता है",
    "समानता ही सामाजिक न्याय की कुंजी है",
    "हर व्यक्ति को न्याय मिलना चाहिए"
  ];

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pt: 8 }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 30%, #6d28d9 60%, #7c3aed 100%)',
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
                <Shield size={20} color="#c4b5fd" />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  सामाजिक न्याय अभियान
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
                <span style={{ color: '#c4b5fd' }}>सामाजिक न्याय</span>
                <span style={{ display: 'block' }}>
                  हर व्यक्ति का अधिकार
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
                संविधान जागरूकता, कानूनी सहायता, मानवाधिकार संरक्षण और सामाजिक 
                समानता के लिए हम निरंतर कार्य कर रहे हैं। हर व्यक्ति को न्याय 
                और सम्मान मिले - यही हमारा लक्ष्य है।
              </Typography>

              {/* Constitutional Values */}
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                mt: 4
              }}>
                {constitutionalValues.map((value, index) => (
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
                        {value}
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
          background: 'radial-gradient(circle, rgba(196,181,253,0.05) 0%, transparent 70%)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,181,253,0.03) 0%, transparent 70%)',
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
                        color: '#7c3aed',
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
              <span style={{ color: '#7c3aed' }}>सामाजिक न्याय</span> कार्यक्रम
            </Typography>
            <Typography 
              sx={{ 
                color: '#64748b',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              सामाजिक न्याय और समानता के लिए हमारे विभिन्न कार्यक्रम
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
                      borderColor: '#7c3aed'
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
                हमारी <span style={{ color: '#7c3aed' }}>सेवाएँ</span>
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
                      bgcolor: '#f5f3ff',
                      border: '1px solid #c4b5fd',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 30px rgba(124,58,237,0.1)',
                        bgcolor: '#ede9fe'
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
                      bgcolor: '#ddd6fe',
                      color: '#7c3aed'
                    }}>
                      <CheckCircle2 size={24} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '0.85rem' }}>
                      {service}
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
        background: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 30%, #6d28d9 60%, #7c3aed 100%)',
        py: { xs: 8, md: 10 }
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Scale size={40} color="#c4b5fd" style={{ margin: '0 auto 16px' }} />
              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                <span style={{ color: '#c4b5fd' }}>सामाजिक न्याय</span> अभियान में जुड़ें
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
                हर व्यक्ति को न्याय और सम्मान मिले - इस अभियान में आप भी शामिल हों। 
                आपका सहयोग समाज में बड़ा बदलाव ला सकता है।
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
                      bgcolor: '#c4b5fd',
                      color: '#4c1d95',
                      borderRadius: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 10px 30px rgba(124,58,237,0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#a78bfa',
                        boxShadow: '0 15px 40px rgba(124,58,237,0.4)',
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
              <Sparkles size={16} color="#7c3aed" />
              <Typography sx={{ color: '#0f172a', fontWeight: 600 }}>
                🌳 एक पेड़ माँ के नाम
              </Typography>
              <Sparkles size={16} color="#7c3aed" />
              <Divider orientation="vertical" flexItem sx={{ borderColor: '#e2e8f0' }} />
              <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
                "समानता, स्वतंत्रता, बंधुत्व, न्याय"
              </Typography>
            </Stack>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', mt: 1 }}>
              हर व्यक्ति को न्याय और सम्मान दिलाने का संकल्प
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default SocialJusticePage;