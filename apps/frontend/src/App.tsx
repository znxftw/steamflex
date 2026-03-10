import React, { useState } from 'react';
import { Box } from '@mui/material';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import PreviewBanner from './components/PreviewBanner';
import Footer from './components/Footer';

function App() {
  const [url, setUrl] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      setGenerated(true);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, md: 4 },
          width: '100%',
          maxWidth: 900,
          mx: 'auto',
        }}
      >
        <Hero />
        <SearchForm url={url} setUrl={setUrl} onSubmit={handleGenerate} />
        {generated && <PreviewBanner />}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
