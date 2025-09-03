// src/components/CompanyValues.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BuildIcon from '@mui/icons-material/Build';
import { motion } from 'framer-motion';  // Importa framer-motion

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: <BuildIcon fontSize="large" color="primary" />,
    title: 'Passione per l\'Artigianato',
    description: 'Ogni mia creazione nasce dall\'amore per la manualità e dalla ricerca del dettaglio perfetto.',
  },
  {
    icon: <HandshakeIcon fontSize="large" color="primary" />,
    title: 'Sostenibilità e Responsabilità',
    description: 'Credo in un lavoro che rispetti l\'ambiente e che crei un impatto positivo nella comunità.',
  },
  {
    icon: <EmojiObjectsIcon fontSize="large" color="primary" />,
    title: 'Creatività senza Limiti',
    description: 'Ogni progetto è un\'opportunità per esprimere qualcosa di nuovo e di unico, unendo tradizione e innovazione.',
  },
];

const CompanyValues: React.FC = () => {
  return (
    <Box sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" mb={4}>
        I miei valori
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}
      >
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}  // Inizia invisibile e leggermente sotto
            animate={{ opacity: 1, y: 0 }}   // Diventa visibile e si muove a posizione originale
            transition={{
              duration: 0.6,           // Durata della transizione
              delay: index * 0.2,      // Ritardo progressivo per gli elementi
              ease: 'easeInOut',       // Easing per un'entrata più morbida
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                flex: { xs: '1 1 100%', sm: '1 1 30%' },
                minWidth: '260px',
                maxWidth: '350px',
                mx: 'auto',
              }}
            >
              <Box mb={2}>{value.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {value.title}
              </Typography>
              <Typography variant="body2">{value.description}</Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default CompanyValues;
