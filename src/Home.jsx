import { createContext, useState } from "react";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import { CommonComponent } from "./CommonComponent";

export const NewContext = createContext();

function Home() {
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const newContextValue = {
    handleChange,
    formData,
  }

  console.log('form data', formData)

  return (
    <NewContext.Provider value={newContextValue}>
      <div>
        <h1 onClick={() => setToggle(true)}>Home page</h1>
        {toggle ? <Dashboard /> : <Menu />}
        <CommonComponent
          about
          img={
            "https://images.pexels.com/photos/26955132/pexels-photo-26955132/free-photo-of-the-singapore-ferris-wheel-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
        />
      </div>
    </NewContext.Provider>
  );
}

export default Home;

//ternary operator
