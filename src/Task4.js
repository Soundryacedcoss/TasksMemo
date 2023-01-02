import React, { useState } from "react";

export const Task4 = () => {
  const [textarea, setTextarea] = useState("");
  const [word, setWord] = useState("");
  const [characters, setCharacters] = useState("");
  const Summary = () => {
    var a = textarea.split(" ");
    setWord(a.length);
    setCharacters(textarea.length);
    console.log(a.length);
  };
  const TextareaHandler = (e) => {
    var textareaValue = e.target.value;
    setTextarea(textareaValue);
  };
  const UpperCaseButtonHandler = () => {
    setTextarea(textarea.toUpperCase());
  };
  const LowerCaseButtonHandler = () => {
    setTextarea(textarea.toLowerCase());
  };
  return (
    <div>
      <h2>Task4</h2>
      <b>Text Utility App</b>
      <div>
        <textarea
          name=""
          id=""
          cols="40"
          onChange={TextareaHandler}
          value={textarea}
          rows="10"
        ></textarea>
      </div>
      <div>
        <button onClick={UpperCaseButtonHandler} className="button">
          UpperCase
        </button>
        <button onClick={LowerCaseButtonHandler} className="button">
          LowerCase
        </button>
        <div>
          <button className="button" onClick={Summary}>
            Summary
          </button>
        </div>
        <h2>Summary</h2>
        <p>
          {" "}
          {word} words and {characters} characters
        </p>
      </div>
    </div>
  );
};
