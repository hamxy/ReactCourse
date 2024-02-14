import './Header.css';
import { useState } from 'react';

function Header() {
    const [isOpen, toggle] = useState(false);
 
    return (
        <header>
            <div onClick={() => toggle(!isOpen)} id="menuToggler">≡</div>
            <nav className={isOpen ? "open" : ""} id="menu">
                <a onClick={() => toggle(false)} href="#">Home</a>
                <a onClick={() => toggle(false)} href="#">Blog</a>
                <a onClick={() => toggle(false)} href="#">Gallery</a>
                <a onClick={() => toggle(false)} href="#">Contact</a>
                <a onClick={() => toggle(false)} href="#">About</a>
            </nav>
        </header>
    )
}

export default Header;