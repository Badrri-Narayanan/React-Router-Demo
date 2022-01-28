import React from 'react';
import { Link } from 'react-router-dom';
import HouseMDImg from '../images/House-MD.png'

const Homepage = () => (
    <div>
        <Link className="btn btn-primary" to="/about">About</Link>
        <Link className="btn btn-primary" to="/characters">Characters</Link>
        <br/>
        <img src={HouseMDImg} alt="house_md" style={{width: '90%', height: 'auto'}} />
    </div>
);

export default Homepage;
