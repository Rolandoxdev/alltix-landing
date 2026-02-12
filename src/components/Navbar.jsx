import { AppBar, Toolbar, Container, Box } from '@mui/material';
import Button from './atoms/Button';
import logoAlltix from '../assets/logoAlltix.svg';
import { LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid',
        borderColor: '#E0E0E0'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5 }}>
          <Box 
            component="a"
            href="/"
            sx={{ 
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <img 
              src={logoAlltix} 
              alt="Alltix" 
              style={{ height: '32px' }} 
            />
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="secondary"
            startIcon={<LogIn />}
            size="small"
            href="https://app.alltix.co/auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
