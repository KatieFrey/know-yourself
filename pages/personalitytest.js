import testObject from "../data/testObject";
import React, { useState } from "react";

export default function personalitytest() {
  let counter = 0;
  let currentQuestion = testObject[counter];
  let currentColumn = testObject[counter].personalityColumn;
  const [score, setScore] = useState({});

  const handleAnswer = (letter, column) => {
    setScore({ ...score, [column]: letter });
    counter++;
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
