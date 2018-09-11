import React from 'react';
import NavBar from '../NavBar/NavBar';

const Bio = (props) => {
    const navType = [
        {
            text: "My Profile",
            to: "/profile"
        },
        {
            text: "Logout",
            to: "/logout"
        }
    ];
    return (
       <div className='TextType'>
       <NavBar links={ navType }/>
       <p>Just some more text to test with</p>
       </div>
    );
}

export default Bio