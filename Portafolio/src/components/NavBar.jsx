import "../App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon,faSun } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/img/logo.png";
import { useEffect } from "react";

export const Navbar = () => {
 
  // This component renders the navigation bar for the portfolio
  // It includes links to different sections of the portfolio and social media icons  
  // The navigation bar is styled with CSS and includes a logo image
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
    // Toggle the light mode class on the body element
    document.body.classList.toggle('dark-mode', darkMode);
    
    // Cleanup function to remove the class when the component unmounts or lightMode changes
    return () => {
      document.body.classList.remove('dark-mode');
    };
}, [darkMode]);
 

  return (
    <section className="navbar" id="navbar">
      <nav className="nav">
        <div className="nav_logo">
          <a href="#home">
            <img src={image}></img>
          </a>
        </div>
        <div className="nav_links">
          <a href="#home">Home</a>
          <a href="#aboutme">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="nav_redes">
         
          <button onClick={() =>setDarkMode(!darkMode)} className="redes">
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </nav>
    </section>
  );
};
