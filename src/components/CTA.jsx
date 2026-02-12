import { Container, Box, Typography } from '@mui/material';
import { Mail } from 'lucide-react';
import Button from './atoms/Button';

export default function CTA() {
  return (
    <Box 
      sx={{ 
        py: 12,
        background: '#fff0',
        color: 'white'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
          >
                      Ready to explore{' '}
            <Box 
              component="span" 
              sx={{ color: '#FF6B00' }}
            >
              a better way
            </Box>
             {' '}to sell tickets?
          </Typography>
          
          <Button 
            variant="primary"
            size="large"
            startIcon={<Mail size={20} />}
            href="mailto:hello@alltix.co"
          >
            Get in touch 
          </Button>
        </Box>
      </Container>
    </Box>
  );
}