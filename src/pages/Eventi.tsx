// src/pages/Eventi.tsx
import React from 'react';
import { Title, Meta } from 'react-head';
import { Container, Box, Typography, Button } from '@mui/material';
import Hero from '../components/Hero';
import SectionIntro from '../components/SectionIntro';
import EventCard from '../components/EventCard';

const eventi = [
  {
    title: 'Mercatino di Natale - Milano',
    date: '08 dicembre 2025',
    location: 'Piazza Gae Aulenti, Milano',
    description: 'Un mercatino natalizio con artigiani locali. Vieni a scoprire le creazioni invernali fatte a mano!',
    imageUrl: '/eventi/natale-milano.webp',
  },
  {
    title: 'Fiera dell’Artigianato - Bergamo',
    date: '15 dicembre 2025',
    location: 'Centro Fiere, Bergamo',
    description: 'Una fiera dedicata all’artigianato italiano. Troverai tante idee regalo originali.',
    imageUrl: '/eventi/fiera-bergamo.webp',
  },
  {
    title: 'Mercatino Creativo - Como',
    date: '22 dicembre 2025',
    location: 'Lungo Lago, Como',
    description: 'Passeggiata natalizia tra bancarelle creative sul lago. Atmosfera magica garantita!',
    imageUrl: '/eventi/mercatino-como.webp',
  },
];

const Eventi: React.FC = () => {
  return (
    <>
      <Title>Prossimi Eventi - La Bancarella di Fiorella</Title>
      <Meta
        name="description"
        content="Scopri dove trovare le mie creazioni dal vivo! Bancarelle, fiere e mercatini di artigianato in programma."
      />

      <Hero
        imageUrl="/hero.webp"
        title="Vieni a trovarmi!"
        description="Partecipo regolarmente a fiere e mercatini locali. Ecco dove puoi trovare le mie creazioni dal vivo."
        buttonText="Contattami per info"
        buttonLink="/contatti"
      />

      <SectionIntro
        title="Eventi in programma"
        text="Ecco l’elenco aggiornato delle prossime bancarelle a cui parteciperò. Passa a salutarmi, tocca con mano le creazioni e magari trova qualcosa da portare a casa."
      />

      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {eventi.map((evento) => (
              <Box
                key={evento.title}
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 16px)',
                    md: 'calc(33.33% - 16px)',
                  },
                }}
              >
                <EventCard {...evento} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 6, textAlign: 'center', backgroundColor: 'grey.100' }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Non puoi venire? Nessun problema!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Scrivimi su WhatsApp per info o ordini personalizzati.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://wa.me/39XXXXXXXXXX"
            target="_blank"
            rel="noopener"
            sx={{ fontSize: '1rem', px: 4, py: 1 }}
          >
            Contattami su WhatsApp
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Eventi;