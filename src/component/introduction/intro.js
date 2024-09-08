// src/components/Hero.js
import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Bonjour, je suis Stève TAKOUNTCHOUOP', 
        'Développeur Web en reconversion', 
        'Créatif, innovant, et passionné par les solutions numériques'
      ],
      typeSpeed: 100,
      backSpeed: 90,
      loop: true,
    });

    // Destroy Typed instance during cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <section id="hero">
      <div className="hero-content">
      <h1><span ref={el}></span></h1>
        <p>Ancien juriste diplômé d’un master en droit fiscal, et désormais développeur web en reconversion. 
          Ce portfolio met en lumière mes compétences techniques et mes projets, fruits d’une passion pour la création de solutions numériques.
           Mon parcours atypique me permet de combiner rigueur et créativité dans le développement d’applications web innovantes, alliant simplicité d’utilisation et performance.
          </p>
          <br /><strong> 
            Explorez mes projets et découvrez mon parcours dans cette nouvelle aventure numérique !
            </strong>
          <br/>  
        <div className='cv'>
        <a href="/CV.pdf" className="btn">Télécharger mon CV</a>
        </div>  
      </div>
    </section>
  );
};

export default Hero;
