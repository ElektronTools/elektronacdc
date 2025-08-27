import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faWhatsapp, faYoutube, faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Sección de redes sociales */}
          <div className="col-12 text-center">
            <ul className="list-unstyled d-flex justify-content-center align-items-center mt-1">
              <li className="me-3">
                <a 
                  href="https://wa.me/59169717553" 
                  className={`text-light ${styles.socialIcon}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
              </li>
              <li className="me-3">
                <a 
                  href="https://www.tiktok.com/@elektrontools?is_from_webapp=1&sender_device=pc" 
                  className={`text-light ${styles.socialIcon}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="TikTok"
                >
                  <FontAwesomeIcon icon={faTiktok} size="2x" />
                </a>
              </li>
{/*               <li className="me-3">a
                <a 
                  href="https://www.youtube.com/@ElektronTools123" 
                  className={`text-light ${styles.socialIcon}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </li> */}
              <li className="me-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61557499266597&mibextid=ZbWKwL" 
                  className={`text-light ${styles.socialIcon}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li className="me-3">
                <a 
                  href="https://t.me/electrontools" 
                  className={`text-light ${styles.socialIcon}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Telegram"
                >
                  <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <hr className="my-2 bg-secondary" />
        
        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 text-white-50 small">
              &copy; {new Date().getFullYear()} Elektron Lab. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 