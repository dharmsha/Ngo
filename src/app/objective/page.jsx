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
  Users,
  BookOpen,
  HeartHandshake,
  Shield,
  Sparkles,
  GraduationCap,
  Briefcase,
  Heart,
  Award,
  Globe,
  Handshake,
} from 'lucide-react';

const ObjectivePage = () => {
  const objectives = [
    {
      icon: <GraduationCap size={32} />,
      title: "शिक्षा का अधिकार",
      description: "शोषित, गरीब और सामाजिक रूप से पिछड़े वर्गों को गुणवत्तापूर्ण शिक्षा उपलब्ध कराना। निःशुल्क कोचिंग, छात्रवृत्ति और डिजिटल शिक्षा के माध्यम से साक्षरता बढ़ाना।",
      color: "#10b981"
    },
    {
      icon: <Briefcase size={32} />,
      title: "रोजगार के अवसर",
      description: "कौशल विकास, व्यावसायिक प्रशिक्षण और रोजगार मार्गदर्शन के माध्यम से युवाओं को आत्मनिर्भर बनाना। कंप्यूटर, सिलाई, कढ़ाई जैसे व्यावसायिक प्रशिक्षण देना।",
      color: "#f59e0b"
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "सामाजिक न्याय",
      description: "समाज में समानता, स्वतंत्रता और बंधुत्व के मूल्यों का प्रचार-प्रसार। संविधान जागरूकता, कानूनी सहायता और मानवाधिकारों की रक्षा करना।",
      color: "#ef4444"
    },
    {
      icon: <Users size={32} />,
      title: "महिला सशक्तिकरण",
      description: "महिलाओं को स्वरोजगार प्रशिक्षण, स्वयं सहायता समूहों के माध्यम से आर्थिक रूप से सशक्त बनाना। समाज में उनकी भागीदारी और सम्मान बढ़ाना।",
      color: "#ec4899"
    },
    {
      icon: <Heart size={32} />,
      title: "स्वास्थ्य सेवा",
      description: "निःशुल्क स्वास्थ्य शिविर, रक्तदान शिविर और स्वास्थ्य जागरूकता अभियान चलाना। ग्रामीण क्षेत्रों में स्वास्थ्य सुविधाओं को पहुंचाना।",
      color: "#8b5cf6"
    },
    {
      icon: <Shield size={32} />,
      title: "युवा विकास",
      description: "खेल-प्रतियोगिता, करियर काउंसलिंग और नेतृत्व विकास कार्यक्रमों के माध्यम से युवाओं को आगे बढ़ाना। उनके सपनों को साकार करने में मदद करना।",
      color: "#06b6d4"
    }
  ];

  const coreValues = [
    { value: "समानता", icon: <Globe size={20} /> },
    { value: "स्वतंत्रता", icon: <Award size={20} /> },
    { value: "बंधुत्व", icon: <Handshake size={20} /> },
    { value: "न्याय", icon: <Shield size={20} /> },
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
                <Target size={20} color="#f97316" />
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                  हमारा उद्देश्य
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
                समाज सेवा का
                <span style={{ color: '#f97316' }}> संकल्प</span>
              </Typography>

              <Typography 
                sx={{ 
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '1.15rem',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.8
                }}
              >
                हमारा उद्देश्य शोषित, गरीब और सामाजिक रूप से पिछड़े वर्गों को शिक्षा, 
                सम्मान और अवसर उपलब्ध कराना है।
              </Typography>

              {/* Core Values */}
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                mt: 4
              }}>
                {coreValues.map((item, index) => (
                  <motion.div
                    key={item.value}
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
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.15)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <Box sx={{ color: '#f97316' }}>{item.icon}</Box>
                      <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                        {item.value}
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
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
        }} />
      </Box>

      {/* Objectives Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 900, 
              textAlign: 'center',
              mb: 2,
              color: '#0f172a'
            }}
          >
            हमारे <span style={{ color: '#f97316' }}>प्रमुख</span> उद्देश्य
          </Typography>
          <Typography 
            sx={{ 
              textAlign: 'center',
              color: '#64748b',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            हमारे 6 प्रमुख उद्देश्य जो हमारे संगठन की दिशा और मार्गदर्शन करते हैं
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {objectives.map((item, index) => (
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
                      borderColor: '#f97316'
                    }
                  }}
                >
                  {/* Color bar */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    bgcolor: item.color,
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
                      bgcolor: `${item.color}15`,
                      color: item.color,
                    }}>
                      {item.icon}
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
                        {item.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#64748b',
                          lineHeight: 1.8,
                          fontSize: '0.95rem'
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box sx={{ 
            mt: 10,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '32px',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative circles */}
            <Box sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
            }} />
            <Box sx={{
              position: 'absolute',
              bottom: -50,
              left: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
            }} />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <HeartHandshake size={40} color="#f97316" style={{ margin: '0 auto 16px' }} />
              <Typography 
                variant="h4" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 900,
                  mb: 2
                }}
              >
                हमारे साथ जुड़ें
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
                शिक्षा, सम्मान और अवसर के इस अभियान में आप भी हमारे साथ जुड़ें 
                और एक बेहतर समाज के निर्माण में योगदान दें।
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
                      bgcolor: '#f97316',
                      color: '#fff',
                      borderRadius: '16px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 10px 30px rgba(249,115,22,0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#ea580c',
                        boxShadow: '0 15px 40px rgba(249,115,22,0.4)',
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
          </Box>
        </motion.div>

        {/* Footer Motto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          sx={{ mt: 8, textAlign: 'center' }}
        >
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Sparkles size={16} color="#f97316" />
            <Typography sx={{ color: '#64748b', fontWeight: 500 }}>
              🌳 एक पेड़ माँ के नाम
            </Typography>
            <Sparkles size={16} color="#f97316" />
          </Stack>
          <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', mt: 1 }}>
            "शिक्षा, सम्मान, अवसर" - हर कदम पर
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ObjectivePage;