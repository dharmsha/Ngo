"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Container, Typography, Stack, Button, Paper, 
  Modal, TextField, IconButton, Fade, Backdrop, Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  BookOpen, GraduationCap, School, Receipt, ArrowLeft, Send, 
  User, Phone, MapPin, X, Award
} from 'lucide-react';
import Link from 'next/link';

// --- Styled Components ---
const InfoCard = styled(motion.div)({
  background: '#ffffff',
  borderRadius: '24px',
  padding: '30px',
  border: '1px solid #e2e8f0',
  flex: '1 1 300px',
  transition: '0.3s',
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
  '& .MuiInputLabel-root': { color: '#64748b' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#10b981' },
});

const ShikshaPage = () => {
  // --- Sirf 2 states, mounted state HATAYA, useEffect HATAYA ---
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    school: '', 
    address: '' 
  });

  const benefits = [
    { title: "Fees Maafi", desc: "Economically weak bacchon ke liye school aur college fees mein 50% tak ki chhoot.", icon: <Receipt color="#10b981" /> },
    { title: "Free Books", desc: "Sarkari aur private school ke bacchon ko zaroori kitabein aur stationary ka vitaran.", icon: <BookOpen color="#10b981" /> },
    { title: "Scholarship", desc: "Uchhashiksha (Higher studies) ke liye dakhila lene mein financial help.", icon: <Award color="#10b981" /> },
    { title: "Smart Classes", desc: "Digital learning aur computer education ke liye vishesh coaching.", icon: <School color="#10b981" /> },
  ];

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*Shiksha & Fees Maafi Application*%0A%0A👤 *Student:* ${formData.name}%0A📞 *WhatsApp:* ${formData.phone}%0A🏫 *School:* ${formData.school}%0A📍 *Address:* ${formData.address}`;
    window.open(`https://wa.me/919415289162?text=${text}`, '_blank');
    setOpen(false);
    // Form reset after submit
    setFormData({ name: '', phone: '', school: '', address: '' });
  };

  // --- Direct return, no mounted check needed ---
  return (
    <Box sx={{ bgcolor: '#fcfdfd', minHeight: '100vh', pb: 10 }}>
      
      {/* --- Navigation --- */}
      <Box sx={{ py: 3, px: {xs: 2, md: 4} }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button startIcon={<ArrowLeft size={18} />} sx={{ color: '#064e3b', fontWeight: 800 }}>
            Back to Home
          </Button>
        </Link>
      </Box>

      <Container maxWidth="lg">
        {/* --- Hero Section (Flexbox) --- */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={6} 
          alignItems="center" 
          sx={{ mt: 5, mb: 10 }}
        >
          <Box sx={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Chip icon={<GraduationCap size={14} />} label="Education For All" sx={{ mb: 2, bgcolor: '#ecfdf5', color: '#10b981', fontWeight: 700 }} />
              <Typography variant="h2" sx={{ fontWeight: 950, color: '#0f172a', mb: 3, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1 }}>
                Shiksha Sahayata <br />
                <span style={{ color: '#10b981' }}>Fees Maafi 2026</span>
              </Typography>
              <Typography sx={{ color: '#64748b', fontSize: '1.1rem', mb: 4, lineHeight: 1.7 }}>
                Ghazipur ka koi bhi baccha paison ki kami ki wajah se padhai na chhode. Hum lekar aaye hain vishesh fees maafi aur sahayata yojana.
              </Typography>
              <Button 
                onClick={() => setOpen(true)}
                variant="contained" 
                sx={{ bgcolor: '#10b981', px: 5, py: 2, borderRadius: '16px', fontWeight: 800, '&:hover': { bgcolor: '#059669' } }}
              >
                Apply for Scholarship
              </Button>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1, position: 'relative' }}>
            <Box 
              component="img" 
              src="/imga.jpg" 
              sx={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} 
            />
          </Box>
        </Stack>

        {/* --- Benefits Section (CSS Grid) --- */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900, textAlign: 'center', mb: 6 }}>Yojana ke Labh</Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, 
            gap: 3 
          }}>
            {benefits.map((item, i) => (
              <InfoCard key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <Box sx={{ mb: 3, bgcolor: '#f0fdf4', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>{item.title}</Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.9rem' }}>{item.desc}</Typography>
              </InfoCard>
            ))}
          </Box>
        </Box>
      </Container>

      {/* --- FORM MODAL --- */}
      <Modal 
        open={open} 
        onClose={() => setOpen(false)} 
        closeAfterTransition 
        BackdropComponent={Backdrop} 
        BackdropProps={{ timeout: 500, sx: { backdropFilter: 'blur(10px)' } }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 480 }, bgcolor: '#ffffff', borderRadius: '32px', p: 4, outline: 'none',
            boxShadow: '0 25px 50px rgba(16,185,129,0.2)'
          }}>
            <Stack direction="row" justifyContent="space-between" mb={4}>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>Education Support</Typography>
              <IconButton onClick={() => setOpen(false)} sx={{ '&:hover': { bgcolor: '#f0fdf4' } }}><X /></IconButton>
            </Stack>
            <form onSubmit={handleWhatsApp}>
              <Stack spacing={2.5}>
                <StyledInput 
                  fullWidth 
                  label="Student Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  InputProps={{ startAdornment: <User size={18} style={{marginRight: 10, color: '#10b981'}} /> }} 
                />
                <StyledInput 
                  fullWidth 
                  label="Parent WhatsApp Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  InputProps={{ startAdornment: <Phone size={18} style={{marginRight: 10, color: '#10b981'}} /> }} 
                />
                <StyledInput 
                  fullWidth 
                  label="School / College Name" 
                  required 
                  value={formData.school}
                  onChange={(e) => setFormData({...formData, school: e.target.value})} 
                  InputProps={{ startAdornment: <School size={18} style={{marginRight: 10, color: '#10b981'}} /> }} 
                />
                <StyledInput 
                  fullWidth 
                  label="Full Address" 
                  multiline rows={2} 
                  required 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})} 
                  InputProps={{ startAdornment: <MapPin size={18} style={{marginRight: 10, color: '#10b981'}} /> }} 
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth 
                  sx={{ bgcolor: '#10b981', py: 2, borderRadius: '16px', fontWeight: 800, '&:hover': { bgcolor: '#059669' } }} 
                  endIcon={<Send size={18} />}
                >
                  Send on WhatsApp
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