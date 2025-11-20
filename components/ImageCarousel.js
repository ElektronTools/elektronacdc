import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import styles from '../styles/ImageCarousel.module.css';

const ImageCarousel = ({ slides }) => {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
    >
      {slides.map((slide, index) => (
        <div key={index} className={styles.slideContainer}>
          <Image 
            src={slide.image} 
            alt={`Slide ${index}`} 
            layout="responsive" 
            width={1000} 
            height={600} 
            priority={index === 0} 
            className={styles.image}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
