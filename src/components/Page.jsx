import React, { useRef, useEffect } from 'react';
import '../styles/Page.css';

const Page = ({ page }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleImageLoad = () => {
      if (imageRef.current) {
        // Force the image to fit within the container while maintaining aspect ratio
        imageRef.current.style.width = '100%';
        imageRef.current.style.height = '100%';
        imageRef.current.style.objectFit = 'contain';
      }
    };

    if (imageRef.current) {
      imageRef.current.addEventListener('load', handleImageLoad);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', handleImageLoad);
      }
    };
  }, []);

  if (page.type === 'title') {
    return (
      <div className="page title-page">
        <h1>{page.title}</h1>
        <h2>{page.subtitle}</h2>
      </div>
    );
  }

  return (
    <div className="page content-page">
      <div className="image-container">
        <div className="image-wrapper">
          <img 
            ref={imageRef}
            src={page.image} 
            alt="Page content" 
            className="page-image"
          />
        </div>
      </div>
      <div className="text-content">
        <p>{page.text}</p>
      </div>
    </div>
  );
};

export default Page;