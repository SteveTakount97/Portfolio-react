import React, { Suspense } from 'react';
import './App.css';

// Composants critiques chargés dès le début
import Header from './component/header/header';
import Hero from './component/introduction/intro';

// Chargement dynamique avec React.lazy pour les composants non critiques
const About = React.lazy(() => import('./component/About/about'));
const Skills = React.lazy(() => import('./component/Competences/competences'));
const Projects = React.lazy(() => import('./component/Projets/Projets'));
const Contact = React.lazy(() => import('./component/Contact/contact'));
const Footer = React.lazy(() => import('./component/footer/footer'));



function App() {
  return (
    <div className='container-body'>
      {/* Composants critiques */}
      <Header />
      <Hero />

      {/* Lazy-loaded components */}
      <Suspense fallback={<div>Chargement...</div>}>
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
