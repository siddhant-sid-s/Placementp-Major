import React, { useState } from 'react';
import { BiStats, BiTable } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../styles/slidebar.css';
import logoImage from '../img/tintbr.png';

const Slidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <>
      <div className={`menu ${isSidebarExpanded ? '' : 'collapsed'}`}>
        <div className='logo' onClick={toggleSidebar}>
          <img src={logoImage} alt="Logo" className='logo-icon' />
          {isSidebarExpanded && <h2>TINT Admin</h2>}
        </div>
        {isSidebarExpanded && (
          <div className='menu-list'>
            <Link to='/admin' className='item'>
              <BiStats className='icon' />
              Placement Predictor
            </Link>
            <Link to='/data' className='item'>
              <BiTable className='icon' />
              Student Data
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Slidebar;

