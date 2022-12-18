import React from "react";
import '../App.css';

function Navigation() {
    return(
        <ul className='nav'>
            <li>Home</li>
            <li style={{float:'right'}}>Contact</li>
            <li style={{float:'right'}}>Skills</li>
            <li style={{float:'right'}}>About</li>
        </ul>
    );
}
export default Navigation;