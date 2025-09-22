// src/components/GalleryModal.tsx
import React from 'react';
import {
    Dialog,
    DialogContent,
    IconButton,
    Typography,
    Box,
    GlobalStyles
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface GalleryItem {
    image: string;
    description: string;
    price: string;
    color: string;
}

interface GalleryModalProps {
    open: boolean;
    items: GalleryItem[];
    onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ open, items, onClose }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <GlobalStyles
                styles={{
                    body: {
                        overflow: open ? 'hidden' : 'auto',
                    },
                    '.slick-dots': {
                        marginBottom: '24px',
                    },
                }}
            />
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        zIndex: 1,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent sx={{
                    pt: 4,
                    pb: 6,
                    overflow: 'hidden',
                    minHeight: { xs: '400px', sm: '500px' },
                }}>
                    <Slider {...{ ...settings, adaptiveHeight: false }}>
                        {items.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    px: 2,
                                    py: 4,
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={`${import.meta.env.BASE_URL}${item.image}`}
                                    alt={item.description}
                                    sx={{
                                        width: '90%',  // Adatta l'immagine alla larghezza del contenitore
                                        maxWidth: '300px',  // Limita la larghezza massima a 300px
                                        height: 'auto',  // Mantieni le proporzioni originali dell'immagine
                                        borderRadius: '8px',
                                        mb: 3,
                                        mt: 3,
                                        mx: 'auto'
                                    }}
                                />

                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    {item.description}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 1 }}>
                                    Prezzo: <strong>{item.price}</strong>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Colore: {item.color}
                                </Typography>
                            </Box>
                        ))}
                    </Slider>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default GalleryModal;