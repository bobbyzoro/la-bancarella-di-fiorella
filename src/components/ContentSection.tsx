import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

interface ContentSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  imgPosition?: 'left' | 'right';
  animateOnScroll?: boolean;
}

// ✅ Wrap motion components correttamente
const MotionBox = motion(Box);
const MotionImg = motion('img');

const ContentSection: React.FC<ContentSectionProps> = ({
  imageUrl,
  title,
  description,
  ctaLabel,
  ctaUrl,
  imgPosition = 'right',
  animateOnScroll = true,
}) => {
  const isImageLeft = imgPosition === 'left';
  const theme = useTheme();

  const imageVariants = {
    hidden: { opacity: 0, x: isImageLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // ✅ cast
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isImageLeft ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // ✅ cast
        delay: 0.2,
      },
    },
  };


  const motionProps = animateOnScroll
    ? {
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, amount: 0.3 },
    }
    : {};

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: isImageLeft ? 'row' : 'row-reverse',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 4, md: 6 },
        my: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* Immagine animata */}
      <MotionImg
        {...motionProps}
        variants={imageVariants}
        src={`${import.meta.env.BASE_URL}${imageUrl}`}
        alt={title}
        style={{
          width: '100%',
          maxWidth: '100%',
          maxHeight: 360,
          borderRadius: 8,
          objectFit: 'cover',
          boxShadow: theme.shadows[3],
        }}
      />

      {/* Testo e bottone animati */}
      <MotionBox
        {...motionProps}
        variants={textVariants}
        sx={{
          width: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          fontWeight={700}
          mb={2}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.8,
            maxWidth: 600,
            mx: { xs: 'auto', md: 0 },
          }}
        >
          {description}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to={ctaUrl}
        >
          {ctaLabel}
        </Button>
      </MotionBox>
    </Box>
  );
};

export default ContentSection;
