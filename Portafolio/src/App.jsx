import "./App.css";
import { FollowMouse } from "./components/FollowMouse";
import { Navbar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/Aboutme";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";

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
