import React from "react";
import '../App.css';
import sideMenu from '../Images/sideMenu.svg';

//Function to trigger animation for side menu to appear when clicking on the menu icon
function menuToggle() {
    document.getElementById('sideMenu').style.animation="slideIn 0.15s ease-in both";
    document.getElementById('layer').style.animation="slideRight 0.15s ease-in both";
    document.getElementsByTagName( 'html' )[0].classList.toggle('stuck');
 }

//Returns a different navigation menu depending on the screen size
function Navigation(windowWidth) {
    if (windowWidth.windowWidth > 500) {
        return(
            <ul className='nav' id="Navigation">
                <a href="/#about" className='homeIcon' id='homeIcon'>Home</a>
                <a href="/#contact" style={{float:'right'}}>Contact</a>
                <a href="/#projects" style={{float:'right'}}>Projects</a>
                <a href="/#about" style={{float:'right'}}>About</a>
            </ul>
        );
    } else {
        return(
            <ul className='nav' id="Navigation">
                <a className='homeIcon' id='homeIcon'>Home</a>
                <img src={sideMenu} className='menuIcon' onClick={menuToggle} id='menuIcon' style={{float:'right'}}></img>
            </ul>
        );
    }
}

export default Navigation;