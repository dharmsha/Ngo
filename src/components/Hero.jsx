"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Button, Paper, Typography, Avatar, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowRight, Trophy, Users, Star, CheckCircle2, Sparkles, Award, TrendingUp } from 'lucide-react';

// Define styled components outside the main component
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '16px',
  padding: '12px 32px',
  fontSize: '1.125rem',
  fontWeight: 700,
  textTransform: 'none',
  boxShadow: '0 20px 25px -5px rgba(249, 115, 22, 0.25)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 25px 30px -5px rgba(249, 115, 22, 0.35)',
  }
}));

const GlassChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#f97316',
  fontWeight: 700,
  fontSize: '0.875rem',
  padding: '16px 8px',
  height: 'auto',
  '& .MuiChip-icon': { 
    color: '#f97316',
    marginRight: '4px'
  }
}));

const GlassAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: '2px solid rgba(255,255,255,0.1)',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  backdropFilter: 'blur(12px)',
  color: 'white',
  fontSize: '0.75rem',
  fontWeight: 700
}));

const IconAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
  boxShadow: '0 20px 25px -5px rgba(99,102,241,0.25)'
}));

const WinnerAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  background: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)'
}));

// Helper component for Avatar Group - FIXED with :first-of-type
const AvatarGroup = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', '& > :not(:first-of-type)': { ml: -1.5 } }}>
      {children}
    </Box>
  );
};

const Hero = () => {
  // Fixed positions for particles - use useMemo to prevent recreation
  const particlePositions = React.useMemo(() => [
    { top: '10%', left: '5%' },
    { top: '20%', left: '85%' },
    { top: '30%', left: '15%' },
    { top: '40%', left: '75%' },
    { top: '50%', left: '25%' },
    { top: '60%', left: '65%' },
    { top: '70%', left: '35%' },
    { top: '80%', left: '55%' },
    { top: '15%', left: '45%' },
    { top: '25%', left: '95%' },
    { top: '35%', left: '8%' },
    { top: '45%', left: '88%' },
    { top: '55%', left: '18%' },
    { top: '65%', left: '78%' },
    { top: '75%', left: '28%' },
    { top: '85%', left: '68%' },
    { top: '12%', left: '38%' },
    { top: '22%', left: '98%' },
    { top: '32%', left: '12%' },
    { top: '42%', left: '82%' }
  ], []);

  // Use useState with initial values to prevent hydration mismatch
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side to prevent hydration mismatch
  }

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 10,
        overflow: 'hidden',
        bgcolor: '#0A0A0F'
      }}
    >
      {/* Premium Background with Depth */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: 80,
            right: 80,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(249, 115, 22, 0.2)',
            filter: 'blur(120px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: 80,
            left: 80,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.2)',
            filter: 'blur(120px)'
          }}
        />

        {/* Grid Pattern - Use static background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.2,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Animated Particles with Fixed Positions - Only render when mounted */}
        {mounted && particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              position: 'absolute',
              width: 4,
              height: 4,
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              top: pos.top,
              left: pos.left
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { lg: '1fr 1fr' },
          gap: 8,
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Stack spacing={4}>
              {/* Animated Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <GlassChip
                  icon={<Sparkles size={16} />}
                  label="Ghazipur's No.1 Talent Search Platform"
                />
              </motion.div>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: 1.1
                }}
              >
                Har Bacche Mein{' '}
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(249,115,22,0.3)",
                      "0 0 40px rgba(249,115,22,0.5)",
                      "0 0 20px rgba(249,115,22,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ color: '#f97316', display: 'inline-block' }}
                >
                  Hai Ek
                </motion.span>{' '}
                <br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #f97316 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Pratibha.
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                  maxWidth: 600
                }}
              >
                Ghazipur Pratibha Khoj ka maksad hai gaanv-gaanv se pratibhaon ko
                chun-kar unhe sahi disha aur scholarship pradan karna.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                <StyledButton
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)'
                    }
                  }}
                >
                  Register for Exam 2026
                  <ArrowRight style={{ marginLeft: 8 }} />
                </StyledButton>

                <StyledButton
                  variant="outlined"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    boxShadow: 'none',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: 'none'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Trophy size={20} />
                    </Box>
                    <span>Winner List</span>
                  </Box>
                </StyledButton>
              </Stack>

              {/* Trust Badges - Using fixed AvatarGroup */}
              <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 2 }}>
                <AvatarGroup>
                  {[1, 2, 3, 4].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <GlassAvatar>
                        {index === 3 ? '10k+' : ''}
                      </GlassAvatar>
                    </motion.div>
                  ))}
                </AvatarGroup>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                  <Box component="span" sx={{ color: 'white', fontWeight: 700 }}>10,000+ Students</Box> have participated till now.
                </Typography>
              </Stack>
            </Stack>
          </motion.div>

          {/* Right Visual Section - Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative' }}
          >
            {/* Main Glass Card */}
            <motion.div
              whileHover={{ y: -5 }}
            >
              <Paper
                sx={{
                  position: 'relative',
                  zIndex: 10,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '2.5rem',
                  p: 4,
                  boxShadow: 24,
                  overflow: 'hidden'
                }}
              >
                {/* Animated Background Effect */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: 256,
                    height: 256,
                    background: 'linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(99,102,241,0.2) 100%)',
                    borderRadius: '50%',
                    filter: 'blur(64px)'
                  }}
                />

                <Stack spacing={3} sx={{ position: 'relative', zIndex: 20 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconAvatar>
                        <Users size={24} />
                      </IconAvatar>
                    </motion.div>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Award size={14} style={{ color: 'rgba(255,255,255,0.4)' }} />
                      <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1 }}>
                        SCHOLARSHIP CARD
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h3" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700 }}>
                      Total Scholarship Disbursed
                    </Typography>
                    <motion.p
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        background: 'linear-gradient(135deg, #818cf8 0%, #f97316 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginTop: 8
                      }}
                    >
                      ₹5,00,000+
                    </motion.p>
                  </Box>

                  <Stack spacing={2}>
                    {['Free Coaching Access', 'Govt. Exam Preparation', 'Monthly Mentorship'].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                      >
                        <Stack direction="row" spacing={1} alignItems="center">
                          <CheckCircle2 size={18} style={{ color: '#4ade80' }} />
                          <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                            {item}
                          </Typography>
                        </Stack>
                      </motion.div>
                    ))}
                  </Stack>

                  <Box sx={{ pt: 2 }}>
                    <Box sx={{
                      width: '100%',
                      height: 12,
                      bgcolor: 'rgba(255,255,255,0.05)',
                      borderRadius: 6,
                      overflow: 'hidden',
                      backdropFilter: 'blur(4px)'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(90deg, #f97316 0%, #6366f1 100%)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
                          }}
                        />
                      </motion.div>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                        75% Seats Filled for Ghazipur District
                      </Typography>
                      <TrendingUp size={14} style={{ color: '#4ade80' }} />
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </motion.div>

            {/* Floating Winner Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ repeat: Infinity, duration: 5 }}
              style={{
                position: 'absolute',
                bottom: -24,
                left: -24,
                zIndex: 20,
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: 16,
                borderRadius: 16,
                boxShadow: 24,
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                <WinnerAvatar>
                  <Trophy size={20} />
                </WinnerAvatar>
              </motion.div>
              <Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.625rem', fontWeight: 700, letterSpacing: 0.5 }}>
                  LATEST WINNER
                </Typography>
                <Typography sx={{ color: 'white', fontSize: '0.875rem', fontWeight: 700 }}>
                  Amit Kumar
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>
                  UP Board Topper
                </Typography>
              </Box>
            </motion.div>

            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: -8,
                right: -8,
                width: 80,
                height: 80,
                border: '1px solid rgba(249,115,22,0.3)',
                borderRadius: '50%'
              }}
            />
          </motion.div>
        </Box>
      </Container>

      {/* Bottom Gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 128,
          background: 'linear-gradient(180deg, transparent 0%, #0A0A0F 100%)'
        }}
      />
    </Box>
  );
};

export default Hero;