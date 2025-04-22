import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Columna izquierda */}
        <div className={styles.left}>
          <ul className={styles.infoList}>
            <li>
              <img src="/icons/user.svg" alt="" />
              Wilver Emilio
            </li>
            <li>
              <img src="/icons/folder.svg" alt="" />
              <Link to="/projects">Proyectos</Link>
            </li>
            <li>
              <img src="/icons/code.svg" alt="" />
              <a href="https://github.com/WilverEmilio" target="_blank" rel="noopener noreferrer">Código</a>
            </li>
          </ul>
          <div className={styles.socialIcons}>
            <a href="https://github.com/WilverEmilio" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/wilveremilio" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:ixcotwilver@gmail.com">
              <img src="/icons/gmail.svg" alt="Gmail" />
            </a>
          </div>
        </div>

        {/* Columna derecha */}
        <div className={styles.right}>
          <h3>Escríbeme</h3>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inlineFields}>
              <input type="text" placeholder="a: ixcotwilver@gmail.com" required />
              <input type="text" placeholder="Asunto" required />
            </div>
            <textarea placeholder="Mensaje" rows="4" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Diseñado por Wilver Emilio
      </div>
    </footer>
  );
};

export default Footer;
