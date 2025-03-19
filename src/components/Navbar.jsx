import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Mi Sitio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Acerca</a></li>
          <li className="nav-item"><a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
