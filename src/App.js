import {evaluate} from 'mathjs'
import { useState } from 'react';
import './App.css';

function App() {

  const clearBtn = ["CE"]
  const otherBtns = ["0", "="]
  const operations = ["+", "-", "*", "/"]
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

  const [numDisplay, setNumDisplay] = useState("")
  // Needs to listen for something

  // If statement the normal way makes it a little easier to read
  const btnPress = (value) => {
    if("CE" === value) {
      setNumDisplay("")
    } else if ("=" === value) {
      setNumDisplay(evaluate(numDisplay))
    }
    else {
      setNumDisplay(numDisplay + value)
    }
  }

  return (


    <div className="App">

      <div className="calculator">

      <div className="popTart">
        <div className="sumDisplay">
          <p>{numDisplay}</p>
        </div>

        {clearBtn.map((index) => {
              return (
                <button onClick={() => btnPress(index)} key={index}>{index}</button>
            )
          })}
      </div>

        <div className="buttons">
          {numbers.map((index) => {
            return (
              <button onClick={() => btnPress(index)} key={index}>{index}</button>
            )
          })}

          {otherBtns.map((index) => {
            return (
              <button onClick={() => btnPress(index)} key={index}>{index}</button>
            )
          })}

          {operations.map((index) => {
            return (
              <button onClick={() => btnPress(index)} key={index}>{index}</button>
            )
          })}
        </div>

      </div>
      
    </div>
  );
}

export default App;

// Grrrr
// {/* <div className="buttons">
// <button>7</button>
// <button>8</button>
// <button>9</button>
// <button>CE</button>
// <button>4</button>
// <button>5</button>
// <button>6</button>
// <button>*</button>
// <button>1</button>
// <button>2</button>
// <button>3</button>
// <button>/</button>
// <button>+</button>
// <button>0</button>
// <button>-</button>
// <button>=</button>
// </div> */}