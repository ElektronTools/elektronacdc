import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Cursos() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{ marginTop: '120px' }}>
        <h1>Cursos</h1>
        <p>Listado de cursos y contenido formativo.</p>
      </main>
      <Footer />
    </div>
  );
}