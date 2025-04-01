// components/footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p className="myComicHeader" style={styles.footerText}>
        © {new Date().getFullYear()} CANQUEST. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#ffec00',
    padding: '1rem',
    borderTop: '8px solid #000',
    textAlign: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: '1.4rem',
    color: '#000',
  },
};

export default Footer;
