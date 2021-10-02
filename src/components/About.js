import React, { useState } from "react";

export default function About() {

  const [mystyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnName, setBtnName] = useState("State")

  const darkMode = () => {
      
    if (mystyle.color === "black"){
      setBtnName("Light");
      setMyStyle ({
        color: "white",
        backgroundColor: "black",
      });
    }
    else{
      setBtnName("Dark");
      setMyStyle ({
            color: "black",
            backgroundColor: "white",
          });
    }
  };
  return (
    <div className="container" style={mystyle}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        laudantium odio obcaecati inventore maiores unde impedit, dolorem
        quibusdam quis eligendi numquam cum sed aspernatur aperiam repellendus
        accusantium, quae dolor doloribus.
      </p>
      <but className="btn btn-dark" onClick={darkMode}>
        {btnName}{" "}
      </but>
    </div>
  );
}
