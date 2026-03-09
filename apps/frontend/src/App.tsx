import React, { useState } from 'react';
import './index.css';

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
      <header className="header">
        <nav className="nav-links">
          <a
            href="https://github.com/znxftw/steamflex/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            submit a bug
          </a>
          <a
            href="https://ko-fi.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-support"
          >
            support the site
          </a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">steamflex</h1>
          <p className="hero-subtitle">flex your steam stats with an embeddable banner.</p>
        </section>

        <div className="search-container">
          <form className="search-form" onSubmit={handleGenerate}>
            <input
              type="text"
              className="search-input"
              placeholder="enter your steam profile url..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button type="submit" className="btn-generate">
              generate
            </button>
          </form>
        </div>

        {generated && (
          <section className="preview-section">
            <div className="svg-container">
              {/* Placeholder SVG */}
              <svg
                width="600"
                height="200"
                viewBox="0 0 600 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1b2838" />
                    <stop offset="100%" stopColor="#2a475e" />
                  </linearGradient>
                  <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#66c0f4" />
                    <stop offset="100%" stopColor="#1999ff" />
                  </linearGradient>

                  {/* Avatar clip */}
                  <clipPath id="avatarClip">
                    <rect x="25" y="25" width="100" height="100" rx="12" />
                  </clipPath>

                  {/* Stats background glow */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Main Background Card */}
                <rect width="600" height="200" rx="16" fill="url(#bg)" />
                <rect
                  width="600"
                  height="200"
                  rx="16"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />

                {/* Border Accent */}
                <path
                  d="M 0 16 Q 0 0 16 0 L 16 0 L 16 200 L 16 200 Q 0 200 0 184 Z"
                  fill="url(#accent)"
                />

                {/* Avatar Placeholder */}
                <g clipPath="url(#avatarClip)">
                  <rect x="25" y="25" width="100" height="100" fill="#0b0e14" />
                  <rect x="45" y="45" width="60" height="60" fill="#1b2838" rx="8" />
                  <circle cx="75" cy="65" r="12" fill="#2a475e" />
                  <path d="M 50 95 C 50 80, 100 80, 100 95 L 100 105 L 50 105 Z" fill="#2a475e" />
                </g>
                <rect
                  x="25"
                  y="25"
                  width="100"
                  height="100"
                  rx="12"
                  fill="none"
                  stroke="url(#accent)"
                  strokeWidth="4"
                />

                {/* Level Badge */}
                <circle cx="110" cy="110" r="16" fill="#1b2838" stroke="#66c0f4" strokeWidth="2" />
                <text
                  x="110"
                  y="115"
                  fill="#fff"
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="system-ui, sans-serif"
                  textAnchor="middle"
                >
                  99
                </text>

                {/* User Info */}
                <text
                  x="145"
                  y="55"
                  fill="#fff"
                  fontSize="28"
                  fontWeight="bold"
                  fontFamily="system-ui, sans-serif"
                >
                  playername
                </text>
                <text
                  x="145"
                  y="80"
                  fill="#8f98a0"
                  fontSize="14"
                  fontFamily="system-ui, sans-serif"
                >
                  playing <tspan fill="#66c0f4">counter-strike 2</tspan>
                </text>

                {/* Separator Line */}
                <line
                  x1="145"
                  y1="100"
                  x2="560"
                  y2="100"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />

                {/* Stats Section */}
                <g transform="translate(145, 120)">
                  {/* Games Owned */}
                  <rect x="0" y="0" width="130" height="55" rx="8" fill="rgba(0,0,0,0.2)" />
                  <text
                    x="65"
                    y="25"
                    fill="#8f98a0"
                    fontSize="12"
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="bold"
                    letterSpacing="1"
                  >
                    games
                  </text>
                  <text
                    x="65"
                    y="45"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                  >
                    1,204
                  </text>

                  {/* Playtime */}
                  <rect x="140" y="0" width="130" height="55" rx="8" fill="rgba(0,0,0,0.2)" />
                  <text
                    x="205"
                    y="25"
                    fill="#8f98a0"
                    fontSize="12"
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="bold"
                    letterSpacing="1"
                  >
                    playtime
                  </text>
                  <text
                    x="205"
                    y="45"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                  >
                    4.5K{' '}
                    <tspan fontSize="12" fill="#8f98a0">
                      hrs
                    </tspan>
                  </text>

                  {/* Achievements */}
                  <rect x="280" y="0" width="135" height="55" rx="8" fill="rgba(0,0,0,0.2)" />
                  <text
                    x="347"
                    y="25"
                    fill="#8f98a0"
                    fontSize="12"
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="bold"
                    letterSpacing="1"
                  >
                    achieved
                  </text>
                  <text
                    x="347"
                    y="45"
                    fill="#fff"
                    fontSize="20"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                  >
                    12,408
                  </text>
                </g>
              </svg>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">&copy; vishnu bhagyanath 2026. all rights reserved.</footer>
    </>
  );
}

export default App;
