import React from "react";

export const Alert = (props) => {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.substr(1);
  };
  return (
    <div style={{ height: "2.4rem" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{`${capitalize(props.alert.type)}:`}</strong>{" "}
          {` ${props.alert.message}`}
        </div>
      )}
    </div>
  );
};

//props && => is checking if props is null then it returns nothing because when props
// is null then props evaluates to false and since jsx is converted to JavaScript calls by
// bable so it does not return anything and thus we do not get the TypeError(Unable to
// access the property of undefined) since div is not evaluated, if we do not use this
// then react will show TypeError because it cant access the properties of null object.
