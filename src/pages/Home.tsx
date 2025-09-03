import React from 'react';
import { Title, Meta } from 'react-head';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import SectionIntro from '../components/SectionIntro';

const Home: React.FC = () => {
  return (
    <>
      <Title>Home - La Bancarella di Fiorella</Title>
      <Meta
        name="description"
        content="Creazioni artigianali a maglia e uncinetto fatte a mano con amore. Scopri i lavori, gli eventi e come contattarmi per ordini personalizzati."
      />

      <Hero
        imageUrl="/hero.webp"
        title="Creazioni fatte a mano con amore"
        description="Scopri capi unici realizzati a maglia e uncinetto. Ogni pezzo è frutto di passione e creatività."
        buttonText="Guarda le creazioni"
        buttonLink="/creazioni"
      />

      <SectionIntro
        text="Benvenuti nel mio spazio creativo! Ogni articolo è fatto a mano con cura, utilizzando materiali di qualità. Dal regalo originale all’accessorio per la casa, ogni creazione ha una storia da raccontare."
      />

      <ContentSection
        imageUrl="/home/creazioni.webp"
        title="Creazioni artigianali"
        description="Scopri una selezione di prodotti fatti a mano: sciarpe, cappelli, borse, decorazioni e molto altro. Tutto personalizzabile!"
        ctaLabel="Esplora la Gallery"
        ctaUrl="/creazioni"
        imgPosition="right"
      />

      <ContentSection
        imageUrl="/home/eventi.webp"
        title="Prossime bancarelle"
        description="Vuoi toccare con mano le mie creazioni? Vieni a trovarmi nei mercatini e fiere artigianali dove partecipo!"
        ctaLabel="Scopri Dove"
        ctaUrl="/eventi"
        imgPosition="left"
      />

      <ContentSection
        imageUrl="/home/contatti.webp"
        title="Contattami per ordini"
        description="Scrivimi su WhatsApp per chiedere informazioni, prezzi o commissionare una creazione su misura. Risponderò con piacere!"
        ctaLabel="Scrivimi su WhatsApp"
        ctaUrl="https://wa.me/39XXXXXXXXXX"
        imgPosition="right"
      />
    </>
  );
};

export default Home;
