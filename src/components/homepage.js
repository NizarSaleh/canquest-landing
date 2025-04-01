// components/homepage.jsx
import React from 'react';
import HeroSection from './herosection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <section style={styles.featuresContainer}>
        <div style={styles.panelCard}>
          <div className="myComicHeader" style={styles.panelTitle}>
            🚗 Hack Your Ride
          </div>
          <p style={styles.panelText}>
            Take control of high-speed vehicles and exploit vulnerabilities.
          </p>
        </div>
        <div style={styles.panelCard}>
          <div className="myComicHeader" style={styles.panelTitle}>
            💻 Learn Cybersecurity
          </div>
          <p style={styles.panelText}>
            Gain real insights into digital security and hacking fundamentals.
          </p>
        </div>
        <div style={styles.panelCard}>
          <div className="myComicHeader" style={styles.panelTitle}>
            🤝 Join the Community
          </div>
          <p style={styles.panelText}>
            Connect with enthusiasts and compete in thrilling cyber challenges.
          </p>
        </div>
      </section>

      <section style={styles.panelSection}>
        <h2 className="myComicHeader" style={styles.panelHeading}>
          Trailer / Demo
        </h2>
        <p style={styles.panelText}>
          Check out our quick trailer to see CANQUEST in action:
        </p>
        <div style={styles.videoContainer}>
          <div style={styles.videoWrapper}>
            <iframe
              style={styles.responsiveIframe}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="CANQUEST Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section style={styles.panelSection}>
        <h2 className="myComicHeader" style={styles.panelHeading}>
          Abstract
        </h2>
        <p style={styles.panelText}>
        CANQuest is a gamified learning platform that helps ethical hackers—from beginners to experts—develop automotive penetration testing skills. 
        Built with Unreal Engine, the game offers Capture-the-Flag (CTF) challenges that simulate real-world vehicle vulnerabilities using a virtual CAN network and a custom UDS server. 
        Players interact with simulated Electronic Control Units (ECUs) to discover and exploit weaknesses, collecting flags along the way. As an open-source project, 
        CANQuest also lets professionals design custom CTFs, fostering community knowledge sharing and technical skill advancement.
        </p>
      </section>

      <section style={styles.panelSection}>
        <h2 className="myComicHeader" style={styles.panelHeading}>
          Storyboard
        </h2>
        <p style={styles.panelText}>
        In a dystopian future, an all-controlling AI—conceived by a misguided tech visionary—has seized power over autonomous vehicles in Deartropolis, 
        enforcing surveillance and curtailing freedom. Now, awakened players join the White Hat to hack into these vehicles using secret diagnostic backdoors, 
        dismantle the corrupt system, and restore autonomy to the city.
        </p>
      </section>

      <section style={styles.panelSection}>
        <h2 className="myComicHeader" style={styles.panelHeading}>
          Purpose
        </h2>
        <p style={styles.panelText}>
          Our goal is simple: deliver a fun, high-adrenaline game that also serves 
          as a platform for practical cyber-hacking experience.
        </p>
        <p style={styles.panelText}>
          <strong>Target Audience:</strong>
        </p>
        <ul style={styles.bulletList}>
          <li>Cybersecurity enthusiasts seeking an innovative twist.</li>
          <li>Students and professionals wanting to hone cybersecurity skills.</li>
          <li>Adrenaline junkies with a love for hacking and cars.</li>
        </ul>
      </section>
    </>
  );
}

const styles = {
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    padding: '1rem',
  },
  // Update panelCard background to yellow:
  panelCard: {
    background: '#ffec00',
    border: '6px solid #000',
    padding: '1rem',
    width: '300px',
    textAlign: 'center',
    margin: '1rem',
    boxShadow: '8px 8px 0 #000',
  },
  panelTitle: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
    color: '#ff0000',
  },
  panelText: {
    fontSize: '1.2rem',
    color: '#333',
    fontFamily: "'Ubuntu', sans-serif",
  },
  // Update panelSection background to yellow:
  panelSection: {
    background: '#ffec00',
    border: '6px solid #000',
    margin: '1rem auto',
    padding: '1rem',
    maxWidth: '900px',
    boxShadow: '8px 8px 0 #000',
  },
  panelHeading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#ff0000',
    textAlign: 'center',
  },
  bulletList: {
    fontSize: '1.2rem',
    marginLeft: '2rem',
    fontFamily: "'Ubuntu', sans-serif",
  },
  videoContainer: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
  },
  responsiveIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

export default HomePage;
