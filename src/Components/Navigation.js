import React from "react";
import '../App.css';

function Navigation() {
    return(
        <ul className='nav'>
            <a href="/#about">Home</a>
            <a href="/#about" style={{float:'right'}}>Contact</a>
            <a href="/#about" style={{float:'right'}}>Skills</a>
            <a href="/#about" style={{float:'right'}}>About</a>
        </ul>
    );
}

export default Navigation;