// src/pages/Contatti.tsx
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import SectionIntro from '../components/SectionIntro';
import Hero from '../components/Hero';
import { Meta, Title } from 'react-head';

const Contatti = () => {
  return (
    <>
      <Title>Contatti - La Bancarella di Fiorella</Title>
      <Meta
        name="description"
        content="Contattami per ordini personalizzati, richieste o semplicemente per avere informazioni. Scrivimi su WhatsApp o via email!"
      />

      {/* Hero */}
      <Hero
        imageUrl="/hero.webp"
        title="Contattami"
        description="Ordina un prodotto, richiedi informazioni o semplicemente scrivimi per sapere di più sulle mie creazioni!"
      />

      {/* Intro */}
      <SectionIntro
        text="Sono sempre felice di rispondere a domande, ricevere richieste su misura o aiutarti a scegliere il regalo perfetto. Contattami senza impegno!"
      />

      {/* Contatti principali */}
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 3,
          }}
        >
          <Typography variant="h6">Come contattarmi</Typography>

          <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              href="https://wa.me/39XXXXXXXXXX"
              target="_blank"
              rel="noopener"
              sx={{ width: '100%', maxWidth: 300 }}
            >
              Scrivimi su WhatsApp
            </Button>

            <Button
              variant="outlined"
              color="primary"
              href="mailto:creazioni@example.com"
              sx={{ width: '100%', maxWidth: 300 }}
            >
              Inviami una Email
            </Button>

            <Button
              variant="text"
              color="primary"
              href="https://instagram.com/tuo_profilo"
              target="_blank"
              rel="noopener"
              sx={{ width: '100%', maxWidth: 300 }}
            >
              Seguimi su Instagram
            </Button>
          </Stack>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            Preferisci essere contattata/o in un altro modo? Scrivimi e troviamo la soluzione più comoda!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Contatti;
