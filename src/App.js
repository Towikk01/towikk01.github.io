
import './App.css';
import Menu from './components/common/menu/Menu'
import Hero from './components/common/main/hero/Hero';
import About from './components/common/main/about/About';
import Resume from './components/common/main/resume/Resume';
import Porfolio from './components/common/main/portfolio/Portfolio';
import Contacts from './components/common/main/contact/Contacts';
import Skills from './components/common/main/skills/Skills'

import { useRef } from 'react';

function App() {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  return (
    <div className="App">
      <Menu sectionRefs={sectionRefs} />
      <Hero sectionRef={sectionRefs[0]} />
      <About sectionRef={sectionRefs[1]} />
      <Skills sectionRef={sectionRefs[2]} />
      <Resume sectionRef={sectionRefs[3]} />
      <Porfolio sectionRef={sectionRefs[4]} />
      <Contacts sectionRef={sectionRefs[5]} />
    </div>
  );
}

export default App;
