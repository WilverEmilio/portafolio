import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1>Mi Portafolio</h1>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre mí</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;