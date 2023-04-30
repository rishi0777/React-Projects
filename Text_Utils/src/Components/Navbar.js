import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const [btnText, setBtnText] = useState("Dark Mode On");

  const togglePageTheme = () => {
    if (props.mode == "light") {
      setBtnText("Dark Mode On");
    } else {
      setBtnText("Dark Mode Off");
    }
    props.toggleTheme();
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
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
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={togglePageTheme}
              />
              <label
                className={`form-check-label mx-3 text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckChecked"
              >
                {btnText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

//this will show the warning in console if data type of props passed to this component is not string
//Due to presence of isRequired if no prop value is passed for the prop title or about then also it will
// show a warning on console
Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
};

//setting deafult values for props, in case no values are passed
Navbar.defaultProps = { mode: "light" };
export default Navbar;
