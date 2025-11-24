import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Servicios() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{ marginTop: '120px' }}>
        <h1>Servicios</h1>
        <p>Descripción breve de servicios disponibles.</p>
      </main>
      <Footer />
    </div>
  );
}