// components/herosection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import cityLightningGif from '../assets/rain.gif';

function HeroSection() {
  const navigate = useNavigate();

  const handleDownload = (e) => {
    e.preventDefault();
    const tempLink = document.createElement('a');
    tempLink.href = '/canquestv2.zip';
    tempLink.download = 'canquestv2.zip';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    navigate('/download');
  };

  return (
    <section style={styles.heroContainer}>
      <div style={styles.panelBorder}>
        <h1 className="myComicHeader" style={styles.heroTitle}>
          Welcome to CANQUEST
        </h1>
        <p style={styles.heroSubtitle}>
          Enter a world of cyber-racing and digital heists!
        </p>
        <a href="/canquestv2.zip" onClick={handleDownload} style={styles.heroButton}>
          Download Now
        </a>
      </div>
    </section>
  );
}

const styles = {
  heroContainer: {
    position: 'relative',
    width: '100%',
    height: '400px',
    background: `url(${cityLightningGif}) center/cover no-repeat`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  // Use the same yellow as header (#ffec00) here:
  panelBorder: {
    backgroundColor: '#ffec00',
    border: '6px solid #000',
    padding: '2rem',
    boxShadow: '8px 8px 0 #000',
    textAlign: 'center',
  },
  heroTitle: {
    margin: '0 0 1rem 0',
    color: '#000',
  },
  heroSubtitle: {
    fontSize: '1.4rem',
    marginBottom: '2rem',
    color: '#333',
    fontFamily: "'Ubuntu', sans-serif",
  },
  heroButton: {
    display: 'inline-block',
    backgroundColor: '#ff0000',
    color: '#fff',
    fontSize: '1.5rem',
    padding: '0.5rem 1rem',
    border: '4px solid #000',
    boxShadow: '4px 4px 0 #000',
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: "'Ubuntu', sans-serif",
  },
};

export default HeroSection;
