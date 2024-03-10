import "./hojas-de-estilo/Testimonio.css";
//Componente funcional
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}-freecodecamp.png`)}
        alt={`Foto de ${props.alt}`}
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          {" "}
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {" "}
          {props.cargo}en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio"> {props.testimonio}</p>
        <a className="emailTestimonios">{props.email}</a>
      </div>
    </div>
  );
}
//por defecto significa que este va a ser el unico archivo que se va a exportar
export default Testimonio;
