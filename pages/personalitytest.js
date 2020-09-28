import testObject from "../data/testObject";
import { calculate } from "../utils/calculate";
import React, { useState, useEffect } from "react";

export default function personalitytest() {
  const [score, setScore] = useState({});
  const [counter, setCounter] = useState(0);

  let calculation = null;

  useEffect(() => {}, [calculation]);

  //In the future, I might make a result state object to collect the answers to each question "IF", for example, we want to make a graph of his answers to show if he 25% extrovert and 75% introvert. ({1:a, 2:b, ...})

  console.log("Score: ", score, counter);

  const handleAnswer = (letter, column) => {
    if (counter === 7) {
      calculation = calculate(score);
      console.log("Calculation: ", calculation);
    }

    let scoreTemp = score[column] || 0;

    if (letter === "a") {
      setScore({ ...score, [column]: scoreTemp + 1 });
    }

    if (letter === "b") {
      setScore({ ...score, [column]: scoreTemp - 1 });
    }

    let counterTemp = counter;
    setCounter(counterTemp + 1);
  };

  //let currentQuestion = testObject[counter];
  // let currentColumn = testObject[counter].personalityColumn;

  return (
    <div>
      {testObject[counter].submit ? (
        <input type="button" value="Submit for testing" />
      ) : (
        <div>
          <h1>{`${testObject[counter].question}`}</h1>
          <div>
            {`a. ${testObject[counter].a}`}
            <input
              type="button"
              value="a"
              onClick={(e) =>
                handleAnswer(
                  e.target.value,
                  testObject[counter].personalityColumn
                )
              }
            ></input>
          </div>
          <div>
            {`b. ${testObject[counter].b}`}
            <input
              type="button"
              value="b"
              onClick={(e) =>
                handleAnswer(
                  e.target.value,
                  testObject[counter].personalityColumn
                )
              }
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}
