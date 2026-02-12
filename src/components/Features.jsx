import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import GroupsIcon from '@mui/icons-material/Groups';
import StadiumIcon from '@mui/icons-material/Stadium';
import TuneIcon from '@mui/icons-material/Tune';
import SpeedIcon from '@mui/icons-material/Speed';

const features = [
  {
    icon: EventSeatIcon,
    title: 'Seat Selection Like a Cinema',
    description: 'Give your attendees an intuitive, visual seat selection experience. They can see exactly what\'s available and choose their perfect seats.'
  },
  {
    icon: GroupsIcon,
    title: 'Group & Affinity Seating',
    description: 'Easily manage group bookings, reserved sections, and affinity seating for sponsors, VIPs, or special communities.'
  },
  {
    icon: StadiumIcon,
    title: 'Built for Large Events',
    description: 'Handle events from 2,000 to 50,000+ attendees without breaking a sweat. Our platform scales with your ambitions.'
  },
  {
    icon: TuneIcon,
    title: 'Organizer Control',
    description: 'Full control over pricing, sections, availability, and restrictions. Configure your event exactly the way you need it.'
  },
  {
    icon: SpeedIcon,
    title: 'Fast & Intuitive Experience',
    description: 'Modern, responsive interface that works seamlessly on any device. Your attendees will appreciate the smooth experience.'
  }
];

export default function Features() {
  return (
    <Box id="features" sx={{ py: 10, backgroundColor: '#F5F5F5' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Features that make a difference
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto' }}
          >
            Everything you need to run successful seat-based events
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  elevation={3}
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Icon 
                      sx={{ 
                        fontSize: 56, 
                        color: 'primary.main', 
                        mb: 2 
                      }} 
                    />
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}