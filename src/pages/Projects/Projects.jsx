const Projects = () => {
    return (
      <section className="projects">
        <h2>Mis Proyectos</h2>
        <div className="project-list">
          {/* Aquí podrías mapear un array de proyectos y usar un ProjectCard */}
          <div className="project">
            <h3>Proyecto 1</h3>
            <p>Descripción corta del proyecto.</p>
            <a href="https://github.com/tuusuario/proyecto1" target="_blank" rel="noreferrer">Ver en GitHub</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  