import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTiktok, faFacebook, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        {/* Redes Sociales */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://wa.me/59169717553" className="text-light" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@elektrontools" className="text-light" aria-label="TikTok">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a href="https://www.facebook.com/elektronlab" className="text-light" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://t.me/electrontools" className="text-light" aria-label="Telegram">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
          <a href="https://www.youtube.com/@LAAT123" className="text-light" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>

        {/* Texto de copyright y créditos */}
        <p className="text-center text-white-50 small m-0">
          &copy; {new Date().getFullYear()} ELEKTRON AC⚡DC. Todos los derechos reservados.<br />
          devLAAT💻
        </p>
      </div>

      <style jsx>{`
        a {
          transition: all 0.3s ease;
        }
        a:hover {
          color: #ffc107 !important;
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  );
}
