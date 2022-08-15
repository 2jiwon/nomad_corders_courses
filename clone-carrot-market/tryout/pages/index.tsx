import React from "react";
import Link from "next/link";
import { useState } from "react";

export default () => {
  const [user, setUser] = useState([]);

  return (
    <div>
      <Link href="/form">
        <a>Form</a>
      </Link>
      |
      <Link href="/enter">
        <a>Enter</a>
      </Link>
      <h1>Home</h1>
      {user && user?.username !== undefined ? "Hello " + user.username : ""}
      <br />
    </div>
  );
};
