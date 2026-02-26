"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Container, Typography, Stack, Button, Paper, 
  Modal, TextField, IconButton, Fade, Backdrop, Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Shirt, Apple, Utensils, HeartHandshake, ArrowLeft, Send, 
  User, Phone, MapPin, X, ShieldCheck, Sparkles, ShoppingBasket
} from 'lucide-react';
import Link from 'next/link';

// --- Custom Styled Components ---
const ServiceCard = styled(motion.div)({
  background: '#ffffff',
  borderRadius: '32px',
  padding: '35px',
  border: '1px solid #fef3c7',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: '0.4s all ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    borderColor: '#f59e0b',
    boxShadow: '0 25px 50px rgba(245, 158, 11, 0.1)',
  }
});

const StyledInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#fffcf9',
    '& fieldset': { borderColor: '#fde68a' },
    '&:hover fieldset': { borderColor: '#f59e0b' },
    '&.Mui-focused fieldset': { borderColor: '#f59e0b' },
  },
  '& .MuiInputLabel-root': { color: '#92400e' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#f59e0b' },
});

const AnnaVastraPage = () => {
  // --- Sirf 2 states, mounted state HATAYA, useEffect HATAYA ---
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    members: '', 
    address: '' 
  });

  const features = [
    { title: "Monthly Ration", desc: "Zarooratmand parivaron ko har mahine anaaj aur rashan ki sahayata.", icon: <ShoppingBasket color="#f59e0b" size={35} /> },
    { title: "Winter Vastra", desc: "Sardiyon mein garib logon ko kambal aur garam kapdon ka vitaran.", icon: <Shirt color="#f59e0b" size={35} /> },
    { title: "Emergency Meal", desc: "Aapda ke samay paka hua poshtik khana pahunchane ki suvidha.", icon: <Utensils color="#f59e0b" size={35} /> },
    { title: "Donation Hub", desc: "Samaj se purane kapde collect karke zarooratmand tak pahunchana.", icon: <HeartHandshake color="#f59e0b" size={35} /> },
  ];

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*Anna Va Vastra Yojana Application*%0A%0A👤 *Name:* ${formData.name}%0A📞 *WhatsApp:* ${formData.phone}%0A👨‍👩‍👧 *Family Members:* ${formData.members}%0A📍 *Address:* ${formData.address}`;
    window.open(`https://wa.me/919415289162?text=${text}`, '_blank');
    setOpen(false);
    // Form reset after submit
    setFormData({ name: '', phone: '', members: '', address: '' });
  };

  // --- Direct return, no mounted check needed ---
  return (
    <Box sx={{ bgcolor: '#fffcf7', minHeight: '100vh', pb: 10 }}>
      
      {/* --- Simple Nav --- */}
      <Box sx={{ py: 3, px: { xs: 2, md: 4 }, borderBottom: '1px solid #fef3c7', bgcolor: '#fff' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button startIcon={<ArrowLeft size={18} />} sx={{ color: '#92400e', fontWeight: 800 }}>
            Jan Kalyan Mission
          </Button>
        </Link>
      </Box>

      <Container maxWidth="lg">
        {/* --- Hero Section (Flexbox) --- */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={8} 
          alignItems="center" 
          sx={{ py: { xs: 6, md: 10 } }}
        >
          <Box sx={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <Chip icon={<Sparkles size={14} color="#f59e0b" />} label="Zero Hunger Mission" sx={{ mb: 2, bgcolor: '#fef3c7', color: '#92400e', fontWeight: 700, px: 1 }} />
              <Typography variant="h1" sx={{ fontWeight: 950, color: '#451a03', fontSize: { xs: '2.8rem', md: '4.5rem' }, lineHeight: 1.1, mb: 3 }}>
                Anna Va <br />
                <span style={{ color: '#f59e0b' }}>Vastra Yojana</span>
              </Typography>
              <Typography sx={{ color: '#78350f', fontSize: '1.15rem', mb: 5, lineHeight: 1.8, maxWidth: '500px' }}>
                Satyameva Jayate - Humara lakshya hai ki Ghazipur mein koi bhookha na soye aur har kisi ke paas tan dhakne ko kapda ho.
              </Typography>
              <Button 
                onClick={() => setOpen(true)}
                variant="contained" 
                sx={{ bgcolor: '#92400e', px: 6, py: 2.2, borderRadius: '20px', fontWeight: 800, fontSize: '1.1rem', boxShadow: '0 15px 30px rgba(146, 64, 14, 0.2)', '&:hover': { bgcolor: '#451a03' } }}
              >
                Apply for Support
              </Button>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1, position: 'relative' }}>
             <Box 
                component="img" 
                src="/imga.jpg" 
                sx={{ width: '100%', borderRadius: '50px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)', border: '10px solid #fff' }} 
             />
             {/* Floating Info Badge */}
             <Box sx={{ position: 'absolute', top: -20, right: 20, bgcolor: '#f59e0b', p: 3, borderRadius: '25px', color: '#fff', boxShadow: '0 20px 40px rgba(245, 158, 11, 0.3)' }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>Free</Typography>
                <Typography variant="caption">Ration & Clothes</Typography>
             </Box>
          </Box>
        </Stack>

        {/* --- Services Grid (Standard CSS Grid) --- */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, textAlign: 'center', mb: 8, color: '#451a03' }}>Humari Seva</Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, 
            gap: 4 
          }}>
            {features.map((item, i) => (
              <ServiceCard key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Box sx={{ bgcolor: '#fff9f0', width: '70px', height: '70px', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#451a03', mb: 1 }}>{item.title}</Typography>
                <Typography sx={{ color: '#92400e', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</Typography>
              </ServiceCard>
            ))}
          </Box>
        </Box>

        {/* --- Verification Alert --- */}
        <Paper elevation={0} sx={{ mt: 12, p: 5, borderRadius: '40px', bgcolor: '#fff', border: '2px dashed #f59e0b', textAlign: 'center' }}>
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                <ShieldCheck color="#f59e0b" size={28} />
                <Typography variant="h5" sx={{ fontWeight: 900, color: '#92400e' }}>Stithi Ki Jaanch</Typography>
            </Stack>
            <Typography sx={{ color: '#78350f', maxWidth: '850px', mx: 'auto', fontSize: '1.05rem' }}>
                Yeh yojana un parivaron ke liye hai jo vastavik roop se arthik tangi mein hain. Registration ke baad humari team sthaniya star par verification karegi taaki sahayata sahi logo tak pahunche.
            </Typography>
        </Paper>
      </Container>

      {/* --- REGISTRATION MODAL --- */}
      <Modal 
        open={open} 
        onClose={() => setOpen(false)} 
        closeAfterTransition 
        BackdropComponent={Backdrop} 
        BackdropProps={{ timeout: 500, sx: { backdropFilter: 'blur(12px)' } }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '92%', sm: 480 }, bgcolor: '#ffffff', borderRadius: '40px', p: 5, outline: 'none',
            boxShadow: '0 25px 50px rgba(245,158,11,0.3)'
          }}>
            <Stack direction="row" justifyContent="space-between" mb={4}>
              <Typography variant="h5" sx={{ fontWeight: 900, color: '#451a03' }}>Sahayata Panjikaran</Typography>
              <IconButton onClick={() => setOpen(false)} sx={{ bgcolor: '#fff9f0', '&:hover': { bgcolor: '#fef3c7' } }}><X size={20} /></IconButton>
            </Stack>

            <form onSubmit={handleWhatsApp}>
              <Stack spacing={2.5}>
                <StyledInput 
                  fullWidth 
                  label="Family Head Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  InputProps={{ startAdornment: <User size={18} style={{marginRight: 10, color: '#f59e0b'}} /> }}
                />
                <StyledInput 
                  fullWidth 
                  label="WhatsApp Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  InputProps={{ startAdornment: <Phone size={18} style={{marginRight: 10, color: '#f59e0b'}} /> }}
                />
                <StyledInput 
                  fullWidth 
                  label="Family Members (Total)" 
                  type="number" 
                  value={formData.members}
                  onChange={(e) => setFormData({...formData, members: e.target.value})} 
                />
                <StyledInput 
                  fullWidth 
                  label="Full Village Address" 
                  multiline rows={2} 
                  required 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})} 
                  InputProps={{ startAdornment: <MapPin size={18} style={{marginRight: 10, color: '#f59e0b'}} /> }}
                />
                
                <Box sx={{ p: 2, bgcolor: '#fff9f0', borderRadius: '16px', border: '1px solid #fde68a' }}>
                    <Typography sx={{ color: '#92400e', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}>
                        *Aadhar card verification zaroori hai.
                    </Typography>
                </Box>

                <Button 
                  type="submit" variant="contained" fullWidth 
                  sx={{ bgcolor: '#f59e0b', py: 2.2, borderRadius: '18px', fontWeight: 800, fontSize: '1.05rem', mt: 1, '&:hover': { bgcolor: '#92400e' } }} 
                  endIcon={<Send size={18} />}
                >
                  Apply via WhatsApp
                </Button>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default AnnaVastraPage;