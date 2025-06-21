import { CardProject } from "../components/CardProject";
import followCardImage from "../assets/img/logo.png"
import ticTacToeImage from "../assets/img/logo.png";
import mouseFollowImage from "../assets/img/logo.png";
import portafolioImage from "../assets/img/logo.png";
export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects_container">
        <h2 className="projects_title">Mis Recientes Proyectos</h2>
        <p className="projects_description">
          Estas a unos pasos para obtener una pagina web personalizada,
          contactame y te ayudare a crearla.</p>
       </div>
        <div className="projects_cards">
        <CardProject name="Follow Card"  fondo={followCardImage}/>
        <CardProject name="Tic Tac Toe"  fondo={ticTacToeImage}/>
        <CardProject name="Mouse Follow" fondo={mouseFollowImage}/>
        <CardProject name="Portafolio" fondo={portafolioImage}/>
       </div>
    </section>
  );
};
