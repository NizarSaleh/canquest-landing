import React from 'react';

function FeatureSection() {
  const features = [
    {
      title: 'Hack Your Ride',
      description: 'Take control of high-speed vehicles and exploit vulnerabilities.',
      icon: '🚗',
    },
    {
      title: 'Learn Cybersecurity',
      description: 'Gain real insights into digital security and hacking fundamentals.',
      icon: '💻',
    },
    {
      title: 'Join the Community',
      description: 'Connect with enthusiasts and compete in thrilling cyber challenges.',
      icon: '🤝',
    },
  ];

  return (
    <section id="features" style={styles.featuresContainer}>
      {features.map((feature, index) => (
        <div key={index} style={styles.featureCard}>
          <div style={styles.icon}>{feature.icon}</div>
          <h2 style={styles.featureTitle}>{feature.title}</h2>
          <p style={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

const styles = {
  featuresContainer: {
    background: '#1a1a1a',
    padding: '4rem 2rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
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
};

export default FeatureSection;
