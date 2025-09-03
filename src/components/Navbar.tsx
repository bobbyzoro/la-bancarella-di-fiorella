// src/components/Navbar.tsx
import React from 'react';
import {
  AppBar, Toolbar, Container, Typography, Button,
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

// Percorso delle voci del menu
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Chi Sono', path: '/chi-sono' },
  { label: 'Creazioni', path: '/creazioni' },
  { label: 'Eventi', path: '/eventi' },
  { label: 'Contatti', path: '/contatti' },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo e Nome */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={`${import.meta.env.BASE_URL}favicon.svg`}  // Cambia questo percorso con quello giusto del tuo logo
              alt="Logo La Bancarella di Fiorella"
              style={{ width: 80, height: 80, marginRight: 8 }} // Imposta la dimensione del logo e lo spazio tra logo e testo
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              La Bancarella di Fiorella
            </Typography>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                component={NavLink}
                to={path}
                sx={{
                  color: 'text.primary',
                  fontWeight: 'bold',
                  '&.active': { color: 'primary.main' },
                  ml: 2,
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)', // Aumenta la dimensione del link
                    color: 'secondary.main', // Cambia colore al passaggio del mouse
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu icon */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={toggleDrawer(true)} edge="end" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer menu for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navItems.map(({ label, path }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={path}
                  sx={{
                    '&.active > .MuiListItemText-root > span': {
                      color: 'primary.main',
                      fontWeight: 'bold',
                    },
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'primary.light', // Cambia sfondo su hover
                    },
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
