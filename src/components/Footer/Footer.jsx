import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import Tooltip from '../contact/Contact';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Columna izquierda */}
        <div className={styles.left}>
          <div className={styles.copy}>
          © {new Date().getFullYear()} Diseñado por Wilver Emilio
        </div>
        </div>
        <div className={styles.socialIcons}>
            <Tooltip className="example-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
