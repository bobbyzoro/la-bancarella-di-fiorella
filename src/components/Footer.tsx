// src/components/Footer.tsx
import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'grey.100',
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom textAlign="center">
          La Bancarella di Fiorella
        </Typography>

        <Typography variant="body2" color="grey.400" textAlign="center" sx={{ mb: 1 }}>
          Fatto a mano con amore e creatività • Maglia e uncinetto personalizzati
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2 }}>
          <IconButton
            component="a"
            href="https://www.instagram.com/tuo_profilo"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            sx={{ color: 'grey.100' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:creazioni@example.com"
            aria-label="Email"
            sx={{ color: 'grey.100' }}
          >
            <EmailIcon />
          </IconButton>
        </Box>

        <Typography variant="caption" color="grey.500" display="block" textAlign="center">
          &copy; {new Date().getFullYear()} La Bancarella di Fiorella. Tutti i diritti riservati.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;