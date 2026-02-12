import { Container, Box, Typography, Link } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer"
      sx={{ 
        py: 4,
        backgroundColor: '#F5F5F5',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography 
            variant="body2" 
            color="text.secondary"
          >
            © {currentYear} Alltix. All rights reserved.
          </Typography>

          <Link 
            href="mailto:hello@alltix.co"
            color="text.secondary"
            sx={{ 
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.main',
                textDecoration: 'underline'
              }
            }}
          >
            hello@alltix.co
          </Link>
        </Box>
      </Container>
    </Box>
  );
}