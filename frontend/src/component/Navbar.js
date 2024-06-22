import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import menu_icon from '../img/menu-icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <h1 className='name'>
      <Link to='/' >Placement Predictor</Link>
      </h1>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to='/' onClick={() => setMobileMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to='/signin'  onClick={() => setMobileMenu(false)}>Login</Link>
        </li>
      </ul>
      <img src={menu_icon} alt='Menu Icon' className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
