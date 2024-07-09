import { useState } from "react";
import { Card } from "./Card";

function Menu({ dashcount }) {
  const person = [
    {
      name: "John",
      age: 20,
    },
    {
      name: "Doe",
      age: 25,
    },
  ];
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");
  return (
    <div>
      <p onClick={() => setCount(count + 1)}>Hello all {dashcount}</p>
      <Card count={count} person={person} text={text} setText={setText} />
    </div>
  );
}

export default Menu;

//const [state, setState] = useState(initialValue)
