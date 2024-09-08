import React from 'react';


const ModalProjet = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null; // Si la modal n'est pas ouverte, ne pas afficher

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Bouton de fermeture */}
        <button onClick={onClose} className="modal-close-btn">X</button>

        {/* Titre du projet */}
        <h2 className="modal-title">{project.title}</h2>

        {/* Image du projet */}
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} className="modal-image" />
        </div>

        {/* Description du projet */}
        <p className="modal-description">{project.description}</p>

        <div className="modal-details">
          {/* Compétences acquises */}
          <div className="modal-skills">
            <h3>Compétences acquises</h3>
            <ul className="skills-list">
              {project.skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>

          {/* Informations sur le projet */}
          <div className="modal-info">
            <h3>Infos Projet</h3>
            <p>{project.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalProjet;
