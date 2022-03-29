import { useState } from 'react';
import './App.css';
import FirstAidKit from './images/favpng_first-aid-kit.png'

function App() {
  /*  const [counter, setCounter] = useState(0)
   const clicked = () => {
     let newNum = counter
     newNum++
     setCounter(newNum)
   } */
  return (

    <div className="App">
      <h1>Feelings First Aid</h1>
      <img src={FirstAidKit} className="firstAidKit" alt="First Aid Kit"></img>
      {/*       <h2>{counter}</h2>
      <button onClick={clicked}>Click me!</button>
    </div> */}
      <div className="intro">If you're feeling happy, fine or any positive feelings.
        You most likely don't need feelings first aid.</div>
      <div className="intro">Go live your life and enjoy!</div>
      <div>
        <div className="intro">Now I will ask you yes/no questions to figure out where you need band-aids&hearts;</div>
      </div>
      <h2>1. Did you not get enough sleep this night? Have you slept too little most days this week?</h2>
      <div className="wrapper">
        <section>
          <div>
            <input type="radio" id="question-one" className="answer" name="select" value="1" checked />
            <label for="question-one">
              <h3>YES</h3>
              <p>I'm tired asf/I suffer from insomnia</p>
            </label>
          </div>
          <div>
            <input type="radio" id="question-two" className="answer" name="select" value="2" />
            <label for="question-two">
              <h3>NO</h3>
              <p>I slept like a baby</p>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
