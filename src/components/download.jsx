import React from 'react';

function DownloadPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Download CANQUEST</h1>

      <section style={styles.section}>
        <h2>ZIP File</h2>
        <p>
          Grab the latest version of CANQUEST below. The ZIP contains a <strong>README</strong> with additional details.
        </p>
        <a href="/canquestv2.zip" download style={styles.downloadLink}>
          Download CANQUEST v2 (ZIP)
        </a>
      </section>

      <section style={styles.section}>
        <h2>Game Download (Windows)</h2>
        <p>
          CANQUEST is currently built for Windows 10 or later.
          <br />
          <strong>How to Run:</strong> Extract the ZIP, then double-click <em>CANQUEST.exe</em>.
          <br />
          <strong>Minimal Specs:</strong> 8GB RAM, Intel i5 or equivalent, 2GB free disk space.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Server / Docker Image (Linux)</h2>
        <p>
          Run the CANQUEST server on a Linux environment or via Docker.
        </p>
        <p>
          <strong>1) Docker (Recommended)</strong><br />
          <code>docker pull canquest/server:latest</code><br />
          <code>docker run -it -p 8080:8080 canquest/server</code>
        </p>
        <p>
          <strong>2) Linux VM</strong><br />
          You can set up an Ubuntu VM and install Docker or run the server natively. Check out{' '}
          <a href="https://ubuntu.com/tutorials" target="_blank" rel="noreferrer">
            Ubuntu's official tutorials
          </a>.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Screenshots</h2>
        {/* Example screenshot usage:
        <img 
          src={someScreenshot} 
          alt="CANQUEST Download Screenshot" 
          style={styles.screenshot} 
        />
        */}
      </section>

      <section style={styles.section}>
        <h2>Troubleshooting / Known Issues</h2>
        <ul>
          <li>
            <strong>Game Won’t Launch:</strong> Make sure your GPU drivers are up to date.
          </li>
          <li>
            <strong>Server Unreachable:</strong> Check Docker is running; confirm port 8080 is open.
          </li>
          <li>
            <strong>VM Connectivity:</strong> Ensure your VM network adapter allows inbound traffic.
          </li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1a1a1a',
    color: '#eee',
    minHeight: '100vh',
    padding: '2rem',
  },
  header: {
    textAlign: 'center',
    color: '#00bcd4',
    marginBottom: '2rem',
  },
  section: {
    marginBottom: '2rem',
    backgroundColor: '#222',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
  },
  downloadLink: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#00bcd4',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  screenshot: {
    width: '300px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
    margin: '0.5rem',
  },
};

export default DownloadPage;
