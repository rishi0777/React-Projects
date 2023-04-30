import React, { useState } from "react";

export const Textarea = (props) => {
  const [text, setText] = useState("");
  let timeout;

  const textChanged = (e) => {
    setText(e.target.value);
  };

  const removeAlert = () => {
    timeout = setTimeout(() => {
      // console.log("alert");
      props.setAlert(null);
    }, 2000);
  };

  const notEmpty = () => {
    if (text === "") {
      props.showAlert(
        "warning",
        "No text written in text-area to perform operation"
      );
      return false;
    } else {
      return true;
    }
  };

  const lowerCaseButton = () => {
    if (notEmpty()) {
      setText(text.toLowerCase());
      props.showAlert("success", "Converted To Lower Case");
    }
    if (props.alert !== null) {
      //agar pehle se koi alert exist kar raha hai
      //matlab uska timeout chal raha hoga
      //remove previous timeout from callbackStack
      // console.log("pehle se alert the");
      clearTimeout(timeout);
      // console.log("Remove kar diya use");
      // aur naya timeout start karo current alert ke liye using removeAlert();
      // console.log("naya alert create kiya");
      // removeAlert();
    } else {
      //agar pehel se koi alert exist nahi kar raha hai
      // to naya alert create karoge ,naye timeout ke saath
      // console.log("naya alert start hua hai");
      removeAlert();
    }
  };

  const upperCaseButton = () => {
    if (notEmpty()) {
      setText(text.toUpperCase());
      props.showAlert("success", "Converted To Upper Case");
    }
    if (props.alert !== null) {
      clearTimeout(timeout);
    } else removeAlert();
  };

  const titleCaseButton = () => {
    if (notEmpty()) {
      let arr = text.split(" ");
      const newtText = arr.map((word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      });

      setText(newtText.join(" "));
      props.showAlert("success", "Converted To Title Case");
    }
    if (props.alert !== null) {
      clearTimeout(timeout);
    } else removeAlert();
  };

  const extraSpaceButton = () => {
    if (notEmpty()) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("success", "Removed Extra Spaces");
    }
    if (props.alert !== null) {
      clearTimeout(timeout);
    } else removeAlert();
  };

  const copyButton = () => {
    if (notEmpty()) {
      navigator.clipboard.writeText(text);
      props.showAlert("success", "Text Copied");
    }
    if (props.alert !== null) {
      clearTimeout(timeout);
    } else removeAlert();
  };

  const clearButton = () => {
    if (notEmpty()) {
      setText("");
      props.showAlert("danger", "Text Cleared");
    }
    if (props.alert !== null) {
      clearTimeout(timeout);
    } else {
      removeAlert();
    }
  };

  return (
    <div>
      <div className="container my-4">
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "rgb(27 54 80)" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          value={text}
          onChange={textChanged}
          id="myBox"
          rows="10"
        />

        <div
          onClick={upperCaseButton}
          className="mt-3 btn btn-primary"
          style={{ marginRight: "0.6rem" }}
        >
          Upper Case
        </div>
        <div
          onClick={lowerCaseButton}
          className="mt-3 btn btn-primary"
          style={{ marginRight: "0.6rem" }}
        >
          Lower Case
        </div>
        <div
          onClick={titleCaseButton}
          className="mt-3 btn btn-primary"
          style={{ marginRight: "0.6rem" }}
        >
          Title Case
        </div>
        <div
          onClick={extraSpaceButton}
          className="mt-3 btn btn-primary"
          style={{ marginRight: "0.6rem" }}
        >
          Remove Extra Space
        </div>
        <div
          onClick={copyButton}
          className="mt-3 btn btn-primary"
          style={{ marginRight: "0.6rem" }}
        >
          Copy To 📋
        </div>
        <div
          onClick={clearButton}
          className="mt-3 btn btn-primary"
          style={{ marginRight: "0.6rem" }}
        >
          Clear
        </div>

        <div
          className="mt-3"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h3>Summary</h3>
          <span>
            Word:{" "}
            {
              text.split(/\s+/).filter((word) => {
                return word !== "";
                //return word.length!==0//bith are correct
              }).length
            }
          </span>
          <span className="mx-4">Characters: {text.length}</span>
          <h5 className="my-2">Preview</h5>
          <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </div>
  );
};
