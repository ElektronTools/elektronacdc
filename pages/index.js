// pages/index.js

import Footer from '@/components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import NeonSign from '../components/NeonSign';
import { useRouter } from 'next/router';

const slides = [
  {
    image: '/image1.jpg',
    text: '✔️ Reparación y mantenimiento de Sistemas de Seguridad'
  },
  {
    image: '/image2.jpg',
    text: '✔️ Instalaciones Eléctricas Domiciliarias, Comerciales e Industriales'
  } ,
  {
    image: '/image3.jpg',
    text: '✔️ Motores y Tableros Eléctricos'
  }/* ,
  {
    image: '/elektronlabremote.png',
    text: '✔️ Diseño de planos eléctricos'
  }  */
];

export default function Home() {
  const router = useRouter();
  const showFooter = ['/quienes-somos', '/contacto', '/servicios'].includes(router.pathname);

  return (
    <div>
      <ImageCarousel slides={slides} />
      <div className="container mt-10 space-y-6 text-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-auto max-w-3xl">
          <p className="text-lg text-gray-800 leading-relaxed">
                 <br />
            🎯 Atención rápida y garantizada <br />
            🚨 Emergencias 24/7 <br />
            💡 Soluciones efectivas a precios accesibles <br />
            📍 La Paz, El Alto - Bolivia <br />
            📞 ¡Contáctanos y solucionaremos tus problemas eléctricos al instante!
          </p>
        </div>
      </div>

      <NeonSign />
      <Footer />
    </div>
  );
}
