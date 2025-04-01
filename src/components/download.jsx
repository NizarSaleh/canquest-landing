import React from 'react';
import downloadBackground from '../assets/background.jpg';

function DownloadPage() {
  return (
    <div style={styles.container}>
      <h1 className="myComicHeader" style={styles.heading}>
        Download CANQUEST
      </h1>
      <section style={styles.comicPanel}>
        <h2 className="myComicHeader" style={styles.subHeading}>
          ZIP File
        </h2>
        <p style={styles.text}>
          Grab the latest version of CANQUEST below. The ZIP contains a <strong>README</strong> with additional details.
        </p>
        <a href="/canquestv2.zip" download style={styles.downloadLink}>
          Download CANQUEST v2 (ZIP)
        </a>
      </section>
      <section style={styles.comicPanel}>
        <h2 className="myComicHeader" style={styles.subHeading}>
          Game Download (Windows)
        </h2>
        <p style={styles.text}>
          CANQUEST is built for Windows 10 or later.
          <br />
          <strong>How to Run:</strong> Extract the ZIP, then double-click <em>CANQUEST.exe</em>.
          <br />
          <strong>Minimal Specs:</strong> 8GB RAM, Intel i5 or equivalent, 8GB free disk space.
        </p>
      </section>
      <section style={styles.comicPanel}>
        <h2 className="myComicHeader" style={styles.subHeading}>
          Server / Docker Image (Linux)
        </h2>
        <p style={styles.text}>
          Run the CANQUEST server on a Linux environment or via Docker.
        </p>
        <p style={styles.text}>
          <strong>1) Docker Image</strong>
          <br />
          <code>docker pull canquest0/my-can-handler-image:latest</code>
          <br />
          <code>sudo docker run -it --rm --network=host --name my-can-handler-container canquest0/my-can-handler-image:latest</code>
          <br />
          
        </p>
        <p style={styles.text}>
          <strong>2) Linux VM</strong>
          <br />
          Set up an Ubuntu VM, install Docker, or run the server natively. See{' '}
          <a href="https://ubuntu.com/tutorials" target="_blank" rel="noreferrer">
            Ubuntu's official tutorials
          </a>.
        </p>
      </section>
      <section style={styles.comicPanel}>
        <h2 className="myComicHeader" style={styles.subHeading}>
          Troubleshooting / Known Issues
        </h2>
        <ul style={styles.list}>
          <li><strong>Game Won’t Launch:</strong> Ensure your GPU drivers are up to date.</li>
          <li><strong>Server Unreachable:</strong> Confirm Docker is running; check port 8080.</li>
          <li><strong>VM Connectivity:</strong> Verify your VM network adapter allows inbound traffic.</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    padding: '1rem',
    background: `url(${downloadBackground}) center center / cover no-repeat`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '3rem',
    textAlign: 'center',
    color: '#ff0000',
    marginBottom: '1rem',
  },
  comicPanel: {
    background: '#ffec00',
    border: '6px solid #000',
    padding: '1rem',
    margin: '1rem 0',
    boxShadow: '8px 8px 0 #000',
    width: '100%',
    maxWidth: '900px',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#ff0000',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
    fontFamily: "'UbuntuLocal', sans-serif",
  },
  downloadLink: {
    display: 'inline-block',
    backgroundColor: '#ff0000',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: '4px solid #000',
    boxShadow: '4px 4px 0 #000',
    textDecoration: 'none',
    fontSize: '1.2rem',
    marginTop: '1rem',
    fontFamily: "'UbuntuLocal', sans-serif",
  },
  list: {
    fontSize: '1.2rem',
    color: '#333',
    marginLeft: '2rem',
    fontFamily: "'UbuntuLocal', sans-serif",
  },
};

export default DownloadPage;
