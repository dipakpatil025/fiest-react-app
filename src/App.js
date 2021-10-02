import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import MeraForm from "./components/MeraForm";
import Navbar from "./components/Navbar";

function App() {
  const [darkModeStatus, setDarkModeStatus] = useState("light");
  console.log(darkModeStatus);
  const togleMode = () => {
    if (darkModeStatus === "dark") {
      setDarkModeStatus("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.style.color = "black";
    } else {
      setDarkModeStatus("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/about">
            <Navbar
              titles="dipak"
              mode={darkModeStatus}
              togleMode={togleMode}
            />
            <About />
          </Route>

          <Route exact path="/">
            <Navbar
              titles="dipak"
              mode={darkModeStatus}
              togleMode={togleMode}
            />
            <div className="container">
              <MeraForm
                heading="Mere Heading"
                mode={darkModeStatus}
                togleMode={togleMode}
              />
            </div>
          </Route>
        </Switch>
      </Router>
   
    </>
  );
}

export default App;
