import React from 'react';

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
