import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const problems = [
  {
    title: 'Rigid ticketing systems',
    description: 'Legacy platforms force you to work within their constraints, limiting customization and control over your event experience.'
  },
  {
    title: 'Poor seat selection experience',
    description: 'Attendees struggle with unclear maps, confusing interfaces, and limited visibility into available seating options.'
  },
  {
    title: 'Difficult group and section management',
    description: 'Managing group sales, reserved sections, and affinity seating becomes a logistical nightmare with most platforms.'
  },
  {
    title: 'Limited visibility into event data',
    description: 'Without clear insights into sales patterns and seating distribution, making informed decisions is challenging.'
  }
];

export default function Problem() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#F5F5F5' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            The challenges event organizers face
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto' }}
          >
            Traditional ticketing platforms weren't built for complex, seat-based events at scale
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {problems.map((problem, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                elevation={2}
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <ErrorOutlineIcon 
                    sx={{ 
                      fontSize: 48, 
                      color: '#FF6B00', 
                      mb: 2 
                    }} 
                  />
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 1.5 }}
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}