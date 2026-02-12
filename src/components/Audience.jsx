import { Container, Box, Typography, Grid } from '@mui/material';
import { Briefcase, Building2, Trophy, Users } from 'lucide-react';

const audiences = [
  {
    icon: Briefcase,
    title: 'Event Organizers',
    bg: '#708090', 
    iconColor: '#90A0B0'
  },
  {
    icon: Building2,
    title: 'Venues',
    bg: '#708090', 
    iconColor: '#90A0B0'
  },
  {
    icon: Trophy,
    title: 'Sports & Ent',
    bg: '#708090', 
    iconColor: '#90A0B0'
  },
  {
    icon: Users,
    title: 'Communities',
    bg: '#708090', 
    iconColor: '#90A0B0'
  }
];

export default function Audience() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#FAFAFA' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#0F172A'
            }}
          >
            Who Alltix is for
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ fontSize: '1.1rem' }}
          >
            Optimized for high-impact, professional organizations.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    height: 220,
                    width: 220,
                    maxWidth: 280,
                    borderRadius: 12,
                    bgcolor: item.bg,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: '#E5E7EB', 
                      color: '#1F2937'
                    }
                  }}
                >
                  {/* Icon in background/center */}
                  <Icon 
                    size={64} 
                    color={item.iconColor} 
                    style={{ opacity: 0.5 }}
                  />

                  {/* Text Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 4,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3"
                      sx={{ 
                        color: 'white',
                        fontWeight: 700,
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}