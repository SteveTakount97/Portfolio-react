import React, { useState, useEffect, useCallback } from 'react';

const Carroussel = ({ project = [], title }) => {
  // State pour suivre l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // Fonction pour passer à l'image suivante, stable grâce à useCallback
   const nextImage = useCallback(() => {
    setCurrentImageIndex((currentImageIndex + 1) % project.length);
  }, [currentImageIndex, project.length]);

  // UseEffect pour changer automatiquement d'image toutes les 5 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 5000); // 5 secondes

    // Nettoyage du timer pour éviter des fuites mémoire
    return () => clearTimeout(timer);
  }, [nextImage]); // Réexécution quand nextImage change

  return (
    <div className='cover'>
      <div className="carousel-image" >
        {/* Ici, on affiche l'image actuelle */}
        <img src={`${process.env.PUBLIC_URL}${project[currentImageIndex]}`}  alt={title}  className='image-caroussel'/>
      </div>
      {project.length > 1 && (
        <div className='image-counter'>
          {currentImageIndex + 1}/{project.length}
        </div>
      )}
    </div>
  );
};

export default Carroussel;
