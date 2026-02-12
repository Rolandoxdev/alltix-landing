import { Container, Box, Typography, Stack, Chip } from '@mui/material';
import Button from './atoms/Button';

export default function Hero() {
  return (
    <Box 
      sx={{ 
        width: '100%',
        minHeight: '90vh',
        background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip 
            label="WELLCOME TO ALLTIX"
            sx={{
              backgroundColor: '#FFF0E6',
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              height: '28px',
              mb: 3,
              border: 'none',
              '& .MuiChip-label': {
                px: 2
              }
            }}
          />

          {/* Main Headline */}
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{
              fontWeight: 700,
              fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem' },
              //textAlign: { xs: 'left', md: 'center', lg: 'center' },
              lineHeight: 1.1,
              mb: 3,
              maxWidth: '900px',
              mx: 'auto',
              color: '#1A1A1A'
            }}
          >
            Smart ticketing for{' '}
            <Box 
              component="span" 
              sx={{ color: '#FF6B00' }}
            >
              large-scale events
            </Box>
          </Typography>
          
          {/* Subtitle */}
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            Effortlessly sell tickets and manage seating for venues of any size.
            Give attendees the freedom to choose where they sit. 
          </Typography>

          {/* CTA Buttons */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            justifyContent="center"
            sx={{ mb: 6 }}
          >
            <Button 
              variant="primary" 
              size="medium"
              href="#early-access"
            >
              Get Early Access
            </Button>
            <Button 
              variant="secondary" 
              size="medium"
              href="#features"
            >
              View Features
            </Button>
          </Stack>

          {/* Hero Image */}
          <Box
            sx={{
              maxWidth: '1000px',
              mx: 'auto',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              mt: 6
            }}
          >
            <Box
              component="img"
              src="https://dummyimage.com/1200x600/B0BEC5/ffffff&text=Large+Scale+Event+Photo"
              alt="Large scale event venue"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
