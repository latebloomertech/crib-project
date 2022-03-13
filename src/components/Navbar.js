import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import "./styles/Navbar.css"


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Flat Tv
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/'
                exact
                className='nav-links'
                onClick={closeMobileMenu}
              >
                  Home
              </Link>
            </li>
            <li className='nav-item'>
            </li>
            <li className='nav-item'>
              {/* <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link> */}
            </li>
            <li className='nav-item'>
              <Link
                to='/cribs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Movies
              </Link>
            </li>

            <li>
              <Link
                to='/about'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                JOIN
              </Link>
            </li>
          </ul>
      
        </div>
      </nav>
    </>
  );
}

export default Navbar;