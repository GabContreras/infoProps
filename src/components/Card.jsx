import React from 'react';
import '../css/Card.css';

function Card({ nombre, apellidos, experiencia, fechaNacimiento, codigo, imagenUrl }) {
  return (
    <div className="card text-center shadow-lg">
      <img src={imagenUrl} alt="Foto personal" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{nombre} {apellidos}</h5>
        <p className="card-text"><strong>Experiencia Académica:</strong> {experiencia}</p>
        <p className="card-text"><strong>Fecha de Nacimiento:</strong> {fechaNacimiento}</p>
        <p className="card-text"><strong>Código Institucional:</strong> {codigo}</p>
      </div>
    </div>
  );
}

export default Card;
