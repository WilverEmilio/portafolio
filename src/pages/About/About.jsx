import educacion from '../../assets/Json/Educacion.json';
import habilidades from '../../assets/Json/Habilidades.json';
import intereses from '../../assets/Json/Intereses.json';
import styles from './About.module.css';

const About = () => {
    return (
      <section className={styles.about}>
        <div className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <p>Soy estudiante de Ingeniería en Sistemas con experiencia en el desarrollo de
              aplicaciones web y gestión de proyectos de software. Experto en tecnologías
              modernas como ReactJS y FastAPI, con habilidades en la creación de
              soluciones eficientes y adaptables. Me apasiona aplicar mis conocimientos para
              resolver problemas y aportar valor a los proyectos en los que participo.</p>
            <p>Me gusta aprender y mejorar mis habilidades constantemente. Estoy abierto a
              nuevas oportunidades y desafíos que me permitan crecer profesionalmente y
              contribuir al éxito de los proyectos en los que participo.</p>
            <p>En mi tiempo libre, disfruto de la lectura, la música y el deporte. Me gusta
              mantenerme activo y aprender cosas nuevas. Siempre estoy buscando formas de
              mejorar mis habilidades y conocimientos.</p>
          </div>

          <div className={styles.photo}>
                <img src="/src/assets/img/foto.jpg" />
          </div>
        </div>

        <h1>Educación</h1>
        <div className={styles.educationContainer}>
          {educacion.map((educacion) => (
            <div className={styles.card} key={educacion.id}>
              <h5>{educacion.Nombre}</h5>
              <p>{educacion.Lugar}</p>
              <p>{educacion.Año}</p>
            </div>
          ))}
        </div>

        <h1>Habilidades</h1>
        <div className={styles.skillsContainer}>
          {habilidades.map((habilidades) => (
            <div className={styles.card} key={habilidades.id}>
              <div className={styles.icon} dangerouslySetInnerHTML={{ __html: habilidades.SVG }}/>
              <h4>{habilidades.Nombre}</h4>
              <p>{habilidades.Nivel}</p>
            </div>
          ))}
        </div>
        <h1>Intereses</h1>
        <div className={styles.interestsContainer}>
          {intereses.map((intereses) => (
            <div className={styles.card} key={intereses.id}>
              <h4>{intereses.Nombre}</h4>
              <p>{intereses.Descripción}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default About;