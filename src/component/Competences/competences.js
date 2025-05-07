// src/components/Skills.js
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaPhp } from 'react-icons/fa';
import { SiNotion, SiRedux, SiAdonisjs } from 'react-icons/si';
import { motion } from 'framer-motion';


const skills = [
  { name: 'HTML', level: '90%', color: '#e34c26', icon: <FaHtml5 />, description: 'Structure des pages web avec sémantique optimisée.' },
  { name: 'CSS', level: '85%', color: '#1572B6', icon: <FaCss3Alt />, description: 'Stylisation responsive et animations CSS.' },
  { name: 'SASS', level: '85%', color: '#CD6799', icon: <FaCss3Alt />, description: 'Préprocesseur CSS pour un code plus modulaire.' },
  { name: 'JavaScript', level: '65%', color: '#f7df1e', icon: <FaJsSquare />, description: 'Fonctionnalités interactives et DOM.' },
  { name: 'React', level: '60%', color: '#61DBFB', icon: <FaReact />, description: 'Composants réactifs et hooks modernes.' },
  { name: 'Notion, Lighthouse', level: '90%', color: 'green', icon: <SiNotion />, description: 'Documentation et audits de performance.' },
  { name: 'React-redux', level: '60%', color: 'black', icon: <SiRedux />, description: 'Gestion centralisée de l’état applicatif.' },
  { name: 'React Developer Tools', level: '70%', color: '#68A063', icon: <FaReact />, description: 'Débogage avancé de composants React.' },
  { name: 'Git, Github', level: '85%', color: '#F05032', icon: <FaGitAlt />, description: 'Versioning, branches, pull requests.' },
  { name: 'PHP, Laravel', level: '50%', color: '#F05020', icon: <FaPhp />, description: 'Développement backend avec MVC.' },
  { name: 'JavaScript, AdonisJs', level: '70%', color: '#4B32C3', icon: <SiAdonisjs />, description: 'API robustes avec AdonisJS (Node.js).' },
];

const Skills = () => {

  return (
    <div id="skills-wrapper">
      <h2>Mes Compétences</h2>

      <section id="skills">
    
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['40%', '-40%'] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: 'linear'
            }}
          >
              <div className="skill-header">
                {skill.icon}
                <h3>{skill.name}</h3>
              </div>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: skill.level, backgroundColor: skill.color }}
                >
                  <span>{skill.level}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
