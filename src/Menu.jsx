/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { CommonComponent } from "./CommonComponent";
import { CardOne } from "./CardOne";

const data = [
  {
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'John Doe',
    desc: 'Developer',
  },
  {
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'John Doe',
    desc: 'Developer',
  },
  {
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'John Doe',
    desc: 'Developer',
  },
]

function Menu({ dashcount }) {
  const ref = useRef(0)
  const inputRef = useRef(null)
  const [value, setValue] = useState({})
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
  console.log('refernce', ref?.current)
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    ref.current = ref.current + 1
    alert(`You clicked ${ref.current} times`)
    setCount(count + 1)
  }

  const inputChange = () => {
    inputRef.current.focus()
  }

  const handleChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    console.log('useEffect')
  }, [])

  console.log('on change value', value)


  return (
    <div>
      <p onClick={() => handleClick()}>Hello all {dashcount}</p>
      <Card count={count} person={person} text={text} setText={setText} />
      <CommonComponent
        img={
          "https://images.pexels.com/photos/26985366/pexels-photo-26985366/free-photo-of-bolu-golcuk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      />
      {
        data?.map((item, index) => (
          <CardOne key={index} img={item.img} title={item.title} desc={item.desc} />
        ))
      }

      <input ref={inputRef} /> <button onClick={() => inputChange()}>Reference</button> 
      <input name="username" type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default Menu;

//const [state, setState] = useState(initialValue)
