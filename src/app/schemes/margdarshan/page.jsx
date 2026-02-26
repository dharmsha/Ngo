"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Container, Typography, Stack, Button, Paper, 
  Modal, TextField, IconButton, Fade, Backdrop, Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Compass, Lightbulb, GraduationCap, ArrowLeft, Send, 
  User, Phone, MapPin, X, Target, Briefcase, BookOpen, Sparkles
} from 'lucide-react';
import Link from 'next/link';

// --- Futuristic Styled Components ---
const GlassCard = styled(Box)({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(15px)',
  borderRadius: '32px',
  padding: '30px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  height: '100%',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.07)',
    transform: 'translateY(-10px)',
    border: '1px solid #3b82f6',
    boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
  }
});

const NeonButton = styled(Button)({
  background: 'linear-gradient(45deg, #2563eb 30%, #3b82f6 90%)',
  color: 'white',
  padding: '12px 35px',
  borderRadius: '50px',
  fontWeight: 900,
  fontSize: '1rem',
  boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)',
  '&:hover': {
    boxShadow: '0 0 25px #3b82f6',
    transform: 'scale(1.05)',
  }
});

const DarkInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.05)',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: '#3b82f6' },
    '&.Mui-focused fieldset': { borderColor: '#3b82f6' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
});

const MargdarshanPage = () => {
  // 1. Sirf ek state - open ke liye
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    currentClass: '', 
    address: '' 
  });

  // 2. Features data (static, bahar bhi rakh sakte ho)
  const features = [
    { title: "Career Path", desc: "Expert guidance after 10th & 12th to choose the right stream.", icon: <Compass color="#60a5fa" size={30} /> },
    { title: "Skill Up", desc: "Workshops on modern skills like Coding, AI & Communication.", icon: <Target color="#60a5fa" size={30} /> },
    { title: "Exam Strategy", desc: "Winning tips for competitive exams like JEE, NEET, & Entrance tests.", icon: <BookOpen color="#60a5fa" size={30} /> },
    { title: "Mentorship", desc: "Connect with successful Gazipur professionals directly.", icon: <User color="#60a5fa" size={30} /> },
  ];

  // 3. WhatsApp Submit Handler
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*Margdarshan Yojana Inquiry*%0A%0A👤 *Student:* ${formData.name}%0A📞 *WhatsApp:* ${formData.phone}%0A🎓 *Class:* ${formData.currentClass}%0A📍 *Address:* ${formData.address}`;
    window.open(`https://wa.me/919415289162?text=${text}`, '_blank');
    setOpen(false);
  };

  return (
    <Box sx={{ 
      background: '#0a0a0c',
      minHeight: '100vh',
      color: '#fff',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* --- Floating Glow Background Elements --- */}
      <Box sx={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }} />

      {/* --- Back Button --- */}
      <Box sx={{ position: 'fixed', top: 24, left: 24, zIndex: 100 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', '&:hover': { bgcolor: '#3b82f6' } }}>
            <ArrowLeft />
          </IconButton>
        </Link>
      </Box>

      {/* --- Hero Section --- */}
      <Container maxWidth="lg" sx={{ pt: { xs: 15, md: 20 }, pb: 10, position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="center">
          <Box sx={{ flex: 1.2 }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                <Sparkles size={20} color="#3b82f6" />
                <Typography variant="subtitle1" sx={{ color: '#3b82f6', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 3 }}>
                  Your Future Starts Here
                </Typography>
              </Stack>
              <Typography variant="h1" sx={{ 
                fontWeight: 900, 
                fontSize: { xs: '3rem', md: '5rem' }, 
                lineHeight: 1, 
                mb: 3, 
                background: 'linear-gradient(to right, #fff, #3b82f6)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                Margdarshan <br /> Mission
              </Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300, mb: 5, maxWidth: '550px', lineHeight: 1.8 }}>
                Ghazipur ke naye yug ke sapno ko mil rahi hai ek sahi disha. Hum aapko dete hain professional guidance, tools aur networking taaki aap ban sakein kal ke leader.
              </Typography>
              <NeonButton onClick={() => setOpen(true)}>
                Start Your Journey
              </NeonButton>
            </motion.div>
          </Box>

          <Box sx={{ flex: 0.8, display: { xs: 'none', md: 'block' } }}>
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ position: 'relative' }}
            >
              <Box sx={{ 
                position: 'relative', width: '350px', height: '350px', 
                background: 'linear-gradient(135deg, #1e293b 0%, #0a0a0c 100%)', 
                borderRadius: '50%', border: '2px solid rgba(59, 130, 246, 0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 50px rgba(59, 130, 246, 0.2)'
              }}>
                <GraduationCap size={150} color="#3b82f6" strokeWidth={1} />
                <Box sx={{ position: 'absolute', top: 20, right: 20, bgcolor: '#3b82f6', p: 2, borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
                   <Briefcase color="white" />
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Stack>
      </Container>

      {/* --- Features Section (with motion props) --- */}
      <Container maxWidth="lg" sx={{ pb: 15, position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 8, textAlign: 'center' }}>How we help you?</Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, 
          gap: 4 
        }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <Box sx={{ bgcolor: 'rgba(59, 130, 246, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  {f.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, color: '#fff' }}>{f.title}</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</Typography>
              </GlassCard>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* --- Quote Banner --- */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Paper elevation={0} sx={{ 
          p: 8, background: 'linear-gradient(to right, #0f172a, #1e293b)', 
          borderRadius: '40px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' 
        }}>
          <Typography variant="h3" sx={{ fontStyle: 'italic', fontWeight: 200, color: 'rgba(255,255,255,0.8)', mb: 3 }}>
            The best way to predict the future is to <span style={{color: '#3b82f6', fontWeight: 800}}>create it</span>.
          </Typography>
          <Typography sx={{ color: '#3b82f6', fontWeight: 700, letterSpacing: 2 }}>TEAM JAN KALYAN MISSION</Typography>
        </Paper>
      </Container>

      {/* --- REGISTRATION MODAL (Dark Theme) --- */}
      <Modal 
        open={open} 
        onClose={() => setOpen(false)} 
        closeAfterTransition 
        BackdropComponent={Backdrop} 
        BackdropProps={{ timeout: 500, sx: { backdropFilter: 'blur(15px)' } }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 480 }, bgcolor: '#111827', borderRadius: '40px', p: 5, outline: 'none',
            border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
          }}>
            <Stack direction="row" justifyContent="space-between" mb={4}>
              <Typography variant="h5" sx={{ fontWeight: 900, color: '#fff' }}>Apply for Counseling</Typography>
              <IconButton onClick={() => setOpen(false)} sx={{ color: 'rgba(255,255,255,0.5)' }}><X /></IconButton>
            </Stack>
            <form onSubmit={handleWhatsApp}>
              <Stack spacing={3}>
                <DarkInput 
                  fullWidth 
                  label="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                />
                <DarkInput 
                  fullWidth 
                  label="WhatsApp Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                />
                <DarkInput 
                  fullWidth 
                  label="Current Class / Degree" 
                  required 
                  value={formData.currentClass}
                  onChange={(e) => setFormData({...formData, currentClass: e.target.value})} 
                />
                <DarkInput 
                  fullWidth 
                  label="Address" 
                  multiline rows={2} 
                  required 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})} 
                />
                <NeonButton type="submit" fullWidth endIcon={<Send size={18} />}>
                  Get Guidance Now
                </NeonButton>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default MargdarshanPage;