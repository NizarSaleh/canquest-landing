import React from 'react';
import { useNavigate } from 'react-router-dom';
import cityLightningGif from '../assets/rain.gif';

function HeroSection() {
  const navigate = useNavigate();

  const handleDownload = (e) => {
    e.preventDefault();
    // 1) Create a temporary <a> to trigger the download
    const tempLink = document.createElement('a');
    tempLink.href = '/canquestv2.zip';
    tempLink.download = 'canquestv2.zip';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    // 2) Navigate to /download page
    navigate('/download');
  };

  return (
    <section style={styles.heroContainer}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to CANQUEST</h1>
        <p style={styles.subtitle}>
          Enter into a world of cyber-racing and digital heists!
        </p>
        <a href="/canquestv2.zip" onClick={handleDownload} style={styles.button}>
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
    height: '10cm',
    backgroundImage: `url(${cityLightningGif})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '2rem',
    borderRadius: '8px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#00bcd4',
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default HeroSection;
