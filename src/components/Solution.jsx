import { Container, Box, Typography, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const solutionPoints = [
  'Flexible platform that adapts to your event needs',
  'Scales from 2,000 to 50,000+ attendees seamlessly',
  'Organizer-first design with full control',
  'Modern interface built for today\'s expectations'
];

export default function Solution() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Built for flexibility and scale
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ mb: 4, lineHeight: 1.7 }}
          >
            Alltix is designed from the ground up for event organizers who need a 
            modern, scalable platform that puts them in control. Whether you're running 
            a theater production or a stadium-scale concert, we provide the tools and 
            flexibility to deliver an exceptional ticketing experience.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {solutionPoints.map((point, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon 
                  sx={{ 
                    color: 'success.main', 
                    mr: 2,
                    fontSize: 28
                  }} 
                />
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                  {point}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}