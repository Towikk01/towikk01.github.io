import { useState, useEffect, useRef } from 'react';

import './App.scss';
import Menu from './components/common/menu/Menu'
import Hero from './components/common/main/hero/Hero';
import About from './components/common/main/about/About';
import Resume from './components/common/main/resume/Resume';
import Porfolio from './components/common/main/portfolio/Portfolio';
import Contacts from './components/common/main/contact/Contacts';
import Skills from './components/common/main/skills/Skills'








function App() {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (

    <div className={`App ${theme}`}>
      <Menu toggleTheme={toggleTheme} sectionRefs={sectionRefs} />
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
