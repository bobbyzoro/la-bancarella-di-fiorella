// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';  // Importa AnimatePresence e motion
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Creazioni from './pages/Creazioni';
import Eventi from './pages/Eventi';
import Contatti from './pages/Contatti';
import ChiSono from './pages/ChiSono';

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* AnimatePresence per gestire l'uscita dei componenti */}
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                key="home"
                initial={{ opacity: 0 }}      // Partenza con opacità 0
                animate={{ opacity: 1 }}      // Animazione finale con opacità 1
                exit={{ opacity: 0 }}         // Uscita con opacità 0
                transition={{ duration: 0.5 }} // Durata transizione di 0.5 secondi
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/chi-sono"
            element={
              <motion.div
                key="chiSono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ChiSono />
              </motion.div>
            }
          />
          <Route
            path="/creazioni"
            element={
              <motion.div
                key="creazioni"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Creazioni />
              </motion.div>
            }
          />
          <Route
            path="/eventi"
            element={
              <motion.div
                key="eventi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Eventi />
              </motion.div>
            }
          />
          <Route
            path="/contatti"
            element={
              <motion.div
                key="contatti"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Contatti />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default App;