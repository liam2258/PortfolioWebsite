import './App.css';
import Navigation from './Components/Navigation';

function App() {

  var a = 1;

  return (
    <div className="App">
      <Navigation/>
      <main>
        <div></div>
        <div>
          <section className='intro'>
            <h1>Hello fellow humans, I'm...</h1>
            <h2>Liam Dyer,</h2>
            <h3>Programmer Extraordinaire!</h3>
            <p>I'm a Computer Science student with a hunger for knowledge and
               an aptitude for action. Currently I'm studying at the University of Alaska Anchorage
               and am excited to put what I've learned to good use.
               </p>
          </section>
          <section>
            { a === 1 ?
            <div>
              <h1>Hello fellow humans!</h1>
              <h2>I'm Liam Dyer</h2>
            </div>
            : <div></div>
            }
          </section>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
