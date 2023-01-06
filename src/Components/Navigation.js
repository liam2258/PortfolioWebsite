import React from "react";
import '../App.css';

function Navigation(windowWidth) {
    if (windowWidth.windowWidth > 500) {
        return(
            <ul className='nav'>
                <a href="/#about">Home</a>
                <a href="/#about" style={{float:'right'}}>Contact</a>
                <a href="/#about" style={{float:'right'}}>Skills</a>
                <a href="/#about" style={{float:'right'}}>About</a>
            </ul>
        );
    } else {
        return(
            <ul className='nav'>
                <a href="/#about">Home</a>
            </ul>
        );
    }
}

export default Navigation;