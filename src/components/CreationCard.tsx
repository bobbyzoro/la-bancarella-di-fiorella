// src/components/CreationCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface CreationCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CreationCard: React.FC<CreationCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: 'auto',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)', // Ingrandisce la card
          boxShadow: 8, // Aumenta l'ombra
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={`${import.meta.env.BASE_URL}${imageUrl}`}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreationCard;