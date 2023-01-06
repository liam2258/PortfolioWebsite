import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import FadeUp from './Components/animation';
import self_pic from './Images/self_pic.jpg';
import jv from './Images/jv.svg';
import py from './Images/py.svg';
import post from './Images/post.svg';
import reactPic from './Images/react.svg';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <main>
        <div></div>
        <div className='container'>
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
                    </div>
                  </div>
                </FadeUp>
                <FadeUp>
                  <img className ='self_pic' src={self_pic} alt='Me!'></img>
                </FadeUp>
              </div>
          </section>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
