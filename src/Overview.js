import React, { useState } from "react";

export const Overview = () => {
  const [count, setCount] = useState(0);
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
        <button className="btn" onClick={() => updateBalance(0)}>
          Clear Account
        </button>
      </div>
    </div>
  );
};

// export Overview1 extends React.Component {
//   state = {
//     count: 0
//   };
//
//   increaseCount = () => {
//     this.setState(prevState => {
//       return { count: prevState.count + 1 };
//     });
//   };
//
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1>Count: {count}</h1>
//         <button onClick={this.increaseCount}>Increase Count</button>
//       </div>
//     );
//   }
// }
