// src/pages/Creazioni.tsx
import React, { useState } from 'react';
import { Title, Meta } from 'react-head';
import { Container, Box, Typography, Button } from '@mui/material';
import Hero from '../components/Hero';
import SectionIntro from '../components/SectionIntro';
import CreationCard from '../components/CreationCard';
import GalleryModal, { type GalleryItem } from '../components/GalleryModal';

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

// Galleria con immagini + dettagli per ogni categoria
const galleryItems: Record<string, GalleryItem[]> = {
  'Cappelli in Lana': [
    {
      image: '/creazioni/cappelli.webp',
      description: 'Cappello a coste larghe',
      price: '€25',
      color: 'Rosso Bordeaux',
    },
    {
      image: '/creazioni/cappelli.webp',
      description: 'Cappello a maglia fine',
      price: '€20',
      color: 'Blu Navy',
    },
  ],
  'Sciarpe e Scaldacollo': [
    {
      image: '/creazioni/sciarpe.webp',
      description: 'Sciarpa in lana merino',
      price: '€30',
      color: 'Grigio chiaro',
    },
    {
      image: '/creazioni/sciarpe.webp',
      description: 'Sciarpa in lana',
      price: '€20',
      color: 'Bianco',
    },
  ],
  'Borse all’uncinetto': [
    {
      image: '/creazioni/borse.webp',
      description: 'Borsa a tracolla stile boho',
      price: '€35',
      color: 'Beige e verde oliva',
    },
  ],
  'Decorazioni per la casa': [
    {
      image: '/creazioni/decorazioni.webp',
      description: 'Centrotavola floreale a uncinetto',
      price: '€15',
      color: 'Colori assortiti',
    },
  ],
  'Regali personalizzati': [
    {
      image: '/creazioni/regali.webp',
      description: 'Portachiavi a forma di cuore',
      price: '€8',
      color: 'Rosa pastello',
    },
  ],
};

const Creazioni: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleOpenGallery = (title: string) => {
    setSelectedCategory(title);
  };

  const handleCloseGallery = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <Title>Le Mie Creazioni - La Bancarella di Fiorella</Title>
      <Meta
        name="description"
        content="Scopri le creazioni fatte a mano: cappelli, borse, sciarpe, decorazioni e regali unici. Tutto realizzato con passione."
      />

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

      {/* Card elenco */}
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
                <CreationCard
                  {...creazione}
                  onClick={() => handleOpenGallery(creazione.title)}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ mt: 8, py: 6, textAlign: 'center', backgroundColor: 'grey.100' }}>
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
            href="https://wa.me/39XXXXXXXXXX"
            sx={{ fontSize: '1rem', px: 4, py: 1 }}
            target="_blank"
            rel="noopener"
          >
            Contattami su WhatsApp
          </Button>
        </Container>
      </Box>

      {/* Modale galleria */}
      {selectedCategory && (
        <GalleryModal
          open={true}
          items={galleryItems[selectedCategory] || []}
          onClose={handleCloseGallery}
        />
      )}
    </>
  );
};

export default Creazioni;
