import React, { useState, useEffect } from "react";

export const About = (props) => {
  let myStyle = {};

  if (props.mode === "light") {
    myStyle = { color: "black", backgroundColor: "#FFF" };
  } else {
    myStyle = { color: "white", backgroundColor: "#234A67" };
  }

  return (
    <div className="container my-4">
      <h2
        className="my-4"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        ABOUT
      </h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count, toggling case of
              your text, removing extra spaces, etc.
            </div>
          </div>
        </div>

        <div style={myStyle} className="accordion-item">
          <h2 style={myStyle} className="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant
              character count and word count and statistics for a given text.
            </div>
          </div>
        </div>

        <div style={myStyle} className="accordion-item">
          <h2 style={myStyle} className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter application works in any web browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It is suited
              for counting characters in blogs, books, excel documents, pdf
              documnents, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
