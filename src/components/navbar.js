import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo'>
            Bluecut
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <l1 className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </l1>

            <l1 className='nav-item'>
              <Link to='/glasses' className='nav-links'>
                Glasses
              </Link>
            </l1>

            <l1 className='nav-item'>
              <Link to='/order' className='nav-links'>
                Order
              </Link>
            </l1>

            <l1 className='nav-item'>
              <Link to='/products' className='nav-links'>
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
    </>
  );
}

export default Navbar;
