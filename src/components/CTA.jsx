import { Container, Box, Typography } from '@mui/material';
import Button from './atoms/Button';

export default function CTA() {
  return (
    <Box 
      sx={{ 
        py: 12,
        background: 'linear-gradient(135deg, #FF6B00 0%, #E56000 100%)',
        color: 'white'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 3, color: 'white' }}
          >
            Ready to explore a better way to sell tickets?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ mb: 4, opacity: 0.95, lineHeight: 1.6, color: 'white' }}
          >
            Join us in reimagining what seat-based ticketing can be
          </Typography>

          <Button 
            variant="primary"
            size="large"
            href="#early-access"
            sx={{ 
              backgroundColor: 'white',
              color: '#FF6B00',
              '&:hover': {
                backgroundColor: '#F5F5F5',
                color: '#E56000',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              },
              '&:active': {
                backgroundColor: '#EEEEEE',
              }
            }}
          >
            Request early access
          </Button>
        </Box>
      </Container>
    </Box>
  );
}