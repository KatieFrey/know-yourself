import testObject from "../data/testObject";

export default function personalitytest() {
  let counter = 0;
  let currentQuestion = testObject[counter];
  return (
    <div>
      <h1>{`${currentQuestion.question}`}</h1>
      <div>
        {`a. ${testObject[counter].a}`}
        <button type="input" value="a"></button>
      </div>
      <div>
        {`b. ${testObject[counter].b}`}
        <button type="input" value="b"></button>
      </div>
    </div>
  );
}
