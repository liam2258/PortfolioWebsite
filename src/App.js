import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import FadeUp from './Components/animation';

function App() {

  return (
    <div className="App">
      <Navigation/>
      <main>
        <div></div>
        <div>
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
            <div>
              <FadeUp>
                <h1>About</h1>
                <p>Thank you for stopping by my website!</p>
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
