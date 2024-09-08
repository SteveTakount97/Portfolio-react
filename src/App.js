import './App.css';
import About from './component/About/about';
import Skills from './component/Competences/competences';
import Contact from './component/Contact/contact';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Hero from './component/introduction/intro';
import Projects from './component/Projets/Projets';



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
