import React, { useState, useEffect } from "react";
import classComponent from "./setState.png";
import functionalComponent from "./useState.png";
import example from "./balance.png";
import useEffectCode from "./useEffect.png";
import setIntervalState from "./intervalState.png";

export const UseStateHook = props => {
  const { back, next } = props;
  const [balance, updateBalance] = useState(0);
  const [amount, setAmount] = useState("");

  const addAmountToBalance = e => {
    e.preventDefault();
    if (!!parseInt(amount)) {
      return updateBalance(parseInt(balance) + parseInt(amount)), setAmount("");
    } else {
      return setAmount("");
    }
  };

  return (
    <div>
      <h4>use state hook</h4>
      <p>takes the place of declaring state in your constructor and setState</p>

      <div className="compare-container">
        <div className="section">
          <div className="inner-box">
            <p className="paragraph">class component</p>
            <img src={classComponent} alt="class component" />
          </div>
        </div>
        <div className="section">
          <div className="inner-box">
            <p className="paragraph">functional component</p>
            <img src={functionalComponent} alt="functional component" />
          </div>
        </div>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>

      <h4>use state demo</h4>
      <div className="inner-box">
        <h1>Your Current Account Balance: {balance}</h1>
        <form onSubmit={addAmountToBalance}>
          <input
            type="text"
            value={amount}
            placeholder="Type in an amount"
            onChange={e => setAmount(e.target.value)}
          />
        </form>
        <button className="accent-btn" onClick={() => updateBalance(0)}>
          Clear Account
        </button>
      </div>

      <div className="spacer"></div>

      <div className="inner-box">
        <p className="paragraph">source code</p>
        <img src={example} alt="something" />
      </div>

      <div className="spacer"></div>

      <button className="btn" onClick={back}>
        Back
      </button>

      <button className="btn" onClick={next}>
        Next
      </button>
    </div>
  );
};

export const UseEffectHook = props => {
  const { back, next } = props;
  const [showTimer, setTimer] = useState(false);
  return (
    <div>
      <h4>use effect hook</h4>
      <p>use effect hook is used to handle side effects of state</p>

      <div className="inner-box">
        <div className="timer">{showTimer && <Timer />}</div>
        <button className="accent-btn" onClick={() => setTimer(!showTimer)}>
          {showTimer ? "Remove Timer" : "Show Timer"}
        </button>
      </div>

      <div className="spacer"></div>

      <h4>Code Comparison</h4>
      <div className="compare-container">
        <div className="section">
          <div className="inner-box">
            <p className="paragraph">class component example</p>
            <img src={setIntervalState} alt="set interval state code" />
          </div>
        </div>
        <div className="section">
          <div className="inner-box">
            <p className="paragraph">useEffect example</p>
            <img src={useEffectCode} alt="use effect code" />
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <button className="btn" onClick={back}>
        Back
      </button>
      <button className="btn" onClick={next}>
        Next
      </button>
    </div>
  );
};

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return <>Timer: {time}</>;
};
