import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/homepage';
import AboutUs from './components/aboutus';
import DownloadPage from './components/download';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#111', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Download Page route */}
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
