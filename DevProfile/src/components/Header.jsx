import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
      <header className="header">
        <img src="../img/meditation.png" alt="Meditation Logo"className="logo"/>

        <nav>
            <ul>
                <li> <Link to="/"> About me</Link> </li>
                <li> <Link to="/portfolio"> Portfolio </Link> </li>
                <li> <Link to="/contactme"> Contact Me</Link> </li>
                <li> <Link to="/resume"> Resume</Link> </li>

            </ul>

        </nav>
        
      </header>
    );
  }

  