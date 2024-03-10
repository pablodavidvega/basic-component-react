//Componente principal de la aplicación
//Se deben importar los componentes
import './App.css';
import Testimonio from './componentes/testimonios'

//Aqui se agregan los nombres de los componentes a renderizar
function App() {
  return (
    <div className="App">
      <div className="contenedor principal">
        <h1> Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio
          nombre='Shawn Wang '
          pais='Singapur'
          imagen='Shawn'
          alt='Shawn Wang'
          cargo='Ingeniera de Software '
          empresa='Amazon'
          email='Shawn.Wang@gmail.com'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />

        <Testimonio
          nombre='Sarah Chima '
          pais='Nigeria'
          imagen='Sarah'
          alt='Sara Chima'
          cargo='Ingeniera de Software '
          empresa='ChatDesk'
          email='Sarah.Chima@gmail.com'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />

        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='Emma'
          alt='Emma Bostian'
          cargo='Ingeniera de Software '
          empresa='Spotify'
          email='Emma.Bostian@gmail.com'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' 
        />
      </div>
    </div>
  );
}

export default App;
