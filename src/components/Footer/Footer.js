import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 Breathing Timer. All rights reserved.</p>
            <p>
                View this project on{' '}
                <a href="https://github.com/abhiobourne/Breathing-Exercise-Chrome-Extension" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </p>
        </footer>
    );
}

export default Footer;

