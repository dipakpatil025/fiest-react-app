import React from "react";

// impt
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        // className={`navbar navbar-expand-lg navbar-${props.mode?"darke":"light"} bg-${props.mode}`}
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.titles}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/form">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/#">
                  {props.status}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="mx-1" style={{backgroundColor:"#0984e3",width:20+'px',height:20+'px', border:2+'px solid black'}}>
            {/* #74b9ff */}
            </div>
            <div className="mx-1" style={{backgroundColor:"#d63031",width:20+'px',height:20+'px', border:2+'px solid black'}}>
            {/* #ff7675 */}
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.togleMode}
                />
              <label className={`form-check-label text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">
                Enable Darkmode
              </label>
                </div>
              </div>
        </div>
      </nav>
    </div>
  );
}

// proptypes
Navbar.propTypes = {
  status: PropTypes.string,
  darkModeStatus: PropTypes.string,
};

Navbar.defaultProps = { status: "Inactive" };
// Navbar.defaultProps = { mode: "dark" };
