import React from 'react'
import { Link } from 'react-router-dom';

const About = () => (
    <div>
        <h2>About</h2>
        <Link className="btn btn-primary" to="/">Home</Link>
        <Link className="btn btn-primary" to="/characters">Characters</Link>
        <h3>House (also called House, M.D.) is an American medical drama television series that originally ran on the Fox network for eight seasons, from November 16, 2004 to May 21, 2012. The series's main character is Dr. Gregory House, an unconventional, misanthropic medical genius who, despite his dependence on pain medication, leads a team of diagnosticians at the fictional Princeton–Plainsboro Teaching Hospital (PPTH) in New Jersey.</h3>
    </div>
);

export default About;
