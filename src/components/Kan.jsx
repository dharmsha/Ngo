"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box,
  Container, 
  Typography, 
  Grid, 
  Button, 
  Paper, 
  Divider,
  Modal, 
  TextField, 
  IconButton, 
  Fade, 
  Backdrop,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  CheckCircle2, 
  Heart, 
  Gift, 
  Send, 
  User, 
  Phone, 
  MapPin, 
  X, 
  Info, 
  Sparkles, 
  Trophy, 
  Users, 
  Calendar 
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
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#f97316',
    boxShadow: '0 10px 20px rgba(249, 115, 22, 0.08)',
    transform: 'translateX(5px)',
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
    setFormData({ name: '', phone: '', address: '' });
  };

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Hero Section with Image */}
      <Box sx={{ position: 'relative', height: { xs: '50vh', md: '65vh' }, overflow: 'hidden' }}>
        <Box 
          component="img" 
          src="/imga.jpg" 
          alt="Beti Samman Yojana"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <Box sx={{ 
          position: 'absolute', 
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)', 
        }} />
        
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            position: 'absolute',
            top: 30,
            right: 30,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            padding: '12px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 10
          }}
        >
          <Trophy size={20} color="#f97316" />
          <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>
            1000+ Families Helped
          </Typography>
        </motion.div>

        <Box sx={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          pb: { xs: 6, md: 8 },
          px: { xs: 4, md: 0 }
        }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Heart size={32} fill="#f97316" color="#f97316" />
                <Typography variant="h2" sx={{ 
                  color: '#fff', 
                  fontWeight: 900, 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                }}>
                  Beti Samman <span style={{ color: '#f97316' }}>Yojana</span>
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontWeight: 400, 
                maxWidth: '600px',
                fontSize: { xs: '1rem', md: '1.25rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Betiyon ki muskurahat aur parivaron ka sahara. Hum pradan karte hain 21 anmol uphar unke naye jeevan ki shuruat ke liye.
              </Typography>
            </motion.div>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          
          {/* Left Side: Description & Benefits */}
          <Grid item xs={12} md={7}>
            <Stack spacing={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Sparkles color="#f97316" size={28} />
                  <Typography variant="h4" sx={{ fontWeight: 900, color: '#0f172a' }}>
                    About the Mission
                  </Typography>
                </Box>
                <Typography sx={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.9 }}>
                  Beti Samman Yojana Ghazipur ke un parivaron ke liye hai jo apni beti ki shadi dhoom-dhaam se karna chahte hain par arthik tangi mehsoos karte hain. 
                  Hum is yojana ke antargat ghar-grihasthi ke <strong style={{ color: '#f97316' }}>21 zaroori saman</strong> pradan karte hain.
                </Typography>
              </motion.div>

              <Divider sx={{ borderColor: '#e2e8f0' }} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Gift color="#f97316" size={28} />
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    What we provide (21 Items)
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  {giftItems.map((item, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <ItemCard whileHover={{ x: 5 }}>
                        <CheckCircle2 color="#10b981" size={20} />
                        <Typography sx={{ fontWeight: 600, color: '#1e293b', fontSize: '0.9rem' }}>{item}</Typography>
                      </ItemCard>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paper elevation={0} sx={{ 
                  p: 4, 
                  borderRadius: '24px', 
                  background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
                  border: '1px solid #fed7aa'
                }}>
                  <Grid container spacing={3}>
                    <Grid item xs={4} textAlign="center">
                      <Users size={28} color="#f97316" style={{ margin: '0 auto 8px' }} />
                      <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', color: '#0f172a' }}>1000+</Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>Families</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="center">
                      <Gift size={28} color="#f97316" style={{ margin: '0 auto 8px' }} />
                      <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', color: '#0f172a' }}>21</Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>Gift Items</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="center">
                      <Calendar size={28} color="#f97316" style={{ margin: '0 auto 8px' }} />
                      <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', color: '#0f172a' }}>2015</Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>Since</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Stack>
          </Grid>

          {/* Right Side: Sticky Action Card */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Paper elevation={0} sx={{ 
                p: 4, 
                borderRadius: '32px', 
                border: '1px solid #e2e8f0', 
                bgcolor: '#ffffff',
                position: { md: 'sticky' }, 
                top: 100,
                boxShadow: '0 20px 60px rgba(0,0,0,0.06)'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Heart fill="#f97316" color="#f97316" size={28} />
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>Apply Now</Typography>
                </Box>
                <Typography sx={{ color: '#64748b', mb: 4, lineHeight: 1.8 }}>
                  Aap ghar baithe apna registration kar sakte hain. Humari team aapke pate par aakar verification karegi.
                </Typography>
                
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ textAlign: 'center', flex: 1, p: 2, bgcolor: '#f8fafc', borderRadius: '16px' }}>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: '#f97316' }}>1000+</Typography>
                      <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600 }}>Families Helped</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', flex: 1, p: 2, bgcolor: '#f8fafc', borderRadius: '16px' }}>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: '#f97316' }}>Free</Typography>
                      <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600 }}>Registration</Typography>
                    </Box>
                  </Box>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={() => setOpen(true)}
                      variant="contained" 
                      fullWidth 
                      sx={{ 
                        bgcolor: '#f97316', 
                        py: 2.5, 
                        borderRadius: '16px', 
                        fontWeight: 800, 
                        fontSize: '1.1rem',
                        boxShadow: '0 10px 30px rgba(249,115,22,0.3)',
                        '&:hover': { 
                          bgcolor: '#ea580c',
                          boxShadow: '0 15px 40px rgba(249,115,22,0.4)'
                        } 
                      }}
                    >
                      Apply via WhatsApp
                    </Button>
                  </motion.div>
                  
                  <Typography sx={{ fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center' }}>
                    <Info size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                    Terms & Conditions Apply. Membership is mandatory.
                  </Typography>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* FORM MODAL */}
      <Modal 
        open={open} 
        onClose={() => setOpen(false)} 
        closeAfterTransition 
        BackdropComponent={Backdrop} 
        BackdropProps={{ timeout: 500, sx: { backdropFilter: 'blur(10px)' } }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            width: { xs: '92%', sm: 450 }, 
            bgcolor: '#ffffff', 
            borderRadius: '32px', 
            p: 4, 
            outline: 'none',
            boxShadow: '0 25px 60px rgba(249,115,22,0.2)',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 900, color: '#0f172a' }}>Register for Scheme</Typography>
                <Typography variant="caption" sx={{ color: '#94a3b8' }}>Fill details to apply</Typography>
              </Box>
              <IconButton 
                onClick={() => setOpen(false)} 
                sx={{ 
                  '&:hover': { bgcolor: '#fee2e2' },
                  bgcolor: '#f1f5f9'
                }}
              >
                <X size={20} />
              </IconButton>
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
                  multiline 
                  rows={3} 
                  required 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})} 
                  InputProps={{ startAdornment: <MapPin size={18} style={{marginRight: 10, color: '#f97316'}} /> }} 
                />
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      bgcolor: '#f97316', 
                      py: 2.5, 
                      borderRadius: '16px', 
                      fontWeight: 800,
                      fontSize: '1rem',
                      boxShadow: '0 10px 30px rgba(249,115,22,0.3)',
                      '&:hover': { 
                        bgcolor: '#ea580c',
                        boxShadow: '0 15px 40px rgba(249,115,22,0.4)'
                      } 
                    }} 
                    endIcon={<Send size={18} />}
                  >
                    Send Details
                  </Button>
                </motion.div>

                <Typography sx={{ fontSize: '0.7rem', color: '#94a3b8', textAlign: 'center' }}>
                  Your data is secure and will only be used for verification
                </Typography>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default BetiSammanPage;