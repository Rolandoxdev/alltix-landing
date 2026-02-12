import { Container, Box, Typography, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export default function EarlyAccess() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#F5F5F5' }} id="early-access">
      <Container maxWidth="md">
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            border: '2px solid',
            borderColor: '#FF6B00',
            borderRadius: 2
          }}
        >
          <InfoIcon 
            sx={{ 
              fontSize: 56, 
              color: 'primary.main', 
              mb: 2 
            }} 
          />
          
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Currently in early access
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.7 }}
          >
            We're currently working with a select group of event organizers and venues 
            to refine the platform and ensure it meets the real-world needs of large-scale 
            seat-based events.
          </Typography>

          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            If you're interested in learning more or exploring how Alltix could work for 
            your events, we'd love to hear from you.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
