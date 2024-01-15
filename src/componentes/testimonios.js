import './hojas-de-estilo/Testimonio.css';
//Componente funcional
function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require(`../imagenes/${props.imagen}-freecodecamp.png`)}
                alt='Foto de Emma' />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>  <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'> {props.cargo}en <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'> "{props.testimonio}"</p>
            </div>
        </div>
    );  
}
//por defecto significa que este va a ser el unico archivo que se va a exportar
export default Testimonio;