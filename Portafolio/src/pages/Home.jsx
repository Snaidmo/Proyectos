import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitch,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home_container">
        <h1 className="home_title">
          <span>Soy Snaidmo</span>
        </h1>
        <p className="home_description">Soy Estudiante de Programación</p>
        <p className="home_description">
          Solo se necesita disciplina y dedicación para lograr tus metas.
        </p>
        <p className="home_description">Futuro Desarrollador Web</p>
      </div>
      <div className="home_img">
        <img src="https://unavatar.io/snaidmo"></img>
      </div>
     
      <div className="home_redes">
        <a href="https://github.com/Snaidmo">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.twitch.tv/snaidmo">
          <FontAwesomeIcon icon={faTwitch} />
        </a>
        <a href="www.instagram.com/snaidmo">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/snaidmo/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </section>
  );
};
