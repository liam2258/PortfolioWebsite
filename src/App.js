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
import github from './Images/github.svg';
import link from './Images/link.svg';
import instagram from './Images/instagram.svg';
import mail from './Images/mail.svg';
import resume from './resume.pdf';
import docker from './Images/docker.svg';
import cpp from './Images/cpp.svg';
import ProjectCards from './Components/ProjectCards';

function App() {

  //Hooks to keep track of screen size and page scroll location
  const[width, setWidth] = useState(window.innerWidth)
  const[scroll, setScroll] = useState(0)
  const[response, setResponse] = useState("")

  function refreshContact() {
    document.getElementById("emailName").value = "";
    document.getElementById("emailContact").value = "";
    document.getElementById("emailMessage").value = "";
  }

  //Handles click event for contact field, highlights unfilled input fields if empty, otherwise initiates send request to api and returns response
  function handleClick() {
    var nameField = document.getElementById("emailName").value;
    var contactField = document.getElementById("emailContact").value;
    var messageField = document.getElementById("emailMessage").value;
  
    var nameItem = document.getElementById('emailName');
    var labelName = document.getElementById('nameLabel');
    var contactItem = document.getElementById('emailContact');
    var labelContact = document.getElementById('contactLabel');
    var messageItem = document.getElementById('emailMessage');
    var messageLabel = document.getElementById('messageLabel');

    // Regular expression to check for valid email
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (nameField === "" || contactField === "" || messageField === "" || !(validEmail.test(contactField))) {
      if (nameField === "") {
        nameItem.style.borderColor = '#F67280';
        labelName.style.color = '#F67280';
      } else {
        nameItem.style.borderColor = '#64697e'; // Reset the border color
        labelName.style.color = '#a8afd3'; // Reset the label color
      }
  
      if (contactField === "") {
        contactItem.style.borderColor = '#F67280';
        labelContact.style.color = '#F67280';
      } else {
        contactItem.style.borderColor = '#64697e'; // Reset the border color
        labelContact.style.color = '#a8afd3'; // Reset the label color
      }
  
      if (messageField === "") {
        messageItem.style.borderColor = '#F67280';
        messageLabel.style.color = '#F67280';
      } else {
        messageItem.style.borderColor = '#64697e'; // Reset the border color
        messageLabel.style.color = '#a8afd3'; // Reset the label color
      }
  
      if (validEmail.test(contactField)) {
        setResponse("Please fill out required fields");
      }
      else {
        setResponse("Please use a valid email");
      }
    } else {
      nameItem.style.borderColor = '#64697e';
      contactItem.style.borderColor = '#64697e';
      messageItem.style.borderColor = '#64697e';
      labelName.style.color = '#a8afd3';
      labelContact.style.color = '#a8afd3';
      messageLabel.style.color = '#a8afd3';

      setResponse("Processing...")

      fetch("https://pymail-80b20c568f73.herokuapp.com/send", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name: nameField,
          Subject: 'Message from portfolio website!',
          Contact: contactField,
          Message: messageField
        })
      })
      .then(response => response)
      .then(data => {
        console.log('Success:', data);
        setResponse("Message Sent!");
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponse("Error: Unable to send at this time");
      });
      refreshContact();
    }
  }
  
  //Function to handle elements when the screen size changes
  function reportWindowSize() {
    setWidth(window.innerWidth);
    menuToggleBack();
    if (document.getElementsByTagName( 'html' )[0].classList.contains('stuck')) {
      document.getElementsByTagName( 'html' )[0].classList.toggle('stuck');
    }
  }

  function navUp() {
    document.getElementById('Navigation').style.animation="slideUp 0.25s ease-in both";
  }

  function navDown() {
    document.getElementById('Navigation').style.animation="slideDown 0.25s ease-in both";
  }

  //Function to handle elements based on page scrolling
  function reportScrollStatus() {
    var current = document.getElementsByTagName("html")[0].scrollTop;
    console.log(current)

    //When scrolling down, trigger the animation to slide the navbar out of sight
    //When scrolling up, trigger the animation to bring the navbar back into sight
    if (current > scroll && scroll > 80) {
      navUp();
    } else if (current < scroll) {
      navDown();
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
  document.getElementById('sideMenu').style.animation="slideBack 0.25s ease-in both";
  document.getElementById('layer').style.animation="slideLeft 0.25s ease-in both";
  document.getElementsByTagName( 'html' )[0].classList.toggle('stuck');
  document.getElementById('sideMenu').style.opacity = '0';
  document.getElementById('layer').style.opacity = '0';
}
  
  //Listeners for screen resizing and scrolling respectively
  window.onresize = reportWindowSize;
  window.onscroll = reportScrollStatus;

  return (
    <div className="App">
      <div className='layer' id='layer'></div>
      <div className='sideMenu' id='sideMenu'>
        <div className='closeIcon'>
          <img src={x} onClick={menuToggleBack} alt="close icon for menu"></img>
        </div>
        <ul className='sideNav'>
          <a tabIndex="-1" href="#about" onClick={() => {menuToggleBack();navUp();}} style={{float:'right'}}>About</a>
          <a tabIndex="-1" href="#projects" onClick={() => {menuToggleBack();navUp();}} style={{float:'right'}}>Projects</a>
          <a tabIndex="-1" href="#contact" onClick={() => {menuToggleBack();navUp();}} style={{float:'right'}}>Contact</a>
        </ul>
      </div>
      <Navigation windowWidth={width}/>
      <main>
        <div className='introContainer'>
          <section className='intro'>
            <h1>Hello fellow humans, I'm...</h1>
            <h2>Liam Dyer,</h2>
            <h3>Software Developer</h3>
              <p>
               I'm a Computer Science graduate with a hunger for knowledge and
               an aptitude for action. I've recently graduated from the University of Alaska Anchorage
               and am excited to put what I've learned to good use. Take a look!
               </p>
               <div style={{paddingTop: '50px'}}>
                <a tabIndex="-1" href={resume} target="_blank" rel="noreferrer"><button style={{cursor: 'pointer'}} type="submit">Resume</button></a>
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
                        <img src={jv} alt="Javascript icon"></img>
                        <img src={reactPic} alt="React icon"></img>
                        <img src={py} alt="Python icon"></img>
                        <img src={post} alt="PostgreSQL icon"></img>
                        <img src={docker} alt="Docker icon"></img>
                        <img src={cpp} alt="C++ icon"></img>
                      </div>
                    </div>
                  </FadeUp>
                </div>
                <div style={{height: 'auto', flexBasis: '40%', flexGrow: 1, display: 'grid', alignContent: 'center', justifyContent: 'center'}}>
                  <FadeUp>
                    <img className ='self_pic' src={self_pic} alt='Liam Dyer'></img>
                  </FadeUp>
                </div>
              </div>
          </section>
          <section className='projects' id='projects'>
            <FadeUp>
              <h1>Projects</h1>
            </FadeUp>
              <div style={{ width: '100%' }}>
                <FadeUp>
                  <ProjectCards />
                </FadeUp>
              </div>
          </section>
          <section className='contact' id='contact'>
            <FadeUp>
              <h1>Contact</h1>
            </FadeUp>
            <FadeUp>
              <p>Wanna say hi, talk code, have an opportunity?<br></br>Feel free to send a message, I'd love to hear from you!</p>
            </FadeUp>
            <div style={{width: '100%'}}>
              <FadeUp>
                <div className='input-container'>
                  <label id='nameLabel'>Name:</label>
                  <input type='text' maxLength="100" id='emailName'></input>
                  <label id='contactLabel'>Email:</label>
                  <input type='text' maxLength="100" id='emailContact'></input>
                  <label id='messageLabel'>Message:</label>
                  <textarea rows="7" cols="10" maxLength="500" id='emailMessage' spellCheck="false"></textarea>
                  <button id='emailButton' onClick={handleClick}>Send</button>
                  {response !== "" && <p className='response'>{response}</p>}
                </div>
              </FadeUp>
            </div>
            <FadeUp>
                <p style={{marginTop: '6vh', marginBottom: '3vh'}}>You can also reach me at...</p>
            </FadeUp>
            <FadeUp>
              <div className='linkHolder'>
                <a target="_blank" rel="noreferrer" href="mailto:ldyer2@alaska.edu"><img src={mail} alt="Mail icon"></img></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/diam_lyer"><img src={instagram} alt="Instagram icon"></img></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/liam2258'><img src={github} alt="Github icon"></img></a>
              </div>
            </FadeUp>
          </section>
          <footer>
            <div>
              <a target="_blank" rel="noreferrer" href="https://github.com/liam2258/PortfolioWebsite" style={{width: '160px', height:'70px', display:'inline-block'}}>
                <p style={{padding: '0px'}}>Developed & Designed by</p>
                <p style={{padding: 'opx'}}>Liam Dyer</p>
                </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
