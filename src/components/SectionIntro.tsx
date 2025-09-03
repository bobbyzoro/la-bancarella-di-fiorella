import { Box, Container, Typography } from '@mui/material';

interface SectionIntroProps {
  title?: string;
  text: string;
  maxWidth?: 'sm' | 'md' | 'lg';
  bgColor?: string; // opzionale, per sfondi diversi
}

const SectionIntro: React.FC<SectionIntroProps> = ({
  title,
  text,
  maxWidth = 'md',
  bgColor = 'transparent',
}) => (
  <Box sx={{ backgroundColor: bgColor, py: { xs: 4, md: 6 } }}>
    <Container maxWidth={maxWidth}>
      <Box textAlign="center">
        {title && (
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        )}
        <Typography
          variant="h6"
          component="p"
          color="textSecondary"
          sx={{ lineHeight: 1.8 }}
        >
          {text}
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default SectionIntro;
