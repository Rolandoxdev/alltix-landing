import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import Button from './atoms/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';

/**
 * ButtonShowcase - Visual documentation of the Button component
 * Useful for development and testing variants
 */
const ButtonShowcase = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#FAFAFA' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Button Component - Atomic Design
        </Typography>

        {/* Primary Buttons */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Primary Buttons
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
            <Button variant="primary" size="small">
              Small Button
            </Button>
            <Button variant="primary" size="medium">
              Medium Button
            </Button>
            <Button variant="primary" size="large">
              Large Button
            </Button>
            <Button variant="primary" size="medium" disabled>
              Disabled
            </Button>
            <Button variant="primary" size="medium" loading>
              Loading
            </Button>
            <Button 
              variant="primary" 
              size="medium" 
              endIcon={<ArrowForwardIcon />}
            >
              With Icon
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Secondary Buttons */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Secondary Buttons (Outlined)
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
            <Button variant="secondary" size="small">
              Small Button
            </Button>
            <Button variant="secondary" size="medium">
              Medium Button
            </Button>
            <Button variant="secondary" size="large">
              Large Button
            </Button>
            <Button variant="secondary" size="medium" disabled>
              Disabled
            </Button>
            <Button variant="secondary" size="medium" loading>
              Loading
            </Button>
            <Button 
              variant="secondary" 
              size="medium" 
              startIcon={<DownloadIcon />}
            >
              With Icon
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Text Buttons */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Text Buttons
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
            <Button variant="text" size="small">
              Small Button
            </Button>
            <Button variant="text" size="medium">
              Medium Button
            </Button>
            <Button variant="text" size="large">
              Large Button
            </Button>
            <Button variant="text" size="medium" disabled>
              Disabled
            </Button>
            <Button variant="text" size="medium" loading>
              Loading
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Full Width */}
        <Box sx={{ mb: 6, maxWidth: 400 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Full Width Buttons
          </Typography>
          <Stack spacing={2}>
            <Button variant="primary" fullWidth>
              Primary Full Width
            </Button>
            <Button variant="secondary" fullWidth>
              Secondary Full Width
            </Button>
          </Stack>
        </Box>

        {/* Code Example */}
        <Box sx={{ mt: 6, p: 3, backgroundColor: '#1A1A1A', borderRadius: 2 }}>
          <Typography 
            variant="body2" 
            component="pre" 
            sx={{ 
              color: '#FFFFFF', 
              fontFamily: 'monospace',
              overflow: 'auto'
            }}
          >
{`// Import the component
import Button from '@/components/atoms/Button';

// Basic usage
<Button variant="primary" size="medium">
  Get Early Access
</Button>

// Con loading state
<Button variant="primary" loading>
  Processing...
</Button>

// Con icono
<Button 
  variant="secondary" 
  endIcon={<ArrowForwardIcon />}
>
  Learn More
</Button>`}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ButtonShowcase;
