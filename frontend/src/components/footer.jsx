import React from 'react';
import './footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Content powered by{' '}
          <a href="https://www.apple.com/itunes/" target="_blank" rel="noopener noreferrer">
            iTunes Search API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;