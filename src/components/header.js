// components/header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" className="myComicHeader" style={styles.navLink}>
          Home
        </Link>
        <Link to="/about" className="myComicHeader" style={styles.navLink}>
          About Us
        </Link>
        <Link to="/download" className="myComicHeader" style={styles.navLink}>
          Download
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: '#ffec00',
    padding: '1rem 2rem',
    borderBottom: '8px solid #000',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
  },
  // Optionally you can remove font styling here since the class handles it.
  navLink: {
    // You may adjust fontSize here if you want smaller nav titles.
    fontSize: '1.8rem',
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export default Header;
