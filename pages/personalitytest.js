import testObject from "../data/testObject";
import React, { useState } from "react";

export default function personalitytest() {
  const [score, setScore] = useState({});
  const [counter, setCounter] = useState(0);

  //In the future, I might make a result state object to collect the answers to each question "IF", for example, we want to make a graph of his answers to show if he 25% extrovert and 75% introvert. ({1:a, 2:b, ...})

  console.log("Score: ", score, counter);

  let currentQuestion = testObject[counter];
  let currentColumn = testObject[counter].personalityColumn;

  const handleAnswer = (letter, column) => {
    let scoreTemp = score[column] || 0;

    if (letter === "a") {
      setScore({ ...score, [column]: scoreTemp + 1 });
    }

    if (letter === "b") {
      setScore({ ...score, [column]: scoreTemp - 1 });
    }

    //if(counter === 69) then we want to call a function that takes in the state score object and calculate the score with that object.
    //else

    let counterTemp = counter;
    setCounter(counterTemp + 1);
  };

  return (
    <div>
      <h1>{`${currentQuestion.question}`}</h1>
      <div>
        {`a. ${testObject[counter].a}`}
        <input
          type="button"
          value="a"
          onClick={(e) => handleAnswer(e.target.value, currentColumn)}
        ></input>
      </div>
      <div>
        {`b. ${testObject[counter].b}`}
        <input
          type="button"
          value="b"
          onClick={(e) => handleAnswer(e.target.value, currentColumn)}
        ></input>
      </div>
    </div>
  );
}
