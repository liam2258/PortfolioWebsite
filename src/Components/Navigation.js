import React from "react";
import '../App.css';
import sideMenu from '../Images/sideMenu.svg';
import lambda from '../Images/lambda.svg';

//Function to trigger animation for side menu to appear when clicking on the menu icon
function menuToggle() {
    document.getElementById('sideMenu').style.opacity = '1';
    document.getElementById('layer').style.opacity = '1';
    document.getElementById('sideMenu').style.animation="slideIn 0.3s ease-in both";
    document.getElementById('layer').style.animation="slideRight 0.3s ease-in both";
    document.getElementsByTagName( 'html' )[0].classList.toggle('stuck');
 }

//Returns a different navigation menu depending on the screen size
function Navigation(windowWidth) {
    if (windowWidth.windowWidth > 520) {
        return(
            <ul className='nav' id="Navigation">
                <div>
                    <a tabIndex="-1" href="#top" className='homeIcon' id='homeIcon' style={{padding:'0px', height:'0px', width:'0px'}}><img style={{padding:'0px'}} src={lambda} tabIndex='1' alt="Lambda icon"></img></a>
                </div>
                <a href="/#contact" style={{float:'right'}} tabIndex="4">Contact</a>
                <a href="/#projects" style={{float:'right'}} tabIndex="3">Projects</a>
                <a href="/#about" style={{float:'right'}} tabIndex="2">About</a>
            </ul>
        );
    } else {
        return(
            <ul className='nav' id="Navigation">
                <div>
                    <a tabIndex="-1" href="#top" className='homeIcon' id='homeIcon' style={{padding:'0px', height:'0px', width:'0px', marginTop:'17px'}}><img style={{padding:'0px'}} src={lambda} tabIndex='1' alt="Lambda icon"></img></a>
                </div>
                <img src={sideMenu} className='menuIcon' onClick={menuToggle} id='menuIcon' style={{float:'right'}} alt="Menu icon"></img>
            </ul>
        );
    }
}

export default Navigation;