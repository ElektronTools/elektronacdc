import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';
import Footer from '../components/Footer';
import Neonsign from '../components/Neonsign'; // Ruta correcta

const Home = () => {
  return (
    <div>
      <Navbar />
      
      {/* Contenedor principal, con espacio suficiente para no ser cubierto por el Navbar */}
      <div className="container my-5 text-center" style={{ marginTop: '100px' }}>
        <h2 className="display-4"> hello word! </h2>
        <h2 className="display-4">¡Bienvenido a ELEKTRON AC⚡DC</h2>
        <p className="lead">Soluciones Eléctricas y Tecnologías</p>
        <p className="lead">Nuestros servicios:</p>
      </div>

      {/* Imagen de carrusel sin títulos sobre las imágenes */}
      <ImageCarousel slides={slides} />

      {/* Bloque de información debajo del carrusel */}
      <div className="container my-5 text-center">
        <div className="bg-light p-5 rounded shadow-lg">
          <h3 className="display-5 text-primary">¿Por qué elegirnos?</h3>
          <div className="lead">
            <ul className="list-unstyled">
              <li>🎯 Atención rápida y garantizada</li>
              <li>🚨 Emergencias 24/7</li>
              <li>💡 Soluciones efectivas a precios accesibles</li>
              <li>📍 La Paz, El Alto - Bolivia</li>
              <li>📞 ¡Contáctanos y solucionaremos tus problemas eléctricos al instante!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Efecto de letrero neón */}
      <Neonsign />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Datos de las imágenes para el carrusel
const slides = [
  { image: '/image1.jpg' },
  { image: '/image2.jpg' },
  { image: '/image3.jpg' },
  { image: '/image4.jpg' },
];

export default Home;
