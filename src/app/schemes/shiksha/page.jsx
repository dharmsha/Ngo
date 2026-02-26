"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Container, Typography, Stack, Button, Modal, 
  TextField, IconButton, Fade, Backdrop, Chip 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  BookOpen, GraduationCap, School, Receipt, ArrowLeft, Send, 
  User, Phone, MapPin, X, Award, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

// --- Styled Components (Defining outside to prevent re-renders) ---
const FeatureCard = styled(Box)({
  background: '#ffffff',
  borderRadius: '24px',
  padding: '32px',
  border: '1px solid #e2e8f0',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  transition: '0.3s ease',
  '&:hover': {
    borderColor: '#10b981',
    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.1)',
    transform: 'translateY(-5px)'
  }
});

const StyledInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#f8fafc',
    '& fieldset': { borderColor: '#e2e8f0' },
    '&:hover fieldset': { borderColor: '#10b981' },
    '&.Mui-focused fieldset': { borderColor: '#10b981' },
  },
});

const ShikshaPage = () => {
  // 1. All States at the top
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', school: '', address: '' });

  // 2. Benefits Data (static)
  const benefits = [
    { title: "Fees Maafi", desc: "Zarooratmand bacchon ke liye school aur college fees mein 50% tak ki relief.", icon: <Receipt color="#10b981" /> },
    { title: "Free Books", desc: "Har saal naye session mein zaroori kitabein aur stationary ka muft vitaran.", icon: <BookOpen color="#10b981" /> },
    { title: "Scholarship", desc: "Uchhashiksha ke liye dakhila lene mein financial support.", icon: <Award color="#10b981" /> },
    { title: "Smart Coaching", desc: "Competitive exams ke liye vishesh coaching suvidha.", icon: <School color="#10b981" /> },
  ];

  // 3. Submit Handler
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*Shiksha & Fees Maafi Registration*%0A%0A👤 *Student:* ${formData.name}%0A📞 *WhatsApp:* ${formData.phone}%0A🏫 *School:* ${formData.school}%0A📍 *Address:* ${formData.address}`;
    window.open(`https://wa.me/919415289162?text=${text}`, '_blank');
    setOpen(false);
  };

  return (
    <Box sx={{ bgcolor: '#fcfdfd', minHeight: '100vh', pb: 10 }}>
      {/* --- Navigation --- */}
      <Box sx={{ py: 3, px: {xs: 2, md: 4}, borderBottom: '1px solid #f1f5f9', bgcolor: '#fff' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button startIcon={<ArrowLeft size={18} />} sx={{ color: '#064e3b', fontWeight: 800 }}>
            Jan Kalyan Portal
          </Button>
        </Link>
      </Box>

      <Container maxWidth="lg">
        {/* --- Hero Section --- */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ flex: 1 }}>
            <div>
              <Chip icon={<Sparkles size={14} color="#10b981" />} label="Education First Mission" sx={{ mb: 2, bgcolor: '#ecfdf5', color: '#10b981', fontWeight: 700, px: 1.5, py: 0.5 }} />
              <Typography variant="h1" sx={{ fontWeight: 950, color: '#0f172a', fontSize: { xs: '2.8rem', md: '4.2rem' }, lineHeight: 1.1, mb: 3 }}>
                Padhega Ghazipur <br />
                <span style={{ color: '#10b981' }}>Badhega Ghazipur</span>
              </Typography>
              <Typography sx={{ color: '#64748b', fontSize: '1.1rem', mb: 5, lineHeight: 1.8, maxWidth: '540px' }}>
                Humara sankalp hai ki arthik tangi kisi bhi bacche ke sapno ke beech na aaye.
              </Typography>
              <Button 
                onClick={() => setOpen(true)}
                variant="contained" 
                sx={{ bgcolor: '#10b981', px: 5, py: 2.2, borderRadius: '18px', fontWeight: 800, fontSize: '1.1rem', boxShadow: '0 15px 30px rgba(16, 185, 129, 0.2)', '&:hover': { bgcolor: '#059669' } }}
              >
                Apply for Support
              </Button>
            </div>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ position: 'relative' }}>
              <Box component="img" src="/imga.jpg" sx={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '8px solid #fff' }} />
              <Box sx={{ position: 'absolute', top: -20, right: -20, bgcolor: '#10b981', p: 2, borderRadius: '50%', color: '#fff' }}>
                <GraduationCap size={40} />
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* --- Benefits Grid --- */}
        <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, 
            gap: 3,
            mt: 5
          }}>
            {benefits.map((item, i) => (
              <FeatureCard key={i}>
                <Box sx={{ bgcolor: '#f0fdf4', width: '60px', height: '60px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a' }}>{item.title}</Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</Typography>
              </FeatureCard>
            ))}
        </Box>
      </Container>

      {/* --- FORM MODAL --- */}
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, sx: { backdropFilter: 'blur(12px)' } }}>
        <Fade in={open}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '92%', sm: 480 }, bgcolor: '#ffffff', borderRadius: '32px', p: 4, outline: 'none'
          }}>
            <Stack direction="row" justifyContent="space-between" mb={4}>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>Student Registration</Typography>
              <IconButton onClick={() => setOpen(false)}><X size={20} /></IconButton>
            </Stack>

            <form onSubmit={handleWhatsApp}>
              <Stack spacing={2.5}>
                <StyledInput 
                  fullWidth 
                  label="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                />
                <StyledInput 
                  fullWidth 
                  label="WhatsApp Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                />
                <StyledInput 
                  fullWidth 
                  label="School/College" 
                  required 
                  value={formData.school}
                  onChange={(e) => setFormData({...formData, school: e.target.value})} 
                />
                <StyledInput 
                  fullWidth 
                  label="Village/Address" 
                  multiline rows={2} 
                  required 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})} 
                />
                
                <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: '#10b981', py: 2, borderRadius: '16px', fontWeight: 800 }}>
                  Submit to WhatsApp
                </Button>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ShikshaPage;