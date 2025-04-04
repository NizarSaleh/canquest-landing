// components/aboutus.jsx
import React from 'react';
import groupPhoto from '../assets/group.jpg';
import kevinPhoto from '../assets/kevin.jpg';
import shamsPhoto from '../assets/shams.jpg';
import aliPhoto from '../assets/ali.jpg';
import souadPhoto from '../assets/souad.jpg';
import nizarPhoto from '../assets/nizar.jpg';

function AboutUs() {
  return (
    <section style={styles.container}>
      {/* Intro Panel (White) */}
      <div style={styles.introPanel}>
        <h2 className="myComicHeader" style={styles.introHeading}>
          Meet Our Team
        </h2>
      </div>

      {/* Group Photo Panel (White) */}
      <div style={styles.groupPhotoPanel}>
        <img src={groupPhoto} alt="Our Team" style={styles.groupPhoto} />
        <p style={styles.text}>
          We are a passionate team pushing boundaries in digital innovation to bring you CANQUEST.
        </p>
      </div>

      {/* Individual Team Member Panels (White) */}
      <div style={styles.memberPanel}>
        <img src={kevinPhoto} alt="Kevin Mitchel (Client)" style={styles.memberPhoto} />
        <h3 className="myComicHeader" style={styles.subHeading}>Kevin Mitchel (Client)</h3>
        <p style={styles.memberDescription}>
          Our visionary client whose ideas inspire our innovative approach. Ask him about those hacker hats/beanies!
        </p>
      </div>

      <div style={styles.memberPanel}>
        <img src={shamsPhoto} alt="Shams Ahson" style={styles.memberPhoto} />
        <h3 className="myComicHeader" style={styles.subHeading}>Shams Ahson</h3>
        <p style={styles.memberDescription}>
          A dedicated developer with a talent for solving complex challenges.
        </p>
      </div>

      <div style={styles.memberPanel}>
        <img src={aliPhoto} alt="Ali Chowdhury" style={styles.memberPhoto} />
        <h3 className="myComicHeader" style={styles.subHeading}>Ali Chowdhury</h3>
        <p style={styles.memberDescription}>
          An expert in system design and a creative force behind our projects.
        </p>
      </div>

      <div style={styles.memberPanel}>
        <img src={souadPhoto} alt="Souad Omar" style={styles.memberPhoto} />
        <h3 className="myComicHeader" style={styles.subHeading}>Souad Omar</h3>
        <p style={styles.memberDescription}>
          A brilliant strategist ensuring our solutions are both effective and secure.
        </p>
      </div>

      <div style={styles.memberPanel}>
        <img src={nizarPhoto} alt="Nizar Saleh" style={styles.memberPhoto} />
        <h3 className="myComicHeader" style={styles.subHeading}>Nizar Saleh</h3>
        <p style={styles.memberDescription}>
          A versatile programmer with a passion for digital innovation and security.
        </p>
      </div>

      {/* Additional Info Panels (White) */}
      <div style={styles.infoPanel}>
        <h3 className="myComicHeader" style={styles.subHeading}>ETAS Collaboration</h3>
        <p style={styles.text}>
          We’re proud to collaborate with ETAS, a leader in embedded solutions for the automotive industry.
          Their guidance helps make CANQUEST’s hacking features realistic.
        </p>
      </div>

      <div style={styles.infoPanel}>
        <h3 className="myComicHeader" style={styles.subHeading}>Senior Design Faculty</h3>
        <p style={styles.text}>
          Special thanks to the University of Michigan-Dearborn CECS Senior Design faculty for their mentorship and support.
        </p>
      </div>

      <div style={styles.infoPanel}>
        <h3 className="myComicHeader" style={styles.subHeading}>Contact Us</h3>
        <p style={styles.text}>
          <strong>Email:</strong> canquestteam@gmail.com <br/>
          <strong>GitHub:</strong> github.com/CANQUEST
        </p>
        <p style={styles.text}>
          We are open source! Feel free to contribute or explore the repo for more details.
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    margin: '1rem auto',
    maxWidth: '1200px',
    background: '#fff',
    padding: '1rem',
  },
  introPanel: {
    background: '#fff',
    border: '6px solid #000',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '8px 8px 0 #000',
    textAlign: 'center',
  },
  introHeading: {
    fontSize: '3rem',
    margin: 0,
    color: '#ff0000',
  },
  groupPhotoPanel: {
    background: '#fff',
    border: '6px solid #000',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '8px 8px 0 #000',
  },
  groupPhoto: {
    width: '100%',
    maxWidth: '600px',
    display: 'block',
    margin: '0 auto 1rem auto',
  },
  memberPanel: {
    background: '#fff',
    border: '6px solid #000',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '8px 8px 0 #000',
    position: 'relative',
  },
  memberPhoto: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    float: 'left',
    marginRight: '1rem',
    border: '3px solid #000',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#ff0000',
    marginTop: '0',
    clear: 'both',
  },
  memberDescription: {
    fontSize: '1.2rem',
    color: '#333',
    marginTop: '1cm',
    fontFamily: "'UbuntuLocal', sans-serif",
    clear: 'both',
  },
  infoPanel: {
    background: '#fff',
    border: '6px solid #000',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '8px 8px 0 #000',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
    fontFamily: "'UbuntuLocal', sans-serif",
  },
};

export default AboutUs;
