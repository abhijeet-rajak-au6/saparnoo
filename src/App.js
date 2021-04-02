import React, { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [mainText, setMainText] = useState("");
  const [mainSubmitClicked, setMainSubmitClicked] = useState(false);
  const [childSubmitClicked, setChildSubmitClicked] = useState(false);
  let output = [];
  const handleAddInput = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleMainSubmit = () => {
    setMainSubmitClicked(true);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "mainText") {
      setMainText(e.target.value);
    } else {
      let textInput = text;
      // setText((text[e.target.name]: e.target.value));
      textInput[e.target.name] = e.target.value;
      setText(textInput);
    }
  };
  const hendlechildSubmitClicked = () => {
    setChildSubmitClicked(true);
    // for (let i = 0; i < count; i++) {
    //   console.log(text[i]);
    //   output.push(<p>{text[i]}</p>);
    // }
    // console.log(output);
  };

  let dynamicInput = [];
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      dynamicInput.push(
        <input
          key={i + 1}
          onChange={handleChange}
          style={{ marginTop: "20px" }}
          name={i}
          type="text"
          placeholder="enter text ..."
        />
      );
    }
    dynamicInput.push(
      <button
        style={{ width: "100px" }}
        onClick={hendlechildSubmitClicked}
        style={{ marginTop: "30px" }}
      >
        Submit
      </button>
    );
  }
  return (
    <>
      <div className="App" style={{ display: "flex", flexDirection: "column" }}>
        <input
          style={{ padding: "20px" }}
          onChange={handleChange}
          name="mainText"
          type="text"
          placeholder="enter text ..."
        />
        <button style={{ width: "50px" }} onClick={handleAddInput}>
          Add
        </button>
        <button style={{ width: "100px" }} onClick={handleMainSubmit}>
          Main Submit
        </button>
        {dynamicInput}
      </div>

      {mainSubmitClicked && (
        <div>
          <h1>Output</h1>
          <p>Main text: {mainText}</p>
        </div>
      )}
      {childSubmitClicked && (
        <div>
          <h1>Output</h1>
          {text.map((txt) => (
            <p>{txt}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
