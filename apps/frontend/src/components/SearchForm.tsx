import React from 'react';
import { Box, TextField, Button } from '@mui/material';

interface SearchFormProps {
  url: string;
  setUrl: (url: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ url, setUrl, onSubmit }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 6 }}>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          gap: { xs: 2, md: 3 },
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: 650,
          mt: 4,
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          p: 1,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(20px)',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          '&:focus-within': {
            borderColor: 'rgba(0, 210, 255, 0.4)',
            boxShadow: '0 0 0 3px rgba(0, 210, 255, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
          }
        }}
      >
        <TextField
          variant="standard"
          placeholder="enter your steam profile url..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          fullWidth
          InputProps={{ disableUnderline: true }}
          sx={{
            flex: 1,
            px: { xs: 2, md: 3 },
            py: { xs: 1, md: 2 },
            '& input': {
              fontSize: '1.1rem',
              color: '#f8f9fa',
              '&::placeholder': {
                color: 'rgba(161, 161, 170, 0.6)',
                opacity: 1,
              }
            }
          }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ 
            height: '56px', 
            px: 4, 
            borderRadius: 3,
            background: 'linear-gradient(135deg, #3a8df5 0%, #00d2ff 100%)',
            color: '#fff',
            fontWeight: 700,
            textTransform: 'lowercase',
            transition: 'all 0.2s ease',
            boxShadow: 'none',
            '&:hover': {
              background: 'linear-gradient(135deg, #2b77d6 0%, #00b4db 100%)',
              transform: 'scale(1.02)',
              boxShadow: 'none'
            },
            '&:active': {
              transform: 'scale(0.98)'
            }
          }}
        >
          generate
        </Button>
      </Box>
    </Box>
  );
};

export default SearchForm;
