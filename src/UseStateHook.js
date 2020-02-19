import React from "react";

const UseStateHook = props => {
  const { onClick } = props;
  return (
    <div>
      <h3>use state hook</h3>
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default UseStateHook;
