import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} CANQUEST. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#222',
    padding: '1rem 2rem',
    textAlign: 'center',
    color: '#aaa',
  },
};

export default Footer;
