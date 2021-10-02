import React, { useState } from "react";




export default function MeraForm(props) {
  const handleClicks = () => {
    // console.log("Uppercase  "+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClicksLower = () => {
    // console.log("Uppercase  "+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Function isdasd sa clicked");
    setText(event.target.value);
  };
  const handleEmailExtract = (event) => {
    let newText = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
    );
    alert(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    console.log(text);
  };

  const [text, setText] = useState("");
  // setText("dipak");
  return (
    <>
      
      <div className="container">
      
      
        <h1>
          {props.heading} {/*text*/}
        </h1>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button className="btn btn-primary my-2 mx-2" onClick={handleClicks}>
          Convert UpperCase3d
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleClicksLower}
        >
          Convert LowerCase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleEmailExtract}
        >
          Extract Email
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container my-2">
        <h1>text Summary</h1>
        <p>
          {text.split(" ").length} words,{text.length} charecters
        </p>
      </div>
    </>
  );
}
