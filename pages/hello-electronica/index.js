import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function HelloElectronica() {
  return (
    <div>
      <Navbar />
      <main className="container" style={{ marginTop: '120px' }}>
        <h1>Hello Electronica</h1>
        <p>Selecciona una opción:</p>
        <ul>
          <li><Link href="/hello-electronica/cursos">Cursos</Link></li>
          <li><Link href="/hello-electronica/descargas">Descargas</Link></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}