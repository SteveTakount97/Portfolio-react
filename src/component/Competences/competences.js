// src/components/Skills.js
import React, {useState,  useEffect} from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaPhp} from 'react-icons/fa'; // Import des icônes
import { SiNotion, SiRedux } from 'react-icons/si';
import Carroussel from '../Slider/carousel';
import { fetchDataProjet } from '../../services/data';

const skills = [
  { name: 'HTML', level: '90%', color: '#e34c26', icon: <FaHtml5 /> },
  { name: 'CSS', level: '85%', color: '#1572B6', icon: <FaCss3Alt /> },
  { name: 'SASS', level: '85%', color: '#1572B6', icon: <FaCss3Alt /> },
  { name: 'JavaScript', level: '50%', color: '#f7df1e', icon: <FaJsSquare /> },
  { name: 'React', level: '50%', color: '#61DBFB', icon: <FaReact /> },
  { name: 'Notion, Lighthouse', level: '90%', color: 'green', icon: <SiNotion /> },
  { name: 'React-redux', level: '50%', color: 'black', icon: <SiRedux /> },
  { name: 'React Developper Tools', level: '70%', color: '#68A063', icon: <FaReact /> },
  { name: 'Git, Github', level: '85%', color: '#F05032', icon: <FaGitAlt /> },
  { name: 'PHP, Laravel', level: '50%', color: '#F05020', icon: <FaPhp /> },
];

const Skills = () => {

  const [project, setProjet] = useState([]);

  // Function to fetch data
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchDataProjet('/data.json'); // Utilisation de la fonction importée
        setProjet(data); // Stocker les données dans le state
      } catch (error) {
        console.error('Erreur lors du chargement des projets', error);
      }
    };

    loadProjects();
  }, []);

   // Extraire les images de chaque projet
   const projectImages = project.map(project => project.image);
   const projectTitle = project.map(project => project.title);
  return (
    
    <div id="skills-wrapper">
  <h2>Mes Compétences</h2>
  
  <section id="skills">
    <div className="skills-image">
      <Carroussel project={projectImages} title={projectTitle} />
    </div>

    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-header">
            {skill.icon} {/* Ajout de l'icône correspondante */}
            <h3>{skill.name}</h3>
          </div>
          <div className="skill-bar">
            <div
              className="skill-level"
              style={{ width: skill.level, backgroundColor: skill.color }} // Utilisation de la couleur personnalisée
            >
              <span>{skill.level}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>

  );
};

export default Skills;
