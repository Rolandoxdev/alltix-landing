import { Container, Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { MapPin, Ticket, QrCode, Bell, Smartphone } from 'lucide-react';
import appScreen from '../assets/alltixAppScreen.png';

const leftFeatures = [
  {
    icon: MapPin,
    iconColor: '#059669', 
    iconBg: '#D1FAE5',
    title: 'Interactive seat selection',
    description: 'High fidelity, interactive maps allow buyers to see exactly what their view will look like before they buy. '
  },
  {
    icon: Ticket,
    iconColor: '#059669', 
    iconBg: '#D1FAE5',
    title: 'Built for Scalability',
    description: 'Infrastructure designed to handle the demands of high-traffic, large-scale events without a hitch.'
  }
];

const rightFeatures = [
  {
    icon: QrCode,
    iconColor: '#059669',
    iconBg: '#D1FAE5',
    title: 'Group & Affinity Seating',
    description: 'Friends, families, or communities can easily sit together.'
  },
  {
    icon: Bell,
    iconColor: '#059669',
    iconBg: '#D1FAE5',
    title: 'Organizer Control',
    description: 'Manage sections, pricing, availability, and event structure from one place.'
  }
];

export default function Features() {
  return (
    <Box id="features" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            icon={
              <Smartphone 
                size={16} 
                style={{ color: '#3B82F6' }} 
              />
            }
            label="POWERFUL FEATURES"
            sx={{
              backgroundColor: '#DBEAFE',
              color: '#3B82F6',
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
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Smart Features for Effortless Event Ticketing
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto',
              fontSize: '1.05rem',
              lineHeight: 1.7
            }}
          >
            Everything you need to manage elite-tier events logistics.
          </Typography>
        </Box>

        {/* Three Column Layout */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'center'
          }}
        >
          {/* Left Column - 2 Cards */}
          <Box 
            sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  elevation={0}
                  sx={{ 
                    backgroundColor: '#FAFAFA',
                    border: '1px solid #E5E7EB',
                    borderRadius: 4,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      borderColor: '#D1D5DB'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        backgroundColor: feature.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2
                      }}
                    >
                      <Icon size={28} style={{ color: feature.iconColor }} />
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {feature.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          {/* Center Column - Phone Mockup */}
          <Box 
            sx={{ 
              flex: '0 0 auto',
              width: { xs: '100%', md: '320px' }
            }}
          >
          <img
            src={appScreen}
            alt="App Screen"
            style={{ width: '100%', height: 'auto', borderRadius: 40, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
          />
            {/* <Box
              component="img"
              src="https://dummyimage.com/400x800/1F2937/ffffff&text=Phone+Mockup"
              alt="Mobile app preview"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 3,
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
              }}
            />
           */}
           </Box>

          {/* Right Column - 2 Cards */}
          <Box 
            sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  elevation={0}
                  sx={{ 
                    backgroundColor: '#FAFAFA',
                    border: '1px solid #E5E7EB',
                    borderRadius: 4,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      borderColor: '#D1D5DB'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        backgroundColor: feature.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2
                      }}
                    >
                      <Icon size={28} style={{ color: feature.iconColor }} />
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {feature.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}