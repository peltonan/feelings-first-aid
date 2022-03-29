import { useState } from 'react';
import './App.css';
import FirstAidKit from './images/favpng_first-aid-kit.png'
import { questions } from './questions';

function App() {
  return (

    <div className="App">
      <h1>Feelings First Aid</h1>
      <img src={FirstAidKit} className="firstAidKit" alt="First Aid Kit"></img>
      <div className="intro">If you're feeling happy, fine or any positive feelings.
        You most likely don't need feelings first aid.</div>
      <div className="intro">Go live your life and enjoy!</div>
      <div>
        <div className="intro">Now I will ask you yes/no questions to figure out where you need band-aids&hearts;</div>
      </div>
      {questions.map((questionBox, index) => {
        console.log(index)
        return (
          <div>
            <h2>{index + 1}. {questionBox.question}</h2>
            <div className="wrapper">
              <section>
                <div>
                  <input type="radio" id={`question-one-${index}`} className="answer" name={`select-${index}`} value="1" checked />
                  <label htmlFor={`question-one-${index}`} >
                    <h3>YES</h3>
                    <p>{questionBox.yesValue}</p>
                  </label>
                </div>
                <div>
                  <input type="radio" id={`question-two-${index}`} className="answer" name={`select-${index}`} value="2" />
                  <label htmlFor={`question-two-${index}`}>
                    <h3>NO</h3>
                    <p>{questionBox.noValue}</p>
                  </label>
                </div>
              </section>
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default App;
