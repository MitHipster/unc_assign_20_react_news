import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">News Monger</h5>
          <p className="grey-text text-lighten-4">All the news that's fit to search.</p>
        </div>
        <div className="col l2 offset-l4 s12">
          <h5 className="white-text">Follow on</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="grey-text text-lighten-3" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2017 Tim Acker
      </div>
    </div>
  </footer>
);

export default Footer;
