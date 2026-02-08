import { useState } from "react";
import "./index.css";
function App() {
  const topics = ["Learn React", "Apply for jobs", "Get Hired"];
  const [step, setStep] = useState(0);

  function clickHandlerIncrement() {
    setStep((step) => (step < 3 ? step + 1 : 3));
  }
  function clickHandlerDecrement() {
    setStep((step) => (step > 0 ? step - 1 : 0));
  }
  return (
    <>
      <div className="container">
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
        </div>
        <div className="topics">
          {step > 0 && <p className="topic">{topics[step - 1]}</p>}
        </div>
        <div className="buttons">
          <button onClick={clickHandlerDecrement}>Previous</button>
          <button onClick={clickHandlerIncrement}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
