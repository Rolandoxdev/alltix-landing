import { Button as MuiButton, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Button Component - Atomic Design System
 * 
 * Variants:
 * - primary: Main orange button (#FF6B00)
 * - secondary: Outlined button
 * - text: Text button without border
 * 
 * Sizes: small, medium, large
 * States: default, hover, active, disabled, loading
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  onClick,
  href,
  type = 'button',
  ...props
}) => {
  const muiVariant = {
    primary: 'contained',
    secondary: 'outlined',
    text: 'text'
  }[variant] || 'contained';

  const customStyles = {
    base: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: '"Inter", sans-serif',
      borderRadius: '20px',
      transition: 'all 0.2s ease-in-out',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      }
    },
    
    primary: {
      backgroundColor: '#FF6B00',
      color: '#FFFFFF',
      border: 'none',
      '&:hover': {
        backgroundColor: '#E56000',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(255, 107, 0, 0.3)',
      },
      '&:active': {
        backgroundColor: '#CC5500',
        transform: 'translateY(0)',
      },
      '&:disabled': {
        backgroundColor: '#FFB580',
        color: '#FFFFFF',
        cursor: 'not-allowed',
      }
    },
    
    secondary: {
      backgroundColor: 'transparent',
      color: '#1A1A1A',
      border: '1px solid #E0E0E0',
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: '#FF6B00',
        color: '#FF6B00',
        transform: 'translateY(-1px)',
      },
      '&:active': {
        backgroundColor: 'rgba(255, 107, 0, 0.04)',
        borderColor: '#E56000',
        color: '#E56000',
        transform: 'translateY(0)',
      },
      '&:disabled': {
        borderColor: '#E0E0E0',
        color: '#BDBDBD',
        cursor: 'not-allowed',
      }
    },
    
    text: {
      backgroundColor: 'transparent',
      color: '#FF6B00',
      border: 'none',
      '&:hover': {
        backgroundColor: 'rgba(255, 107, 0, 0.04)',
        color: '#E56000',
      },
      '&:active': {
        backgroundColor: 'rgba(255, 107, 0, 0.08)',
      },
      '&:disabled': {
        color: '#BDBDBD',
        cursor: 'not-allowed',
      }
    }
  };

  const sizeStyles = {
    small: {
      fontSize: '0.875rem',
      padding: '8px 16px',
      minHeight: '36px',
    },
    medium: {
      fontSize: '1rem',
      padding: '12px 24px',
      minHeight: '44px',
    },
    large: {
      fontSize: '1.125rem',
      padding: '14px 32px',
      minHeight: '52px',
    }
  };

  return (
    <MuiButton
      variant={muiVariant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      startIcon={loading ? null : startIcon}
      endIcon={loading ? null : endIcon}
      onClick={onClick}
      href={href}
      type={type}
      sx={{
        ...customStyles.base,
        ...customStyles[variant],
        ...sizeStyles[size],
      }}
      {...props}
    >
      {loading ? (
        <>
          <CircularProgress 
            size={20} 
            sx={{ 
              color: variant === 'primary' ? '#FFFFFF' : '#FF6B00',
              mr: 1 
            }} 
          />
          {children}
        </>
      ) : (
        children
      )}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
