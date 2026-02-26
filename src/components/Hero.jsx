"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Box, Container, Typography, Stack, Grid, Button, Chip, 
  Modal, TextField, IconButton, Fade, Backdrop 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Heart, MapPin, Shirt, Baby, BookOpen, 
  ShieldCheck, Sparkles, ArrowUpRight, X, Send, User, Phone
} from 'lucide-react';

// --- Styled Components ---
const GlassCard = styled(motion.div)({
  background: 'rgba(10, 10, 15, 0.95)',
  backdropFilter: 'blur(20px)',
  borderRadius: '28px',
  padding: '24px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '190px',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    border: '1px solid rgba(249, 115, 22, 0.5)',
    boxShadow: '0 15px 40px rgba(249, 115, 22, 0.15)',
  }
});

const StyledInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#f8fafc',
    '& fieldset': { borderColor: '#e2e8f0' },
    '&:hover fieldset': { borderColor: '#f97316' },
    '&.Mui-focused fieldset': { borderColor: '#f97316' },
  },
});

const Hero = () => {
  // --- Fixed: No cascading renders, safe useEffect ---
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', scheme: '', address: '' });

  // ✅ FIXED: useEffect now runs safely with cleanup and no dependencies issues
  useEffect(() => {
    // Small delay to ensure smooth hydration
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []); // Empty dependency array - runs once after mount

  const schemes = [
    { title: "Beti Samman", icon: <Heart color="#f97316" />, link: "/schemes/beti-samman", tag: "Wedding" },
    { title: "Margdarshan", icon: <MapPin color="#f97316" />, link: "/schemes/margdarshan", tag: "Career" },
    { title: "Anna Vastra", icon: <Shirt color="#f97316" />, link: "/schemes/anna-vastra", tag: "Basic Needs" },
    { title: "Bachpan Bachao", icon: <Baby color="#f97316" />, link: "/schemes/bachpan-bachao", tag: "Safety" },
    { title: "Shiksha Help", icon: <BookOpen color="#f97316" />, link: "/schemes/shiksha", tag: "Education" },
    { title: "Fees Maafi", icon: <ShieldCheck color="#f97316" />, link: "/schemes/fees-maafi", tag: "Relief" },
  ];

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = `*Nayi Registration 2026*%0A%0A👤 *Naam:* ${formData.name}%0A📞 *WhatsApp:* ${formData.phone}%0A📋 *Yojana:* ${formData.scheme}%0A📍 *Pata:* ${formData.address}`;
    window.open(`https://wa.me/919415289162?text=${message}`, '_blank');
    setOpen(false);
    // Reset form after submit
    setFormData({ name: '', phone: '', scheme: '', address: '' });
  };

  // Show loading skeleton during SSR
  if (!isClient) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography sx={{ color: '#f97316' }}>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% -20%, rgba(249, 115, 22, 0.08), transparent), #ffffff',
      pt: { xs: 15, md: 22 }, 
      pb: 10,
      position: 'relative'
    }}>
      
      <Container maxWidth="lg">
        {/* --- Hero Text Section --- */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 15 } }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Chip 
              icon={<Sparkles size={14} color="#f97316" />} 
              label="Beti Samman & Jan Kalyan Mission" 
              sx={{ mb: 3, bgcolor: 'rgba(249, 115, 22, 0.08)', color: '#f97316', fontWeight: 800, px: 2, border: '1px solid rgba(249, 115, 22, 0.2)' }}
            />
            <Typography variant="h1" sx={{ fontWeight: 950, color: '#0f172a', fontSize: { xs: '2.5rem', md: '5rem' }, lineHeight: 1, mb: 3, letterSpacing: '-0.04em' }}>
              Empowering Lives, <br />
              <span style={{ color: '#f97316' }}>Building Futures.</span>
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', mb: 5, mx: 'auto', maxWidth: '650px', fontWeight: 400, fontSize: '1.1rem' }}>
              Ghazipur ka sabse bada jan kalyan portal. Humara maqsad har zarooratmand tak sarkari aur gair-sarkari suvidhaein pahunchana hai.
            </Typography>
            
            <Button 
              onClick={() => setOpen(true)}
              variant="contained" 
              sx={{ 
                bgcolor: '#0f172a', color: '#fff', px: 6, py: 2.2, borderRadius: '20px', fontWeight: 800, fontSize: '1.1rem',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.2)', '&:hover': { bgcolor: '#f97316', transform: 'scale(1.05)' }, transition: '0.4s ease' 
              }}
            >
              Get Started Now
            </Button>
          </motion.div>
        </Box>

        {/* --- Schemes Section --- */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#0f172a' }}>Our Initiatives</Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {schemes.map((scheme, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Link href={scheme.link} style={{ textDecoration: 'none' }}>
                <GlassCard
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Stack direction="row" justifyContent="space-between">
                    <Box sx={{ bgcolor: 'rgba(249, 115, 22, 0.12)', p: 1.2, borderRadius: '14px', display: 'flex' }}>
                      {scheme.icon}
                    </Box>
                    <ArrowUpRight size={18} color="rgba(255,255,255,0.2)" />
                  </Stack>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#f97316', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: '0.65rem' }}>
                      {scheme.tag}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800, mt: 0.5, lineHeight: 1.2 }}>
                      {scheme.title}
                    </Typography>
                  </Box>
                </GlassCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* --- APPLICATION FORM MODAL --- */}
      <Modal 
        open={open} 
        onClose={() => setOpen(false)} 
        closeAfterTransition 
        BackdropComponent={Backdrop} 
        BackdropProps={{ timeout: 500, sx: { backdropFilter: 'blur(12px)', bgcolor: 'rgba(0,0,0,0.4)' } }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '92%', sm: 480 }, bgcolor: '#ffffff', borderRadius: '32px', p: 4, boxShadow: '0 30px 70px rgba(0,0,0,0.3)', outline: 'none'
          }}>
            <Stack direction="row" justifyContent="space-between" mb={4}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 900, color: '#0f172a' }}>Apply for Welfare</Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>Please fill your correct details</Typography>
              </Box>
              <IconButton onClick={() => setOpen(false)} sx={{ bgcolor: '#f8fafc' }}><X size={20} /></IconButton>
            </Stack>

            <form onSubmit={handleWhatsApp}>
              <Stack spacing={2.5}>
                <StyledInput 
                  fullWidth 
                  label="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  InputProps={{ startAdornment: <User size={18} style={{marginRight: 10, color: '#94a3b8'}} /> }} 
                />
                <StyledInput 
                  fullWidth 
                  label="WhatsApp Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  InputProps={{ startAdornment: <Phone size={18} style={{marginRight: 10, color: '#94a3b8'}} /> }} 
                />
                
                <StyledInput 
                  fullWidth 
                  label="Choose Scheme" 
                  select 
                  SelectProps={{ native: true }} 
                  value={formData.scheme}
                  onChange={(e) => setFormData({...formData, scheme: e.target.value})} 
                  InputProps={{ startAdornment: <Sparkles size={18} style={{marginRight: 10, color: '#94a3b8'}} /> }}
                >
                  <option value="">-- Select Yojana --</option>
                  {schemes.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                </StyledInput>

                <StyledInput 
                  fullWidth 
                  label="Village / Town" 
                  multiline rows={2} 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})} 
                  InputProps={{ startAdornment: <MapPin size={18} style={{marginRight: 10, color: '#94a3b8'}} /> }} 
                />
                
                <Box sx={{ p: 2, bgcolor: '#fff7ed', borderRadius: '16px', border: '1px solid #ffedd5' }}>
                   <Typography sx={{ color: '#c2410c', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}>
                     <ShieldCheck size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                     Verification will be done via home visit.
                   </Typography>
                </Box>

                <Button 
                  type="submit" variant="contained" fullWidth 
                  sx={{ 
                    bgcolor: '#f97316', py: 2.2, borderRadius: '16px', fontWeight: 800, fontSize: '1.05rem',
                    boxShadow: '0 10px 25px rgba(249, 115, 22, 0.3)', '&:hover': { bgcolor: '#ea580c' } 
                  }} 
                  endIcon={<Send size={18} />}
                >
                  Submit Application
                </Button>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Hero;