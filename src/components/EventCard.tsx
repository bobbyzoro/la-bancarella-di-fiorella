// src/components/EventCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, description, imageUrl }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: 'auto',
        boxShadow: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          📅 <strong>{date}</strong><br />
          📍 {location}
        </Typography>
        <Box mt={1}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;