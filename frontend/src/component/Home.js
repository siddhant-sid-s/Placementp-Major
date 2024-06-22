import React from 'react';
import '../styles/Home.css'
import dark_arrow from '../img/dark-arrow.png';
import { Link } from 'react-router-dom';

const Home =() => {
    return (
        <div className='home container'>
        <div className='home-text'>
           <h1>Navigate with Certainty: Your Career Destination Awaits</h1>
           <p></p>
           <button className='btn'>
            <Link to='/signin' >Login</Link> 
            <img src ={dark_arrow} alt=""/></button> 
        </div>
        </div>
    )
}

export default Home;