// components/featureSection.jsx
import React from 'react';

const accentColor = '#E95420';

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
    <section style={styles.featuresContainer}>
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
    background: '#2e3436',
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
    background: 'linear-gradient(135deg, #3c3c3c, #4a4a4a)',
    padding: '1.5rem',
    borderRadius: '4px',
    boxShadow: '0 0 8px rgba(233, 84, 32, 0.5)',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: accentColor,
  },
  featureDescription: {
    fontSize: '1rem',
    color: '#ccc',
  },
};

export default FeatureSection;
