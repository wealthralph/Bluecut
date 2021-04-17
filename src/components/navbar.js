import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import { Button } from './button';
import { IconContext } from 'react-icons/lib'



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }

  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Bluecut
          </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <l1 className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
              </Link>
              </l1>

              <l1 className='nav-item'>
                <Link to='/glasses' className='nav-links' onClick={closeMobileMenu}>
                  Glasses
              </Link>
              </l1>

              <l1 className='nav-item'>
                <Link to='/order' className='nav-links' onClick={closeMobileMenu}>
                  Order
              </Link>
              </l1>

              <l1 className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                  Products
              </Link>
              </l1>

              <li className='nav-btn'>
                {button ? (
                  <Link className='nav-btn'>
                    <Button buttonStyle='btn__outline'>Order Now</Button>
                  </Link>
                ) : (
                  <Link className='btn-link'>
                    <Button buttonStyle='btn--outline' ButtonSize='btn--mobile'>
                      Sign Up
                  </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
