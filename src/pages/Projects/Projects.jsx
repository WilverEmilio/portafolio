import proyectos from "../../assets/proyectos.json";
import styles from "./Project.module.css";
const Projects = () => {
    return (
      <section className={styles.projects}>
        <h2>Mis Proyectos</h2>
        <div className={styles.projectsContainer}>
          {proyectos.map((proyecto) => (
            <div className={styles.project} key={proyecto.id}>
            <img src={proyecto.imagen} alt={proyecto.Nombre} />
            <div className={styles.projectContent}>
              <h3>{proyecto.Nombre}</h3>
              <p>{proyecto.Descripción}</p>
              <p className={styles.tags}>Tecnologías: {proyecto.Tecnologías}</p>
              <time>{proyecto.Fecha}</time>
            </div>
            <div className={styles.projectFooter}>
              <a href={proyecto.EnlaceProyecto} target="_blank" rel="noreferrer">
                Ver Proyecto
              </a>
              <a href={proyecto.Repositorio} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  

  // https://uiverse.io/bhaveshxrawat/dangerous-quail-58