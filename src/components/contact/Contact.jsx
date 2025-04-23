import React from 'react';
import './styles.css';

const Tooltip = () => {
  return (
      <ul className="example-2">
        <li className="icon-content">
          <a href="https://linkedin.com/in/wilver-ixcot-6aa7662b4/" aria-label="LinkedIn" data-social="linkedin" target="_blank" rel="noopener noreferrer">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
        <li className="icon-content">
          <a href="https://www.github.com/WilverEmilio" aria-label="GitHub" data-social="github" target="_blank" rel="noopener noreferrer">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">GitHub</div>
        </li>
        <li className="icon-content">
            <a href="mailto:ixcotwilver@gmail.com?subject=Contacto%20por%20medio%20del%20portafolio%20web" aria-label='Correo' data-social="correo" target="_blank" rel="noopener noreferrer">
                <div className="filled" />
                <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bi bi-envelope">
                    <path fillRule="evenodd" d="M19,4 C20.6568542,4 22,5.34314575 22,7 L22,17 C22,18.6568542 20.6568542,20 19,20 L5,20 C3.34314575,20 2,18.6568542 2,17 L2,7 C2,5.34314575 3.34314575,4 5,4 L19,4 Z M20,7.328 L12.6585046,13.7525767 C12.3128975,14.054983 11.8110564,14.0801835 11.4394103,13.8281783 L11.3414954,13.7525767 L4,7.329 L4,17 C4,17.5522847 4.44771525,18 5,18 L19,18 C19.5522847,18 20,17.5522847 20,17 L20,7.328 Z M18.48,6 L5.518,6 L12,11.6712318 L18.48,6 Z"/>
                </svg>
            </a>
            <div className="tooltip">Correo</div>
        </li>
        <li className="icon-content">
            <a
                href="https://www.github.com/WilverEmilio"
                aria-label="Curriculum"
                data-social="curriculum"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="filled" />
                <svg
                fill="#000000"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M20,13a5,5,0,0,0-2-4V2H2V22H18V17.41l3.29,3.29,1.41-1.41-3.54-3.54A5,5,0,0,0,20,13Zm-2,0a3,3,0,1,1-3-3A3,3,0,0,1,18,13ZM4,20V4H16V8.1A5,5,0,0,0,11,10v0H6v2h4.1a5,5,0,0,0,0,2H6v2h5v0a5,5,0,0,0,5,1.93V20Z" />
                <rect height="2" width="4" x="6" y="6" />
                </svg>
            </a>
            <div className="tooltip">Curriculum</div>
        </li>
      </ul>
  );
}
export default Tooltip;
