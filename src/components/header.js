import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About Us</Link>
        <Link to="/download" style={styles.navLink}>Download</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: '#222',
    padding: '1rem 2rem',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    color: '#00bcd4',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Header;
