import { useContext } from "react";
import Menu from "./Menu";
import { NewContext } from "./Home";

const Dashboard = () => {
  const count = 0;
  const { handleChange, formData } = useContext(NewContext);
  return (
    <div>
      <h1>Hello, {formData.username}</h1>
      <Menu dashcount={count} />
      <input name="username" type="text" onChange={(e) => handleChange(e)} />
      <input name="email" type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Dashboard;
