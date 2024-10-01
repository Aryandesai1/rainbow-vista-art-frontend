import React, { useState, useEffect } from 'react';
import '../styles.css';

const Banner = () => {
  const images = [
    'path/to/banner-image1.jpg',
    'path/to/banner-image2.jpg',
    'path/to/banner-image3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <div className="carousel">
        
      </div>
      <h1>Bringing Art to Life with Color and Sound</h1>
    </div>
  );
}

export default Banner;
