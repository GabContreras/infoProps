import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const data = {
    nombre: "Gabriel Alejandro",
    apellidos: "Contreras Cruz",
    experiencia: "Estudiante de tercer año en Desarrollo de software",
    fechaNacimiento: "15 de junio de 2007",
    codigo: "20230454",
    imagenUrl: "https://i.imgur.com/vEckXbf.png" 
  };

  return (
    <>
      <center><h1>Información Personal</h1></center>
      <Card
        nombre={data.nombre}
        apellidos={data.apellidos}
        experiencia={data.experiencia}
        fechaNacimiento={data.fechaNacimiento}
        codigo={data.codigo}
        imagenUrl={data.imagenUrl}
      />
    </>
  );
}

export default App;
