import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ px: { xs: 2, sm: 3, md: 6 }, py: 3, flexDirection: 'row', justifyContent: 'flex-end' }}>
      <Toolbar sx={{ justifyContent: 'flex-end', gap: 2, p: '0 !important', minHeight: 'auto !important' }}>
        <Button
          component="a"
          href="https://github.com/znxftw/steamflex/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            color: '#a1a1aa', 
            fontWeight: 500, 
            fontSize: '0.95rem',
            textTransform: 'lowercase',
            '&:hover': { color: '#f8f9fa', background: 'transparent' }
          }}
        >
          submit a bug
        </Button>
        <Button
          component="a"
          href="https://ko-fi.com/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#f8f9fa',
            px: 2.5,
            py: 1,
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: '0.9rem',
            textTransform: 'lowercase',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              transform: 'translateY(-1px)'
            }
          }}
        >
          support the site
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
