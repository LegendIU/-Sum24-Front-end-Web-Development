// src/components/Header.tsx

import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="left-links">
                    <a href="/comic" className="comic-link">XKCD Comic</a>
                    <a href="/" className="logo"><span className="innopolis">Innopolis</span> <span className="university">University</span></a>
                </div>
                <nav>
                    <ul className="social-links">
                        <li><a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer"><img src="images/mail-icon.png" alt="Mail" width="24" height="24" /></a></li>
                        <li><a href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer"><img src="images/telegram-icon.png" alt="Telegram" width="24" height="24" /></a></li>
                        <li><a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer"><img src="images/github-icon.png" alt="GitHub" width="24" height="24" /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
