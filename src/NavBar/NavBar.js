import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    const navLinks = props.links.map((link, index) => <li key={ index.toString() }> <Link to={ link.to }>  { link.text } </Link> </li> );
    return (
        <div className='navBar'>
            <div className="topnav">
                <ul>
                { navLinks }
                </ul>
            </div>
        </div>
    );
}

export default NavBar
