'use client';
import Image from 'next/image';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faShoppingCart, faUsers, faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openHello, setOpenHello] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // cuando abrimos el menú en móvil, aseguramos cerrar sub-dropdown si estaba abierto
    if (!isOpen) setOpenHello(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenHello(false);
  };

  const toggleHello = (e) => {
    e.preventDefault();
    setOpenHello(!openHello);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-lg" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', zIndex: 1000 }}>
      <div className="container-fluid">
        {/* Logo y texto de la marca */}
        <Link href="/" className="navbar-brand d-flex align-items-center fw-bold" onClick={closeMenu}>
          <Image 
            src="/elektronlogo.png" 
            alt="ELEKTRON AC⚡DC" 
            width={40} 
            height={40} 
            className="me-2"
          />
          <div>
            <span className="h5 d-block m-0">ELEKTRON</span>
            <span className="small text-warning">AC⚡DC</span>
          </div>
        </Link>

        {/* Botón de menú personalizado (móvil) */}
        <button 
          className="btn btn-warning d-lg-none ms-auto"
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ fontSize: '20px', padding: '8px 12px' }}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Menú desplegable */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav" style={{ marginTop: isOpen ? '10px' : '0' }}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

            <li className="nav-item">
              <Link href="/servicios" className="nav-link px-3 rounded transition" onClick={closeMenu}>
                <FontAwesomeIcon icon={faTools} className="me-2" />
                Servicios
              </Link>
            </li>

            {/* Hello Electronica - dropdown con subpestañas */}
            <li className={`nav-item dropdown ${openHello ? 'show' : ''}`}>
              {/* en escritorio: hover muestra dropdown; en móvil usamos toggle */}
              <a 
                href="#hello" 
                className="nav-link px-3 rounded d-flex align-items-center" 
                onClick={(e) => {
                  // en pantallas grandes no prevenir hover default; siempre togglear cuando se clickea (útil en móvil)
                  toggleHello(e);
                }}
                aria-expanded={openHello}
                aria-haspopup="true"
              >
                Hello Electronica
                <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
              </a>

              <ul className={`dropdown-menu ${openHello ? 'show' : ''}`} style={{ position: 'absolute' }}>
                <li>
                  <Link href="/hello-electronica/cursos" className="dropdown-item" onClick={closeMenu}>
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="/hello-electronica/descargas" className="dropdown-item" onClick={closeMenu}>
                    Descargas
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/quienes-somos" className="nav-link px-3 rounded transition" onClick={closeMenu}>
                <FontAwesomeIcon icon={faUsers} className="me-2" />
                ¿Quiénes somos?
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* muestra dropdown al hacer hover en escritorio */
        @media (min-width: 992px) {
          .nav-item.dropdown:hover .dropdown-menu {
            display: block;
            margin-top: 0.5rem;
          }
          .dropdown-menu {
            position: absolute;
          }
        }
        .nav-link {
          transition: all 0.3s ease;
          color: #fff !important;
        }
        .nav-link:hover {
          background-color: rgba(255, 193, 7, 0.08);
          color: #ffc107 !important;
          border-radius: 5px;
        }
        .dropdown-menu {
          min-width: 10rem;
        }
        .btn-warning:hover {
          background-color: #ffb700 !important;
          transform: scale(1.03);
        }
        .btn-warning:focus {
          box-shadow: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;