import { Container, Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { Settings, X, RefreshCw, BarChart3, Rocket } from 'lucide-react';

const problems = [
  {
    icon: Settings,
    title: 'Rigid Systems',
    description: 'Hard-coded seating charts that take weeks to modify or update for new tours.'
  },
  {
    icon: X,
    title: 'Poor Seat Choice',
    description: 'Frustrating interfaces that make selecting a specific seat feel like a chore.'
  },
  {
    icon: RefreshCw,
    title: 'Sync Delays',
    description: 'Double bookings and lag times during high-traffic on-sale moments.'
  },
  {
    icon: BarChart3,
    title: 'Blind Spots',
    description: 'Lack of real-time data on attendee movement and seating density.'
  }
];

export default function Problem() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#FAFAFA' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip 
            icon={
              <Rocket 
                size={16} 
                style={{ color: '#0369A1' }} 
              />
            }
            label="THE CHALLENGE"
            sx={{
              backgroundColor: '#E0F2FE',
              color: '#0369A1',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              height: '28px',
              mb: 3,
              border: 'none',
              '& .MuiChip-label': {
                px: 1.5
              },
              '& .MuiChip-icon': {
                ml: 1.5
              }
            }}
          />
          <Typography 
            variant="h3" 
            component="h3" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Why traditional ticketing fails
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400 }}
          >
            Most ticketing platforms weren't built for the modern venue scale.
            {/* Most ticketing platforms weren't built for complex, seat-based events at scale. */}
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            gap: 3, 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index}
                elevation={0}
                sx={{ 
                  flex: { 
                    xs: '1 1 100%',      // Mobile: full width
                    sm: '1 1 calc(50% - 12px)',  // Tablet: 2 columns
                    md: '1 1 calc(25% - 18px)'   // Desktop: 4 columns
                  },
                  minWidth: { xs: '90%', sm: '280px', md: '240px' },
                  maxWidth: { xs: '90%', sm: '400px', md: '300px' },
                  backgroundColor: '#FFFFFF',
                  border: '1px solid',
                  borderColor: '#E0E0E0',
                  borderRadius: '16px',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    borderColor: '#FF6B00'
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Icon 
                    size={48}
                    color="#FF6B00"
                    strokeWidth={1.5}
                    style={{ marginBottom: '16px' }}
                  />
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 1.5, color: '#1A1A1A' }}
                  >
                    {problem.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {problem.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
