import { useEffect, useState } from 'react';
import image from '../../../../images/me2.jpeg';
import './hero.scss';

const classes = {
  hero: 'hero',
  heroImage: 'hero-image',
  heroText: 'hero-text',
  heroName: 'hero-text-name',
}

function Hero({ sectionRef }) {

  const [text, setText] = useState('Developer');
  const words = ['frontend developer', 'freelancer'];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.charAt(charIndex);

      setText(isDeleting ? currentWord.substring(0, charIndex) : currentWord.substring(0, charIndex + 1));

      if (isDeleting) {
        setCharIndex(charIndex - 1);
      } else {
        setCharIndex(charIndex + 1);
      }

      if (isDeleting && charIndex === -1) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      }
    };

    const interval = setInterval(typingEffect, 100); // Скорость набора текста

    return () => {
      clearInterval(interval);
    };
  }, [wordIndex, charIndex, isDeleting]);



  return (
    <>
      <img className={classes.heroImage} src={image} alt="hero" />
      <div ref={sectionRef} className={classes.heroText}>
        <div className={classes.heroName} >
          <div> Anton Masuytkin</div>
          <div>I'm {text}</div>
        </div>
        <div></div>
      </div>
    </ >
  )
}
export default Hero;