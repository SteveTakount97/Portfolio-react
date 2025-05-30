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
    <div id="skills-wrapper" className="bg-black text-white py-16 ">
      <section
        id="skills"
        className="max-w-[1440px] mx-auto px-30 sm:px-12"
        style={{ minHeight: '100vh' }}
      >
        <h2 className="text-4xl font-extrabold mb-14 text-center tracking-wide">
          Mes Compétences
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }} // animation inverse
              transition={{ duration: 0.5, delay: index * 0.07 }}
             viewport={{ once: false, amount: 0.3 }} // réactif au scroll
              className="w-full sm:w-[47%] lg:w-[30%] bg-neutral-900 border border-white rounded-2xl p-6
                flex flex-col
                transition-all duration-300
                hover:scale-[1.03] hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.35)]
                cursor-default"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-4xl" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>

              <p className="text-sm text-gray-300 mb-6 flex-grow">{skill.description}</p>

              <div className="bg-neutral-800 rounded-full h-5 overflow-hidden">
                <div
                  className="h-full rounded-full flex items-center justify-end pr-3 text-xs font-semibold text-white select-none"
                  style={{
                    width: skill.level,
                    backgroundColor: skill.color,
                    transition: 'width 0.5s ease-in-out',
                  }}
                >
                  {skill.level}
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
