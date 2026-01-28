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
      <FollowMouse/>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      </>
  );
}

export default App;
