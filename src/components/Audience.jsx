import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SportsIcon from '@mui/icons-material/Sports';
import FestivalIcon from '@mui/icons-material/Festival';

const audiences = [
  {
    icon: BusinessIcon,
    title: 'Event organizers',
    description: 'Professional organizers managing complex, multi-day events'
  },
  {
    icon: TheaterComedyIcon,
    title: 'Venues & theaters',
    description: 'Performing arts venues, concert halls, and theaters'
  },
  {
    icon: SportsIcon,
    title: 'Sports & live entertainment',
    description: 'Sports venues, arenas, and live entertainment facilities'
  },
  {
    icon: FestivalIcon,
    title: 'Large community events',
    description: 'Cultural festivals, conferences, and community gatherings'
  }
];

export default function Audience() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Who we serve
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto' }}
          >
            Alltix is built for organizations running seat-based events at scale
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3,
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    height: '100%',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: 2
                    }
                  }}
                >
                  <Icon 
                    sx={{ 
                      fontSize: 48, 
                      color: 'primary.main', 
                      mb: 2 
                    }} 
                  />
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {audience.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {audience.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}