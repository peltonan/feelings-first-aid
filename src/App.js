import { useState } from 'react';
import './App.css';
import FirstAidKit from './images/favpng_first-aid-kit.png'
import { questions } from './questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // useState(default value) returns 2 things:
  // 1: a variable (ex. const) for your state that you get to name
  // 2: a function for changig the state (ex. setState(my new state)) that you get to name
  const [isDone, setIsDone] = useState(false)
  console.log('number of questions', questions.length);

  console.log('currentQuestion', currentQuestion)
  console.log('isDone', isDone)
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
      {!isDone && (
        <div>
          <h2>{currentQuestion + 1}. {questions[currentQuestion].question}</h2>
          <div className="wrapper">
            <section>
              <div>
                <input type="radio" id={`question-one-${currentQuestion}`} className="answer" name={`select-${currentQuestion}`} value={true} checked={null} />
                <label htmlFor={`question-one-${currentQuestion}`} >
                  <h3>YES</h3>
                  <p>{questions[currentQuestion].yesValue}</p>
                </label>
              </div>
              <div>
                <input type="radio" id={`question-two-${currentQuestion}`} className="answer" name={`select-${currentQuestion}`} value={false} checked={null} />
                <label htmlFor={`question-two-${currentQuestion}`}>
                  <h3>NO</h3>
                  <p>{questions[currentQuestion].noValue}</p>
                </label>
              </div>
            </section>
          </div>
        </div>
      )}
      {isDone && (
        <div>DONE!!!!!</div>

      )}
      <div className="navigationWrapper">
        {currentQuestion !== 0 && <button className="navigation" onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</button>}
        {currentQuestion < questions.length - 1 && <button className="navigation" onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>}
        {currentQuestion >= questions.length - 1 && <button className="done" onClick={() => setIsDone(true)}>DONE</button>}
      </div>



      <footer>
        <span>Author: Annette Peltonen</span>
      </footer>
    </div>

  );
}

export default App;
