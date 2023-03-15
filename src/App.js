import React, {useState} from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import FadeUp from './Components/animation';
import self_pic from './Images/self_pic.jpg';
import jv from './Images/jv.svg';
import py from './Images/py.svg';
import post from './Images/post.svg';
import reactPic from './Images/react.svg';
import x from './Images/x.svg';
import heroku from './Images/heroku.svg';
import go from './Images/go.svg';

function App() {

  //Hooks to keep track of screen size and page scroll location
  const[width, setWidth] = useState(window.innerWidth)
  const[scroll, setScroll] = useState(0)
  
  //Function to handle elements when the screen size changes
  function reportWindowSize() {
    setWidth(window.innerWidth);
    menuToggleBack();
  }

  //Function to handle elements based on page scrolling
  function reportScrollStatus() {
    var current = document.getElementsByTagName("html")[0].scrollTop;

    //When scrolling down, trigger the animation to slide the navbar out of sight
    //When scrolling up, trigger the animation to bring the navbar back into sight
    if (current > scroll) {
      document.getElementById('Navigation').style.animation="slideUp 0.25s ease-in both";
    } else {
      document.getElementById('Navigation').style.animation="slideDown 0.25s ease-in both";
    }

    setScroll(current)

    //If the navbar is at the top of the screen remove the box shadow, otherwise add the box shadow
    if (scroll < 50 && document.getElementById('Navigation').classList.contains('shadow')) {
      document.getElementById('Navigation').classList.toggle('shadow')
    } else if (scroll > 50 && !(document.getElementById('Navigation').classList.contains('shadow'))) {
      document.getElementById('Navigation').classList.toggle('shadow')
    }
  }

  //Function to trigger side menu closing animation when hitting the close icon
 function menuToggleBack() {
  document.getElementById('sideMenu').style.animation="slideBack 0.15s ease-in both";
}
  
  //Listeners for screen resizing and scrolling respectively
  window.onresize = reportWindowSize;
  window.onscroll = reportScrollStatus;

  return (
    <div className="App">
      <div className='layer'></div>
      <div className='sideMenu' id='sideMenu'>
        <div className='closeIcon'>
          <img src={x} onClick={menuToggleBack}></img>
        </div>
        <ul className='sideNav'>
          <a href="/#about" onClick={menuToggleBack} style={{float:'right'}}>About</a>
          <a href="/#projects" onClick={menuToggleBack} style={{float:'right'}}>Projects</a>
          <a href="/#contact" onClick={menuToggleBack} style={{float:'right'}}>Contact</a>
        </ul>
      </div>
      <Navigation windowWidth={width}/>
      <main>
        <div className='introContainer'>
          <section className='intro'>
            <h1>Hello fellow humans, I'm...</h1>
            <h2>Liam Dyer,</h2>
            <h3>Computer Programmer</h3>
            <p>I'm a Computer Science student with a hunger for knowledge and
               an aptitude for action. Currently I'm studying at the University of Alaska Anchorage
               and am excited to put what I've learned to good use.
               </p>
               <div style={{paddingTop: '50px'}}>
                <button style={{cursor: 'pointer'}} type="submit">Take a look!</button>
               </div>
          </section>
          <section className='about' id='about'>
            <FadeUp>
              <h1>About</h1>
            </FadeUp>
              <div className='aboutBox'>
                <div style={{flexBasis: '60%', flexGrow: 1}}>
                  <FadeUp>
                    <div>
                      <p>Thank you for stopping by my website! I've been fascinated with technology
                        since childhood and always wanted to be part of creating it. Applying to
                        UAA was one of the ways I set about conquering this goal and have come a long way
                        from printing "Hello world!" to console. I'm excited to continue my devlopment as an
                        enginner and build more amazing things.
                      </p>
                      <p>Here are some of the technologies I've used...</p>
                      <div className='iconBox'>
                        <img src={jv}></img>
                        <img src={reactPic}></img>
                        <img src={py}></img>
                        <img src={post}></img>
                        <img src={heroku}></img>
                        <img src={go}></img>
                      </div>
                    </div>
                  </FadeUp>
                </div>
                <div style={{height: 'auto', flexBasis: '40%', flexGrow: 1, display: 'grid', alignContent: 'center', justifyContent: 'center'}}>
                  <FadeUp>
                    <img className ='self_pic' src={self_pic} alt='Me!'></img>
                  </FadeUp>
                </div>
              </div>
          </section>
          <section className='projects' id='projects'>
            <FadeUp>
              <h1>Projects</h1>
            </FadeUp>
          </section>
          <section className='contact' id='contact'>
            <FadeUp>
              <h1>Contact</h1>
            </FadeUp>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
