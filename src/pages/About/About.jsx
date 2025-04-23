const About = () => {
    return (
      <section className="about">
        <h1>Sobre mí</h1>
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
          <div className="about-photo">
            <img src="/path/to/your/photo.jpg" />
          </div>

        <h1>Educación</h1>
        <ul className="education-list">
          <li>Ingeniería en Sistemas - Universidad Mesoamericana (2021 - presente)</li>
          <li>Curso de React - Codigofacilito (2022)</li>
          <li>Curso de FastAPI - Codigofacilito (2023)</li>
        </ul>
        <h1>Habilidades</h1>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>FastAPI</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>HTML/CSS</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Agile/Scrum</li>
          <li>Gestión de Proyectos</li>
        </ul>
        <h1>Intereses</h1>
        <ul className="interests-list">
          <li>Desarrollo de Software</li>
          <li>Inteligencia Artificial</li>
          <li>Machine Learning</li>
          <li>Blockchain</li>
          <li>Desarrollo Web</li>
          <li>Gestión de Proyectos</li>
        </ul>

      </section>
    );
  };
  
  export default About;
  
  // Hacer un JSON para cada uno de los apartados de la sección de About, y luego importar esos JSONs en el componente About.jsx.
  // Para que todo sea más dinámico y fácil de mantener. Para que si se quiere cambiar algo, solo se cambie en el JSON y no en el código.