import "./App.css";
import Home from "./Home";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Product } from "./Product";
import { Error } from "./Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
