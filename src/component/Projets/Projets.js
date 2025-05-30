// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import { fetchDataProjet } from '../../services/data';
import CategoryBar from '../select/select';
import ModalProjet from '../../modalProjet/modalProjet';
import { motion } from 'framer-motion'; // Import de Framer Motion

const Projects = () => {
  const [projet, setProjet] = useState([]);
  const [filteredProjets, setFilteredProjets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projet) => {
    setSelectedProject(projet);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchDataProjet('/data.json');
        setProjet(data);
        setFilteredProjets(data);
      } catch (error) {
        console.error('Erreur lors du chargement des projets', error);
      }
    };

    loadProjects();
  }, []);


  const filterProjectsByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'Tous') {
      setFilteredProjets(projet);
    } else {
      const filtered = projet.filter(projet => projet.category === category);
      setFilteredProjets(filtered);
    }
  };

  return (
    <section id="projects">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Mes Projets
      </motion.h2>

      <CategoryBar  
        selectedCategory={selectedCategory} 
        filterProjectsByCategory={filterProjectsByCategory} 
      />

      <motion.div
        className="projects-grid"
      initial={{ opacity: 0, x: -30 }} // décalé à gauche
  whileInView={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -40 }} // vers la gauche quand on quitte
  transition={{ duration: 0.5, ease: 'easeOut' }}
  viewport={{ once: false, amount: 0.1 }} // réagit au scroll
      >
        {filteredProjets.length > 0 ? (
          filteredProjets.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              onClick={() => openModal(project)}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} className='img-projet'/>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='navigation'>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Voir une demo du Site</a>
              </div>
            </motion.div>
          ))
        ) : (
          <p>Aucun projet disponible pour cette catégorie.</p>
        )}
      </motion.div>

      {selectedProject && (
        <ModalProjet
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
