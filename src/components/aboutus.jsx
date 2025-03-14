import React from 'react';
import groupPhoto from '../assets/group.jpg';
import kevinPhoto from '../assets/kevin.jpg';
import shamsPhoto from '../assets/shams.jpg';
import aliPhoto from '../assets/ali.jpg';
import souadPhoto from '../assets/souad.jpg';
import nizarPhoto from '../assets/nizar.jpg';

// Example logos (replace with your actual files):
// import etasLogo from '../assets/etas_logo.png';
// import umdCecsLogo from '../assets/umd_cecs_logo.png';
// import canquestLogo from '../assets/canquest_logo.png';

function AboutUs() {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Meet Our Team</h2>

      {/* Group Photo Section */}
      <div style={styles.groupSection}>
        <img src={groupPhoto} alt="Our Team" style={styles.groupPhoto} />
        <p style={styles.groupDescription}>
          We are a passionate team pushing boundaries in digital innovation to bring you CANQUEST.
        </p>
      </div>

      {/* Individual Team Member Rows */}
      <div style={styles.memberRow}>
        <img src={kevinPhoto} alt="Kevin Mitchel (Client)" style={styles.memberPhoto} />
        <div style={styles.memberInfo}>
          <h3 style={styles.memberName}>Kevin Mitchel (Client)</h3>
          <p style={styles.memberDescription}>
            Our visionary client whose ideas inspire our innovative approach. 
            Ask him about those hacker hats/beanies!
          </p>
        </div>
      </div>

      <div style={styles.memberRow}>
        <img src={shamsPhoto} alt="Shams Ahson" style={styles.memberPhoto} />
        <div style={styles.memberInfo}>
          <h3 style={styles.memberName}>Shams Ahson</h3>
          <p style={styles.memberDescription}>
            A dedicated developer with a talent for solving complex challenges.
          </p>
        </div>
      </div>

      <div style={styles.memberRow}>
        <img src={aliPhoto} alt="Ali Chowdhury" style={styles.memberPhoto} />
        <div style={styles.memberInfo}>
          <h3 style={styles.memberName}>Ali Chowdhury</h3>
          <p style={styles.memberDescription}>
            An expert in system design and a creative force behind our projects.
          </p>
        </div>
      </div>

      <div style={styles.memberRow}>
        <img src={souadPhoto} alt="Souad Omar" style={styles.memberPhoto} />
        <div style={styles.memberInfo}>
          <h3 style={styles.memberName}>Souad Omar</h3>
          <p style={styles.memberDescription}>
            A brilliant strategist ensuring our solutions are both effective and secure.
          </p>
        </div>
      </div>

      <div style={styles.memberRow}>
        <img src={nizarPhoto} alt="Nizar Saleh" style={styles.memberPhoto} />
        <div style={styles.memberInfo}>
          <h3 style={styles.memberName}>Nizar Saleh</h3>
          <p style={styles.memberDescription}>
            A versatile programmer with a passion for digital innovation and security.
          </p>
        </div>
      </div>

      {/* NEW: Additional sections for ETAS, faculty, logos, contact info, etc. */}
      <div style={styles.infoContainer}>
        {/* Example logos: 
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <img src={etasLogo} alt="ETAS" style={styles.logo} />
            <img src={umdCecsLogo} alt="UMD CECS" style={styles.logo} />
            <img src={canquestLogo} alt="CANQUEST" style={styles.logo} />
          </div>
        */}

        <h3 style={styles.infoHeader}>ETAS Collaboration</h3>
        <p style={styles.infoText}>
          We’re proud to collaborate with ETAS, a leader in embedded solutions for the automotive 
          industry. Their guidance helps make CANQUEST’s hacking features realistic.
        </p>

        <h3 style={styles.infoHeader}>Senior Design Faculty</h3>
        <p style={styles.infoText}>
          Special thanks to the University of Michigan-Dearborn CECS Senior Design faculty for 
          their mentorship and support throughout this project.
        </p>

        <h3 style={styles.infoHeader}>Contact Us</h3>
        <p style={styles.infoText}>
          <strong>Email:</strong> canquestteam@gmail.com <br />
          <strong>GitHub:</strong> github.com/CANQUEST
        </p>
        <p style={styles.infoText}>
          We are open source! Feel free to contribute or explore the repo for more details 
          on how CANQUEST is built.
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    background: '#1a1a1a',
    color: '#eee',
    padding: '2rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  heading: {
    textAlign: 'center',
    color: '#00bcd4',
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  groupSection: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  groupPhoto: {
    width: '100%',
    maxWidth: '1200px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
  },
  groupDescription: {
    marginTop: '1rem',
    fontSize: '1.1rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  memberRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    marginBottom: '2rem',
    background: '#222',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
  },
  memberPhoto: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '2rem',
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
    color: '#00bcd4',
  },
  memberDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.5',
  },
  // NEW styles for extra info sections
  infoContainer: {
    marginTop: '2rem',
    background: '#222',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
  },
  infoHeader: {
    fontSize: '1.8rem',
    color: '#00bcd4',
    marginTop: '1rem',
  },
  infoText: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  logo: {
    width: '120px',
    height: 'auto',
  },
};

export default AboutUs;
