import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Overview from "./Overview";
import UseStateHook from "./UseStateHook";
import UseEffectHook from "./UseEffectHook";

function App() {
  const [page, setPage] = useState("start");
  return (
    <div className="App">
      <h1>React Hooks Tutorial</h1>
      {page === "start" && (
        <button onClick={() => setPage("overview")}>Get Started</button>
      )}
      {page === "overview" && <Overview onClick={() => setPage("useState")} />}
      {page === "useState" && (
        <UseStateHook onClick={() => setPage("useEffect")} />
      )}
      {page === "useEffect" && <UseEffectHook />}
    </div>
  );
}

export default App;
