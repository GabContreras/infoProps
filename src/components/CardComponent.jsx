import React from 'react';

function CardComponent({ title, description }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-primary">Leer Más</a>
      </div>
    </div>
  );
}

export default CardComponent;
