import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <nav>
                <li><Link to="/">Home</Link></li>
            </nav>
        </header>
    );
}

export default Header;
