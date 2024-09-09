import React, { useEffect } from 'react';


const ModalProjet = ({ isOpen, onClose, project }) => {
  // Empêcher le scroll lorsque la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Désactive le scroll
    } else {
      document.body.style.overflow = 'auto'; // Réactive le scroll
    }

    return () => {
      document.body.style.overflow = 'auto'; // Assurez-vous que le scroll est réactivé quand le composant est démonté
    };
  }, [isOpen]);

  if (!isOpen) return null; // Ne pas afficher la modale si elle n'est pas ouverte

  return (
    <div className="modal-overlay">
      <div className="modal-content animated-modal">
        <button onClick={onClose} className="modal-close-btn">X</button>
        <h2 className="modal-title">{project.title}</h2>
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} className="modal-image" />
        </div>
        <p className="modal-description">{project.description}</p>
        <div className="modal-details">
          <div className="modal-skills">
            <h3>Compétences acquises</h3>
            <ul className="skills-list">
              {project.skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
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
