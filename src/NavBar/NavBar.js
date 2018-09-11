import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBar.css';

const NavBar = (props) => {
    const navLinks = props.links.map((link, index) => <li key={ index.toString() }> <Link to={ link.to }>  { link.text } </Link> </li> );
    return (
        <div className='navBar'>
            <div className="topnav">
                <p> { props.name} </p>
                <ul>
                { navLinks }
                </ul>
            </div>
        </div>
    );
}

NavBar.propTypes = {
    name: PropTypes.string
  };

export default NavBar
