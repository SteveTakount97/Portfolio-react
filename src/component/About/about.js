// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Importation du CSS

const About = () => {
  return (
    <motion.section
      className="about-section"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        À propos de moi
      </motion.h2>

      <motion.article
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Avec un master en droit fiscal, j’ai exercé dans le domaine juridique avant de décider de suivre ma passion pour le développement web.
          Cette reconversion professionnelle m’a permis d'acquérir des compétences solides en développement, notamment dans l’intégration front-end
          des applications modernes. Mon parcours atypique démontre une certaines rigueur et une certaine capacité à pourvoir prendre en main avec une certaines aisances 
          ses technologies modernes. 
        </p>
        <p>
         Me consacrant aujourd'hui sur une formation full stack, Je travaille principalement avec des stacks full JS comme <strong>React</strong>, <strong>JavaScript</strong>, mais aussi sur du <strong>PHP</strong> et des technologies framework modernes pour créer des
          expériences utilisateurs optimales comme <strong>NestJs</strong>, <strong>AdonisJS</strong>. 
        </p>
        <p>
          Mon parcours dans le droit m’a appris à aborder les projets avec une grande attention aux détails et une rigueur méthodologique, ce qui me sert désormais dans chaque projet web que je réalise.
        </p>
      </motion.article>
    </motion.section>
  );
};

export default About;
