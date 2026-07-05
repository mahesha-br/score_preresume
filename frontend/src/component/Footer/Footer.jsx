import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container bg-gray-700 text-white py-6">
            <div className="footer-content flex flex-col items-center justify-center gap-4">
                <div className="footer-links flex gap-6">
                    <Link to="/about" className="footer-link text-white hover:text-gray-300">About Us</Link>
                    <Link to="/contact" className="footer-link text-white hover:text-gray-300">Contact Us</Link>
                    <Link to="/privacy" className="footer-link text-white hover:text-gray-300">Privacy Policy</Link>
                </div>
                <p className="text-sm border-t border-gray-600 pt-4 w-full text-center">Copyright © 2026. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
