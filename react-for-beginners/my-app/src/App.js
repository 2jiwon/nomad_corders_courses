import React, { useState, useEffect } from 'react';
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("CALL THE API...");
  }, [keyword]);
  return (
    <div>
      <input type="text" placeholder='Search...' onChange={onChange} value={keyword} />
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
