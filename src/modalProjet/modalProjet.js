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
      document.body.style.overflow = 'auto'; 
    };
  }, [isOpen]);

  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content animated-modal">
        <button onClick={onClose} className="modal-close-btn">X</button>
        <h2 className="modal-title">{project.title}</h2>
        <div className="modal-image-wrapper">
          <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} className="modal-image" />
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
          <div className="modal-skills">
            <h3>Technologies Utilisées</h3>
             <ul className="skills-list">
              {project.technos.map((technos, index) => (
                <li key={index} className="techno-item">{technos}</li>
              ))}
            </ul>
          </div>
          <div className="modal-info">
            <h3 >Infos Projet</h3>
            <p className='title-info'>{project.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProjet;
