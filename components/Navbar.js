'use client';
import Image from 'next/image';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faShoppingCart, faUsers, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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

        {/* Botón de menú personalizado */}
        <button 
          className="btn btn-warning d-lg-none ms-auto"
          type="button" 
          onClick={toggleMenu}
          style={{ fontSize: '24px', padding: '8px 12px' }}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Menú desplegable */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav" style={{ marginTop: isOpen ? '10px' : '0' }}>
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link href="/servicios" className="nav-link px-3 rounded transition" onClick={closeMenu}>
                <FontAwesomeIcon icon={faTools} className="me-2" />
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/productos" className="nav-link px-3 rounded transition" onClick={closeMenu}>
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link px-3 rounded transition" onClick={closeMenu}>
                <FontAwesomeIcon icon={faUsers} className="me-2" />
                ¿Quiénes somos?
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          transition: all 0.3s ease;
          color: #fff !important;
        }
        .nav-link:hover {
          background-color: rgba(255, 193, 7, 0.1);
          color: #ffc107 !important;
          border-radius: 5px;
        }
        .btn-warning:hover {
          background-color: #ffb700 !important;
          transform: scale(1.05);
        }
        .btn-warning:focus {
          box-shadow: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
