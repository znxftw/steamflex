import React, { useState } from 'react';
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
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <SearchForm url={url} setUrl={setUrl} onSubmit={handleGenerate} />
        {generated && <PreviewBanner />}
      </main>
      <Footer />
    </>
  );
}

export default App;
