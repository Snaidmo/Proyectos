export function CardProject({ name, fondo }) {
  return (
    <div className="card_container">
      <img src={fondo} />
      <div className="card_content">
        <h1>{name}</h1>
        <a href="#">Ver pagina</a>
      </div>
    </div>
  );
}
