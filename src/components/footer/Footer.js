import React from 'react';
import './footer.css';
import { HiCube } from "react-icons/hi";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>PRODUCTS</h3>
        <ul>
          <li>Embed</li>
          <li>Semantic Search</li>
          <li>Summarize</li>
          <li>Generate</li>
          <li>Classify</li>
          <li>Rerank</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>DEVELOPERS</h3>
        <ul>
          <li>Playground</li>
          <li>LLM University</li>
          <li>Examples</li>
          <li>Documentation</li>
          <li>API Reference</li>
          <li>API INTEGRATION</li>
          <li>Responsible Use</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>About</h3>
        <ul>
        <li>Company</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>News</li>
          <li>Partners</li>
          <li>Pricing</li>
          <li>Press Kit</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>TRUST CENTER</h3>
        <ul>
        <li>Privacy</li>
          <li>Terms of Use</li>
          <li>SAAS Agreement</li>
          <li>SLO Agreement</li>
          <li>Responsibility</li>
          <li>Security</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CONTACT</h3>
        <ul>
        <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Discord</li>
        </ul>
      </div>
      <div className="footer-logo">
        <i><HiCube /></i>
        <h3 className="footer-title">Cohere</h3>
      </div>
      <div className="footer-line"></div>
      <div className="footer-social">
        <a>Twitter</a>
        <a>LinkedIn</a>
        <a>Discord</a>
        <a>Email</a>
      </div>
      <div className="footer-links">
        <span>Privacy</span>
        <span>Terms of Use</span>
        <span>©Cohere 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
