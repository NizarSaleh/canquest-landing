import React from 'react';
import HeroSection from './herosection';
// If you have storyboard images, import them:
// import storyboardImg1 from '../assets/storyboard1.png';
// import storyboardImg2 from '../assets/storyboard2.png';

function HomePage() {
  return (
    <>
      {/* 1) Hero (Welcome + Download) */}
      <HeroSection />

      {/* 2) Three Feature Cards */}
      <section style={styles.featuresContainer}>
        <div style={styles.featureCard}>
          <div style={styles.icon}>🚗</div>
          <h2 style={styles.featureTitle}>Hack Your Ride</h2>
          <p style={styles.featureDescription}>
            Take control of high-speed vehicles and exploit vulnerabilities.
          </p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.icon}>💻</div>
          <h2 style={styles.featureTitle}>Learn Cybersecurity</h2>
          <p style={styles.featureDescription}>
            Gain real insights into digital security and hacking fundamentals.
          </p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.icon}>🤝</div>
          <h2 style={styles.featureTitle}>Join the Community</h2>
          <p style={styles.featureDescription}>
            Connect with enthusiasts and compete in thrilling cyber challenges.
          </p>
        </div>
      </section>

      {/* 3) Trailer bubble card */}
      <section style={styles.bubbleCard}>
        <h2 style={styles.bubbleHeader}>Trailer / Demo</h2>
        <p style={styles.bubbleText}>
          Check out our quick trailer to see CANQUEST in action:
        </p>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          {/* Replace src with your actual trailer link */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="CANQUEST Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* 4) Abstract bubble card */}
      <section style={styles.bubbleCard}>
        <h2 style={styles.bubbleHeader}>Abstract</h2>
        <p style={styles.bubbleText}>
          CANQUEST is an immersive cyber-racing game that merges high-speed driving 
          with hands-on cybersecurity learning. Judges and gamers alike will enjoy 
          its unique combination of excitement and education.
        </p>
      </section>

      {/* 5) Storyboard bubble card */}
      <section style={styles.bubbleCard}>
        <h2 style={styles.bubbleHeader}>Storyboard</h2>
        <p style={styles.bubbleText}>
          A quick look at how CANQUEST progresses—from initial vehicle hacks to intense 
          city street races.
        </p>
        {/* 
          Example usage:
          <div style={styles.storyboardContainer}>
            <img src={storyboardImg1} alt="Storyboard 1" style={styles.storyboardImage} />
            <img src={storyboardImg2} alt="Storyboard 2" style={styles.storyboardImage} />
          </div>
        */}
      </section>

      {/* 6) Purpose bubble card */}
      <section style={styles.bubbleCard}>
        <h2 style={styles.bubbleHeader}>Purpose</h2>
        <p style={styles.bubbleText}>
          Our goal is simple: deliver a fun, high-adrenaline game that also serves 
          as a platform for practical cyber-hacking experience.
        </p>
        <p style={styles.bubbleText}>
          <strong>Target Audience:</strong>
        </p>
        <ul style={styles.bubbleList}>
          <li>Racing enthusiasts seeking an innovative twist.</li>
          <li>Students and professionals wanting to hone cybersecurity skills.</li>
          <li>Adrenaline junkies with a love for hacking and cars.</li>
        </ul>
      </section>
    </>
  );
}

const styles = {
  // Feature cards section
  featuresContainer: {
    background: '#1a1a1a',
    padding: '3rem 2rem',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  featureCard: {
    width: '300px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #222, #333)',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#00bcd4',
  },
  featureDescription: {
    fontSize: '1rem',
    color: '#ccc',
  },

  // Bubble cards for trailer, abstract, storyboard, purpose
  bubbleCard: {
    backgroundColor: '#222',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
    maxWidth: '900px',
  },
  bubbleHeader: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#00bcd4',
    textAlign: 'center',
  },
  bubbleText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#eee',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  bubbleList: {
    marginTop: '1rem',
    textAlign: 'left',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
  },

  storyboardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  storyboardImage: {
    width: '300px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
  },
};

export default HomePage;
