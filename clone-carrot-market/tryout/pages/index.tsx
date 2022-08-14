import React from "react";
import Link from "next/link";

const Thing: React.FC<{ msg: string }> = (props) => {
  return <div>{props.msg}</div>;
};

export default () => (
  <div>
    Hello World. <Thing msg="hello" />
    <Link href="/form">
      <a>Form</a>
    </Link>
    <Link href="/enter">
      <a>Enter</a>
    </Link>
  </div>
);
