import { Container, Box, Typography, Stack, Chip } from '@mui/material';
import { CircleCheck } from 'lucide-react';
import alltixSolution from '../assets/alltixSolution.png';

const solutionPoints = [
  'Dynamic seating reconfigurations in real-time',
  'Enterprise-grade security and fraud protection',
  'Group-friendly seating logic',
  'Organizer-first controls'
];

export default function Solution() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FAFAFA' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center'
          }}
        >
          {/* Left Column - Content */}
          <Box sx={{ flex: 1 }}>
                    <Chip 
            icon={
              <CircleCheck
                size={16} 
                style={{ color: '#059669' }} 
              />
            }
            label="THE SOLUTION"
            sx={{
              backgroundColor: '#D1FAE5',
              color: '#059669',
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
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Engineered for{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  2,000 to 50,000+
                </Box>{' '}
                attendees
              </Typography>
              
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.7, fontSize: '1.05rem' }}
              >
                Alltix provides the infrastructure to handle massive peaks in traffic. 
                Whether it's a stadium concert or a multi-day conference, our 
                platform adapts to your venue's unique layout and requirements.
              </Typography>

              <Stack spacing={2.5}>
                {solutionPoints.map((point, index) => (
                  <Box 
                    key={index} 
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <CircleCheck 
                      size={24} 
                      style={{ 
                        color: '#10B981', 
                        flexShrink: 0 
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: '1rem',
                        color: 'text.primary'
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>
          </Box>

          {/* Right Column - Image */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={alltixSolution}
              alt="Large scale event venue"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 8,
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}