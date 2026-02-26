"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Container, Typography, Stack, Button, Paper, 
  Modal, TextField, IconButton, Fade, Backdrop, Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Receipt, Landmark, FileText, BadgePercent, ArrowLeft, Send, 
  User, Phone, MapPin, X, GraduationCap, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

// --- Styled Components ---
const ReliefCard = styled(motion.div)({
  background: '#ffffff',
  borderRadius: '24px',
  padding: '32px',
  border: '1px solid #e2e8f0',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  '&:hover': {
    borderColor: '#0ea5e9',
    boxShadow: '0 20px 40px rgba(14, 165, 233, 0.1)',
    transform: 'translateY(-5px)'
  }
});

const StyledInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#f8fafc',
    '& fieldset': { borderColor: '#e2e8f0' },
  },
});

const FeesMaafiPage = () => {
  // --- Sirf states rakho, useEffect HATA DO ---
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    institute: '', 
    amount: '', 
    address: '' 
  });

  const reliefTypes = [
    { title: "School Fees Maafi", desc: "1st se 12th tak ke bacchon ke liye monthly fees mein vishesh chhoot.", icon: <GraduationCap color="#0ea5e9" /> },
    { title: "College Relief", desc: "Degree aur Diploma courses ke liye admission fees mein arthik sahayata.", icon: <Landmark color="#0ea5e9" /> },
    { title: "Exam Fees", desc: "Board exams aur Competitive exams ki registration fees ka bhugtan.", icon: <FileText color="#0ea5e9" /> },
    { title: "Hostel Subsidy", desc: "Bahari shehron mein padh rahe bacchon ke liye hostel kharch mein madad.", icon: <BadgePercent color="#0ea5e9" /> },
  ];

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `*Fees Maafi Yojana Application*%0A%0A👤 *Student:* ${formData.name}%0A📞 *WhatsApp:* ${formData.phone}%0A🏫 *Institute:* ${formData.institute}%0A💰 *Estimated Fees:* ${formData.amount}%0A📍 *Address:* ${formData.address}`;
    window.open(`https://wa.me/919415289162?text=${text}`, '_blank');
    setOpen(false);
  };

  // --- Direct return, no isClient check needed ---
  return (
    <Box sx={{ bgcolor: '#f0f9ff', minHeight: '100vh', pb: 10 }}>
      
      {/* --- Navigation --- */}
      <Box sx={{ py: 3, px: {xs: 2, md: 4} }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button startIcon={<ArrowLeft size={18} />} sx={{ color: '#0c4a6e', fontWeight: 800 }}>
            Jan Kalyan Portal
          </Button>
        </Link>
      </Box>

      <Container maxWidth="lg">
        {/* --- Hero Section --- */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={6} 
          alignItems="center" 
          sx={{ py: { xs: 4, md: 8 } }}
        >
          <Box sx={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <Chip label="Financial Assistance Program" sx={{ mb: 2, bgcolor: '#e0f2fe', color: '#0ea5e9', fontWeight: 700 }} />
              <Typography variant="h2" sx={{ fontWeight: 950, color: '#0f172a', mb: 3, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1 }}>
                Fees Maafi <br />
                <span style={{ color: '#0ea5e9' }}>Abhiyaan 2026</span>
              </Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', mb: 4, lineHeight: 1.7 }}>
                Ghazipur ke har kabil bacche ka adhikaar hai shiksha. Hum un parivaron ke saath khade hain jo school ya college ki fees bharne mein asamarth hain.
              </Typography>
              <Button 
                onClick={() => setOpen(true)}
                variant="contained" 
                sx={{ bgcolor: '#0ea5e9', px: 6, py: 2.2, borderRadius: '18px', fontWeight: 800, fontSize: '1.1rem', '&:hover': { bgcolor: '#0284c7' } }}
              >
                Apply for Relief
              </Button>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ position: 'relative' }}>
              <Box component="img" src="/imga.jpg" sx={{ width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', border: '6px solid #fff' }} />
              <Box sx={{ position: 'absolute', bottom: -20, left: 20, bgcolor: '#ffffff', p: 3, borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: 2 }}>
                <Receipt color="#0ea5e9" size={32} />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1 }}>50% OFF</Typography>
                    <Typography variant="caption">On Tuition Fees</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* --- Benefits Grid --- */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, textAlign: 'center', mb: 6 }}>Humari Sahayata</Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, 
            gap: 3 
          }}>
            {reliefTypes.map((item, i) => (
              <ReliefCard key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Box sx={{ bgcolor: '#f0f9ff', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>{item.title}</Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.9rem' }}>{item.desc}</Typography>
              </ReliefCard>
            ))}
          </Box>
        </Box>
      </Container>

      {/* --- APPLICATION MODAL --- */}
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, sx: { backdropFilter: 'blur(10px)' } }}>
        <Fade in={open}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 480 }, bgcolor: '#ffffff', borderRadius: '32px', p: 4, outline: 'none'
          }}>
            <Stack direction="row" justifyContent="space-between" mb={4}>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>Application Form</Typography>
              <IconButton onClick={() => setOpen(false)} sx={{ bgcolor: '#f8fafc' }}><X size={20} /></IconButton>
            </Stack>

            <form onSubmit={handleWhatsApp}>
              <Stack spacing={2.5}>
                <StyledInput 
                  fullWidth 
                  label="Student Name" 
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
                  label="School/College Name" 
                  required 
                  value={formData.institute}
                  onChange={(e) => setFormData({...formData, institute: e.target.value})} 
                  InputProps={{ startAdornment: <GraduationCap size={18} style={{marginRight: 10, color: '#94a3b8'}} /> }} 
                />
                <StyledInput 
                  fullWidth 
                  label="Approx Monthly Fees (₹)" 
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})} 
                />
                <StyledInput 
                  fullWidth 
                  label="Full Village Address" 
                  multiline rows={2} 
                  required 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})} 
                  InputProps={{ startAdornment: <MapPin size={18} style={{marginRight: 10, color: '#94a3b8'}} /> }} 
                />
                
                <Box sx={{ p: 2, bgcolor: '#f0f9ff', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ShieldCheck size={16} color="#0ea5e9" />
                    <Typography sx={{ color: '#0369a1', fontSize: '0.8rem', fontWeight: 600 }}>
                        Verification of Income Certificate is Mandatory.
                    </Typography>
                </Box>

                <Button 
                  type="submit" variant="contained" fullWidth 
                  sx={{ bgcolor: '#0ea5e9', py: 2.2, borderRadius: '16px', fontWeight: 800, fontSize: '1.05rem', '&:hover': { bgcolor: '#0369a1' } }} 
                  endIcon={<Send size={18} />}
                >
                  Apply Now
                </Button>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default FeesMaafiPage;