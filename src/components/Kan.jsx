"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Container, Button, Typography, Stack, 
  Modal, TextField, IconButton, Fade, Backdrop, Grid, Paper, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  X, Send, User, Phone, GraduationCap, MapPin, 
  CheckCircle2, Heart, Gift, Star, ChevronRight
} from 'lucide-react';

// --- Custom Styled Components ---
const PremiumCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(15px)',
  borderRadius: '32px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    border: '1px solid rgba(249, 115, 22, 0.4)',
  }
}));

const SchemeImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '24px',
});

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', class: '', address: '' });

  const giftItems = [
    "Box Bed (Diwan Set)", "Sofa Set (3+2 Seater)", "Refrigerator", "Almirah (Wardrobe)",
    "Dressing Table", "Sewing Machine", "Television", "Air Cooler", "Wall Clock", "Utensil Set",
    "Mixer Grinder", "Trolley Bag", "Pillows", "Bed Sheets", "Mattress", "Iron",
    "Pressure Cooker", "Fan", "Gas Stove", "Clothes for Daughter", "Vehicle (Gift)"
  ];

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*New Registration 2026*%0A%0A👤 *Name:* ${formData.name}%0A📞 *WhatsApp:* ${formData.phone}%0A🎓 *Class:* ${formData.class}%0A📍 *Address:* ${formData.address}`;
    window.open(`https://wa.me/919415289162?text=${text}`, '_blank');
    setOpen(false);
  };

  return (
    <Box sx={{ bgcolor: '#050508', minHeight: '100vh', py: 10, position: 'relative' }}>
      
      {/* Background Decor */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 20% 30%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)' }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="stretch">
          
          {/* LEFT: The Image Box */}
          <Grid item xs={12} md={5}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ height: '100%' }}
            >
              <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '32px', height: '100%' }}>
                <SchemeImage src="/imga.jpg" alt="Beti Samman Yojana" />
              </Box>
            </motion.div>
          </Grid>

          {/* RIGHT: Professional Content */}
          <Grid item xs={12} md={7}>
            <PremiumCard elevation={0} sx={{ p: { xs: 3, md: 5 } }}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="overline" sx={{ color: '#f97316', fontWeight: 700, letterSpacing: 2 }}>
                    Social Initiative 2026
                  </Typography>
                  <Typography variant="h2" sx={{ color: '#fff', fontWeight: 900, fontSize: { xs: '2rem', md: '3.5rem' }, mb: 1 }}>
                    Beti Samman <span style={{ color: '#f97316' }}>Yojana</span>
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>
                    A noble initiative providing essential household items and support for daughters  weddings. Empowering families through community strength.
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      {giftItems.slice(0, 11).map((item, i) => (
                        <ListItem key={i} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}><CheckCircle2 size={18} color="#f97316" /></ListItemIcon>
                          <ListItemText primary={item} sx={{ '& .MuiListItemText-primary': { color: '#ccc', fontWeight: 500 } }} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <List dense>
                      {giftItems.slice(11).map((item, i) => (
                        <ListItem key={i} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}><CheckCircle2 size={18} color="#f97316" /></ListItemIcon>
                          <ListItemText primary={item} sx={{ '& .MuiListItemText-primary': { color: '#ccc', fontWeight: 500 } }} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>

                <Box sx={{ p: 3, bgcolor: 'rgba(249, 115, 22, 0.08)', borderRadius: '20px', borderLeft: '4px solid #f97316' }}>
                  <Typography variant="subtitle2" sx={{ color: '#f97316', fontWeight: 800, mb: 1 }}>
                    TERMS & CONDITIONS
                  </Typography>
                  <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                    Benefits are exclusive to registered members of the organization. Membership is mandatory to avail of this scheme.
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                  <Button 
                    variant="contained" 
                    onClick={() => setOpen(true)}
                    sx={{ 
                      bgcolor: '#f97316', borderRadius: '14px', px: 5, py: 2, fontWeight: 800,
                      '&:hover': { bgcolor: '#ea580c' } 
                    }}
                  >
                    Apply for Scheme
                  </Button>
                  <IconButton sx={{ color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px' }}>
                    <Heart color="#f97316" />
                  </IconButton>
                </Stack>
              </Stack>
            </PremiumCard>
          </Grid>
        </Grid>
      </Container>

      {/* --- REGISTRATION MODAL --- */}
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, sx: { backdropFilter: 'blur(10px)' } }}>
        <Fade in={open}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 450 }, bgcolor: '#0A0A0F', border: '1px solid #f97316',
            borderRadius: '28px', p: 4, boxShadow: '0 20px 60px rgba(249, 115, 22, 0.2)'
          }}>
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800 }}>Registration Form</Typography>
              <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }}><X /></IconButton>
            </Stack>

            <form onSubmit={handleWhatsApp}>
              <Stack spacing={2}>
                <TextField label="Your Name" fullWidth variant="outlined" required onChange={(e) => setFormData({...formData, name: e.target.value})} sx={{ '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } } }} />
                <TextField label="WhatsApp Number" fullWidth variant="outlined" required onChange={(e) => setFormData({...formData, phone: e.target.value})} sx={{ '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } } }} />
                <TextField label="Qualification/Class" fullWidth variant="outlined" onChange={(e) => setFormData({...formData, class: e.target.value})} sx={{ '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } } }} />
                <TextField label="Address" fullWidth variant="outlined" multiline rows={2} onChange={(e) => setFormData({...formData, address: e.target.value})} sx={{ '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' } } }} />
                <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: '#f97316', py: 2, borderRadius: '12px', fontWeight: 800 }}>Submit via WhatsApp</Button>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Hero;