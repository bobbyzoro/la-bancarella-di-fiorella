import React from 'react';
import { Title, Meta } from 'react-head';
import { Container, Box, Typography, Button } from '@mui/material';
import Hero from '../components/Hero';
import SectionIntro from '../components/SectionIntro';
import CreationCard from '../components/CreationCard';

const creazioni = [
  {
    title: 'Cappelli in Lana',
    description: 'Morbidi, caldi e colorati: ideali per l’inverno. Disponibili in vari colori e stili.',
    imageUrl: '/creazioni/cappelli.webp',
  },
  {
    title: 'Sciarpe e Scaldacollo',
    description: 'Realizzati a maglia con filati di qualità. Perfetti per riscaldare con stile.',
    imageUrl: '/creazioni/sciarpe.webp',
  },
  {
    title: 'Borse all’uncinetto',
    description: 'Borse uniche e resistenti per tutti i giorni, fatte interamente a mano.',
    imageUrl: '/creazioni/borse.webp',
  },
  {
    title: 'Decorazioni per la casa',
    description: 'Centrotavola, sottobicchieri, coprivasi e altri dettagli decorativi fatti a uncinetto.',
    imageUrl: '/creazioni/decorazioni.webp',
  },
  {
    title: 'Regali personalizzati',
    description: 'Idee regalo fatte su misura per ogni occasione, anche su richiesta!',
    imageUrl: '/creazioni/regali.webp',
  },
];

const Creazioni: React.FC = () => {
  return (
    <>
      <Title>Le Mie Creazioni - La Bancarella di Fiorella</Title>
      <Meta
        name="description"
        content="Scopri le creazioni fatte a mano: cappelli, borse, sciarpe, decorazioni e regali unici. Tutto realizzato con passione."
      />

      {/* Hero */}
      <Hero
        imageUrl="/hero.webp"
        title="Le mie creazioni artigianali"
        description="Ogni pezzo è unico e fatto a mano con cura. Esplora le collezioni!"
        buttonText="Contattami per ordini"
        buttonLink="/contatti"
      />

      <SectionIntro
        title="Creazioni fatte con passione"
        text="Ogni prodotto nasce da una combinazione di creatività, esperienza e amore per i filati. Che sia per te o per un regalo speciale, troverai qualcosa di unico."
      />

      {/* Creazioni */}
      <Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {creazioni.map((creazione) => (
              <Box
                key={creazione.title}
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 16px)',
                    md: 'calc(33.33% - 16px)',
                  },
                }}
              >
                <CreationCard {...creazione} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA finale */}
      <Box sx={{ mt:8, py: 6, textAlign: 'center', backgroundColor: 'grey.100' }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Ti piace qualcosa?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Scrivimi su WhatsApp per info, disponibilità o richieste personalizzate.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="https://wa.me/39XXXXXXXXXX" // ← metti qui il tuo numero
            sx={{ fontSize: '1rem', px: 4, py: 1 }}
            target="_blank"
            rel="noopener"
          >
            Contattami su WhatsApp
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Creazioni;
