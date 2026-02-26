"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Container, Typography, Stack, Grid, Button, Paper, Divider,
  Modal, TextField, IconButton, Fade, Backdrop
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  CheckCircle2, Heart, Gift, ArrowLeft, Send, User, Phone, MapPin, X, Info 
} from 'lucide-react';
import Link from 'next/link';

// --- Styled Components ---
const ItemCard = styled(motion.div)({
  background: '#ffffff',
  borderRadius: '16px',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  border: '1px solid #f1f5f9',
  boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
  '&:hover': {
    borderColor: '#f97316',
    boxShadow: '0 10px 20px rgba(249, 115, 22, 0.08)',
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
  '& .MuiInputLabel-root': { color: '#64748b' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#f97316' },
});

const BetiSammanPage = () => {
  // --- Sirf 2 states, no mounted state, no useEffect ---
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    address: '' 
  });

  const giftItems = [
    "Box Bed (Diwan)", "Sofa Set (3+2)", "Refrigerator", "Almirah", "Dressing Table",
    "Sewing Machine", "Television", "Air Cooler", "Wall Clock", "Utensil Set",
    "Mixer Grinder", "Trolley Bag", "Pillows", "Bed Sheets", "Mattress",
    "Iron", "Pressure Cooker", "Fan", "Gas Stove", "Daughter's Outfit", "Gift Vehicle"
  ];

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*Beti Samman Yojana Application*%0A%0A👤 *Naam:* ${formData.name}%0A📞 *WhatsApp:* ${formData.phone}%0A📍 *Pata:* ${formData.address}`;
    window.open(`https://wa.me/919415289162?text=${text}`, '_blank');
    setOpen(false);
    // Form reset after submit
    setFormData({ name: '', phone: '', address: '' });
  };

  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
      
      {/* --- Sticky Back Navigation --- */}
      <Box sx={{ position: 'fixed', top: 20, left: 20, zIndex: 100 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button 
            startIcon={<ArrowLeft size={18} />}
            sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: '#0f172a', borderRadius: '50px', px: 3, boxShadow: '0 10px 20px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)' }}
          >
            Back to Portal
          </Button>
        </Link>
      </Box>

      {/* --- Hero Section with Image --- */}
      <Box sx={{ position: 'relative', height: { xs: '50vh', md: '70vh' }, overflow: 'hidden' }}>
        <Box 
          component="img" 
          src="/imga.jpg" 
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <Box sx={{ 
          position: 'absolute', bottom: 0, left: 0, width: '100%', 
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', 
          pt: 10, pb: 4 
        }}>
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Beti Samman <span style={{ color: '#f97316' }}>Yojana</span>
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 400, maxWidth: '600px' }}>
              Betiyon ki muskurahat aur parivaron ka sahara. Hum pradan karte hain 21 anmol uphar unke naye jeevan ki shuruat ke liye.
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          
          {/* Left Side: Description & Benefits */}
          <Grid item xs={12} md={7}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: '#0f172a' }}>About the Mission</Typography>
                <Typography sx={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Beti Samman Yojana Ghazipur ke un parivaron ke liye hai jo apni beti ki shadi dhoom-dhaam se karna chahte hain par arthik tangi mehsoos karte hain. Hum is yojana ke antargat ghar-grihasthi ke 21 zaroori saman pradan karte hain.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Gift color="#f97316" /> What we provide (21 Items)
                </Typography>
                <Grid container spacing={2}>
                  {giftItems.map((item, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <ItemCard whileHover={{ x: 5 }}>
                        <CheckCircle2 color="#10b981" size={20} />
                        <Typography sx={{ fontWeight: 600, color: '#1e293b' }}>{item}</Typography>
                      </ItemCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Grid>

          {/* Right Side: Sticky Action Card */}
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ 
              p: 4, borderRadius: '32px', border: '1px solid #e2e8f0', bgcolor: '#f8fafc',
              position: { md: 'sticky' }, top: 100 
            }}>
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>Interested in Applying?</Typography>
              <Typography sx={{ color: '#64748b', mb: 4 }}>
                Aap ghar baithe apna registration kar sakte hain. Humari team aapke pate par aakar verification karegi.
              </Typography>
              
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: '#f97316' }}>1000+</Typography>
                    <Typography variant="caption" sx={{ color: '#64748b' }}>Families Helped</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', flex: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: '#f97316' }}>Free</Typography>
                    <Typography variant="caption" sx={{ color: '#64748b' }}>Registration</Typography>
                  </Box>
                </Box>
                
                <Button 
                  onClick={() => setOpen(true)}
                  variant="contained" fullWidth 
                  sx={{ bgcolor: '#f97316', py: 2, borderRadius: '16px', fontWeight: 800, fontSize: '1.1rem', '&:hover': { bgcolor: '#ea580c' } }}
                >
                  Apply via WhatsApp
                </Button>
                
                <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center' }}>
                  <Info size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                  Terms & Conditions Apply. Membership is mandatory.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
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
            width: { xs: '90%', sm: 450 }, bgcolor: '#ffffff', borderRadius: '32px', p: 4, outline: 'none',
            boxShadow: '0 25px 50px rgba(249,115,22,0.2)'
          }}>
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>Register for Scheme</Typography>
              <IconButton onClick={() => setOpen(false)} sx={{ '&:hover': { bgcolor: '#fee2e2' } }}><X /></IconButton>
            </Stack>
            <form onSubmit={handleWhatsApp}>
              <Stack spacing={2.5}>
                <StyledInput 
                  fullWidth 
                  label="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  InputProps={{ startAdornment: <User size={18} style={{marginRight: 10, color: '#f97316'}} /> }} 
                />
                <StyledInput 
                  fullWidth 
                  label="WhatsApp Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  InputProps={{ startAdornment: <Phone size={18} style={{marginRight: 10, color: '#f97316'}} /> }} 
                />
                <StyledInput 
                  fullWidth 
                  label="Full Address" 
                  multiline rows={3} 
                  required 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})} 
                  InputProps={{ startAdornment: <MapPin size={18} style={{marginRight: 10, color: '#f97316'}} /> }} 
                />
                
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth 
                  sx={{ 
                    bgcolor: '#f97316', 
                    py: 2, 
                    borderRadius: '16px', 
                    fontWeight: 800,
                    '&:hover': { bgcolor: '#ea580c' }
                  }} 
                  endIcon={<Send size={18} />}
                >
                  Send Details
                </Button>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default BetiSammanPage;