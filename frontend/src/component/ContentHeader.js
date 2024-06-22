import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import '../styles/content.css';
import { Link } from 'react-router-dom';

const ContentHeader = () => {
  return (
    <div className='content--header'>
      <h1 className='header--title'>Placement Predictor</h1>
      <div className='header--activity'>
        <Link to ="/signin" >
        <button className='logout--button'>
          <BiLogOut className='logout--icon' />
          Logout
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentHeader;
