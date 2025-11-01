import "./styles.css";
import Home from "./Home";
import About from "./about";
import Skills from "./skills";
import Works from "./works";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import Navbar from "./Navbar";
import { useState } from "react";
export default function App() {
  // function openComponent(value) {
  //   console.log(value);
  //   setvalue(value);
  // }
  function openComponent(value) {
    const element = document.getElementById(value);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
  const [value, setvalue] = useState("home");
  return (
    <div className="App">
      <Navbar openComponent={openComponent}></Navbar>
      {/* {value == "home" ? <Home></Home> : ""}
      {value == "about" ? <About></About> : ""}

      {value == "skills" ? <Skills></Skills> : ""}
      {value == "works" ? <Works></Works> : ""}
      {value == "experience" ? <Experience></Experience> : ""}
      {value == "contactMe" ? <ContactMe></ContactMe> : ""}  */}
      <Home></Home>
      <About></About>[]
      <Skills></Skills>
      <Works></Works>
      <Experience></Experience>
      <ContactMe></ContactMe>
    </div>
  );
}
