import React from "react";

const Overview = props => {
  const { onClick } = props;
  return (
    <div>
      <h3>What are Hooks?</h3>
      <h3>Why should we use them?</h3>
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default Overview;
