import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">News Monger</h5>
          <p class="grey-text text-lighten-4">All the news that's fit to search.</p>
        </div>
        <div class="col l2 offset-l4 s12">
          <h5 class="white-text">Follow on</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="">Facebook</a></li>
            <li><a class="grey-text text-lighten-3" href="">Instagram</a></li>
            <li><a class="grey-text text-lighten-3" href="">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2017 Tim Acker
      </div>
    </div>
  </footer>
);

export default Footer;
