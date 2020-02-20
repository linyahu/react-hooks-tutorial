import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Overview } from "./Overview";
import { UseStateHook, UseEffectHook } from "./Hooks";

function App() {
  const [page, setPage] = useState("start");

  const introduction = (
    <div>
      <h4>What are React Hooks?</h4>
      <p>put in some stuff about react hooks</p>

      <h4>Why should we use them?</h4>
      <p>put in some stuff about react hooks</p>
      <div className="spacer"></div>
      <button className="btn" onClick={() => setPage("useState")}>
        GET STARTED
      </button>
    </div>
  );

  return (
    <div className="App">
      <h1>Using React Hooks</h1>
      <div className="box">
        {page === "start" && introduction}
        {page === "useState" && (
          <UseStateHook
            next={() => setPage("useEffect")}
            back={() => setPage("start")}
          />
        )}
        {page === "useEffect" && (
          <UseEffectHook
            next={() => setPage("")}
            back={() => setPage("useState")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
