import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '59169717553';
  const message = '¡Hola! Podrías darme más información de...';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.whatsappButton} onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsappIcon} />
    </div>
  );
};

export default WhatsAppButton; 