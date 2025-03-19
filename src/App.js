import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import CardComponent from './components/CardComponent';
import InputForm from './components/InputForm';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ProgressBar from './components/ProgressBar';
import Accordion from './components/Accordion';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import Table from './components/Table';
import Chart from './components/Chart';
import Rating from './components/Rating';

function App() {
  const data = {
    nombre: "Gabriel Alejandro",
    apellidos: "Contreras Cruz",
    experiencia: "Estudiante de tercer año en Desarrollo de software",
    fechaNacimiento: "15 de junio de 2007",
    codigo: "20230454",
    imagenUrl: "https://i.imgur.com/vEckXbf.png"
  };

  const timelineEvents = [
    { date: "2020", description: "Pandemia" },
    { date: "2023", description: "Entré al rical" },
    { date: "2025", description: "No sé, no ha terminado" },
  ];

  const galleryImages = [
    { src: "https://static.wikia.nocookie.net/a-bag-of-milk/images/c/c2/Milk_1_header.webp/revision/latest?cb=20230418185149", alt: "Ejemplo 1" },
    { src: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/04/buckshot-roulette-burner-phone.jpg", alt: "Ejemplo 2" },
    { src: "https://static.wikia.nocookie.net/a-bag-of-milk/images/7/7e/Milk_2_library_art.png/revision/latest?cb=20230430130354", alt: "Ejemplo 3" },
  ];

  const tabsContent = [
    { label: "Tab 1", content: "Contenido del Tab 1" },
    { label: "Tab 2", content: "Contenido del Tab 2" },
    { label: "Tab 3", content: "Contenido del Tab 3" },
  ];

  const tableHeaders = ["Nombre", "Edad", "Ocupación"];
  const tableRows = [
    ["Gabriel", "15", "Estudiante"],
    ["Alejandro", "23", "Desarrollador"],
    ["María", "30", "Diseñadora"]
  ];

  const chartData = [
    { label: "Enero", value: 40 },
    { label: "Febrero", value: 30 },
    { label: "Marzo", value: 50 },
  ];

  const accordionItems = [
    { title: "Pregunta 1", content: "Respuesta a la pregunta 1" },
    { title: "Pregunta 2", content: "Respuesta a la pregunta 2" },
    { title: "Pregunta 3", content: "Respuesta a la pregunta 3" }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* Información Personal */}
      <div className="container my-5 text-center">
        <h1>Información Personal</h1>
        <div className="d-flex justify-content-center">
          <Card
            nombre={data.nombre}
            apellidos={data.apellidos}
            experiencia={data.experiencia}
            fechaNacimiento={data.fechaNacimiento}
            codigo={data.codigo}
            imagenUrl={data.imagenUrl}
          />
        </div>
      </div>

      {/* Componente Bootstrap */}
      <div className="container my-5 text-center">
        <h2>Componente Bootstrap</h2>
        <div className="row justify-content-center">
          <CardComponent
            title="Card Ejemplo"
            description="Esta es una descripción de ejemplo para la card."
          />
        </div>
      </div>

      {/* Alert y Badge */}
      <div className="container my-5 text-center">
        <Alert message="Este es un mensaje de alerta" />
        <Badge text="Nuevo" />
      </div>

      {/* Diseño de InputForm */}
      <div className="container my-5 text-center">
        <InputForm />
      </div>

      {/* Carousel */}
      <div className="container my-5 text-center">
        <h2>Carousel</h2>
        <Carousel />
      </div>

      {/* ProgressBar */}
      <div className="container my-5 text-center">
        <h2>Barra de Progreso</h2>
        <ProgressBar progress={70} />
      </div>

      {/* Accordion */}
      <div className="container my-5 text-center">
        <h2>Acordeón</h2>
        <Accordion items={accordionItems} />
      </div>

      {/* Timeline */}
      <div className="container my-5 text-center">
        <h2>Línea de Tiempo</h2>
        <Timeline events={timelineEvents} />
      </div>

      {/* Gallery */}
      <div className="container my-5 text-center">
        <h2>Galería</h2>
        <Gallery images={galleryImages} />
      </div>

      {/* SearchBar */}
      <div className="container my-5 text-center">
        <h2>Barra de Búsqueda</h2>
        <SearchBar onSearch={(query) => alert(`Buscando: ${query}`)} />
      </div>

      {/* Tabs */}
      <div className="container my-5 text-center">
        <h2>Pestañas</h2>
        <Tabs tabs={tabsContent} />
      </div>

      {/* Tabla */}
      <div className="container my-5 text-center">
        <h2>Tabla</h2>
        <Table headers={tableHeaders} rows={tableRows} />
      </div>

      {/* Chart */}
      <div className="container my-5 text-center">
        <h2>Gráfico</h2>
        <Chart title="Gráfico Mensual" data={chartData} />
      </div>

      {/* Rating */}
      <div className="container my-5 text-center">
        <h2>Calificación</h2>
        <Rating maxStars={5} />
      </div>

      <Footer />
    </>
  );
}

export default App;
