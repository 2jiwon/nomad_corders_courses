import React, { useState, useEffect } from 'react';
import Button from "./Button";
import styles from "./App.module.css";

function Hello() {
  useEffect(() => {
    console.log("Hello runs.");
  }, []);
  return (<h1>Hello</h1>);
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
