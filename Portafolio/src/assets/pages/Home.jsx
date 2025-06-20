import "../../App.css";


export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home_container">
        <h1 className="home_title">
          Hola,<span>Soy Snaidmo</span>
        </h1>
        <p className="home_description">
          Soy Estudiante de Programación
        </p>
        <p className="home_description">
          Solo se necesita disciplina y dedicación para lograr tus metas.
        </p>
        <p className="home_description">
          Futuro Desarrollador Web
        </p>
      </div>
      <div className="home_img">
        <img src="https://unavatar.io/snaidmo"></img>
      </div>
    </section>
  );
};
