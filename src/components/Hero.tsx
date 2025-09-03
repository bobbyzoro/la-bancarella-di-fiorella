// src/components/Hero.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Definisco un'interfaccia per le props del componente Hero
interface HeroProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string; // Rendi il link opzionale
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, description, buttonText, buttonLink }) => {
  return (
    <Box
      sx={{
        height: '70vh',
        backgroundImage: `url(${import.meta.env.BASE_URL}${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: 4, mx: 8 }}>
        {description}
      </Typography>

      {/* Mostra il pulsante solo se il buttonLink è presente */}
      {buttonLink && (
        <Button
          variant="contained"
          color="primary"
          sx={{ fontSize: '1.2rem' }}
          component={RouterLink}
          to={buttonLink}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default Hero;
