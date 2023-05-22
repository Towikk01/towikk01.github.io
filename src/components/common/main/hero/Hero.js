import { useEffect, useState } from 'react';
import image from '../../../../images/me2.jpeg'
import './hero.scss'
const classes = {
  hero: 'hero',
  heroImage: 'hero-image',
  heroText: 'hero-text',
  heroName: 'hero-text-name',
}
function Hero({ sectionRef }) {

  const [text, setText] = useState('Developer');
  useEffect(() => {
    const list = ['frontend developer', 'freelancer', 'hookah master']
    const interval = setInterval(() => {
      setText(list[Math.floor(Math.random() * 3)])

    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <img className={classes.heroImage} src={image} />
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
export default Hero