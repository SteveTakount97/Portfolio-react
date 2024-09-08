// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import { fetchDataProjet } from '../../services/data';
import CategoryBar from '../select/select';
import ModalProjet from '../../modalProjet/modalProjet';

const Projects = () => {
  const [projet, setProjet] = useState([]);
  const [filteredProjets, setFilteredProjets] = useState([]); // Stocker les projets filtrés
  const [selectedCategory, setSelectedCategory] = useState('Tous'); // Stocker la catégorie sélectionnée
  
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


  // Function to fetch data
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchDataProjet('/data.json'); // Utilisation de la fonction importée
        setProjet(data); // Stocker les données dans le state
        setFilteredProjets (data);
      } catch (error) {
        console.error('Erreur lors du chargement des projets', error);
      }
    };

    loadProjects();
  }, []);

   // Fonction pour filtrer les projets par catégorie
   const filterProjectsByCategory = (category) => {
    setSelectedCategory(category); // Met à jour la catégorie sélectionnée
    if (category === 'Tous') {
      setFilteredProjets(projet); // Si "Tous" est sélectionné, on affiche tous les projets
    } else {
      const filtered = projet.filter(projet => projet.category === category);
      setFilteredProjets(filtered); // Filtre les projets selon la catégorie choisie
    }
  };
  
  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <CategoryBar  
      selectedCategory={selectedCategory} 
      filterProjectsByCategory={filterProjectsByCategory} 
      />
            <div className="projects-grid">
        {filteredProjets.length > 0 ? (
          filteredProjets.map((project, index) => (
            <div key={index} className="project-card"  onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} className='img-projet'/>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
            </div>
          ))
        ) : (
          <p>Aucun projet disponible pour cette catégorie.</p>
        )}
      </div>
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
