import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FollowMouse } from "./components/FollowMouse";
import { Navbar } from "./components/NavBar";
import { Home } from "./assets/pages/Home";
import { AboutMe } from "./assets/pages/Aboutme";
import { Skills } from "./assets/pages/Skills";
import { Projects } from "./assets/pages/Projects";

function App() {
  return (
    <>
      <FollowMouse></FollowMouse>
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
}

export default App;
