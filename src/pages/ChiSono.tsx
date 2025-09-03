import React from 'react';
import { Title, Meta } from 'react-head';
import Hero from '../components/Hero';
import SectionIntro from '../components/SectionIntro';
import { Box, Typography, Container } from '@mui/material';
import CompanyValues from '../components/CompanyValues';

const ChiSono: React.FC = () => {
  return (
    <>
      <Title>Chi Sono - La Bancarella di Fiorella</Title>
      <Meta
        name="description"
        content="Scopri la storia di [Nome Artigiana], la creatrice di pezzi unici realizzati a mano con passione e cura per i dettagli."
      />

      {/* Hero */}
      <Hero
        imageUrl="/hero.webp"
        title="Chi Sono"
        description="Un viaggio attraverso la mia passione per la maglia e l'uncinetto, e come sono arrivata a creare pezzi unici con le mie mani."
      />

      {/* Sezione Intro */}
      <SectionIntro
        text="Ciao! Sono [Nome], artigiana e creatrice di pezzi unici realizzati a mano con tanto amore. Ogni mio progetto racconta una storia, ed è pensato per portare un po' di calore e bellezza nelle case delle persone."
      />

      {/* Storia */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            La mia Storia
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            La mia passione per la maglia e l'uncinetto nasce da giovane, quando mi divertivo a imparare dai libri e a creare piccoli oggetti per amici e familiari. Col tempo, questa passione è diventata un vero e proprio lavoro, e oggi ogni mia creazione è realizzata con dedizione e cura, cercando di portare una sensazione di comfort e calore in ogni casa.
          </Typography>
        </Box>
      </Container>

      {/* Valori dell'artigiana */}
      <CompanyValues />

      {/* Citazione finale */}
      <Box sx={{ mt: 8, py: 6, textAlign: 'center', backgroundColor: 'grey.100' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          "Ogni punto è un passo verso la creazione di qualcosa di unico."
        </Typography>
        <Typography variant="body1" color="text.secondary">
          – [Nome Artigiana]
        </Typography>
      </Box>
    </>
  );
};

export default ChiSono;