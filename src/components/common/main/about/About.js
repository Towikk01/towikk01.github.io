import './about.scss'
import image from '../../../../images/Toha-7.jpg'
import { FaCalendarDay, FaGlobeEurope, FaPhone, FaMapMarkedAlt, FaArrowCircleUp, FaUserCheck, FaMailBulk, FaHandsHelping } from 'react-icons/fa'

const classes = {
  about: 'about',
  aboutTitle: 'about-container-title',
  aboutImg: 'about-container-section-image',
  aboutSection: 'about-container-section',
  aboutContainer: 'about-container',
  aboutWrapper: 'about-container-section-wrapper',
  aboutInfo: 'about-container-section-wrapper-info',
  aboutInfoItem: 'about-container-section-wrapper-info-container-item',
  aboutInfoContainer: 'about-container-section-wrapper-info-container',
  kekus: 'kekus',
  mobile: 'mobile'

}

function About({ sectionRef }) {
  return (
    <div ref={sectionRef} className={classes.about}>
      <div className={classes.mobile}></div>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutTitle}>
          About
        </div>
        <div className={classes.aboutSection}>
          <span>Hi there! I'm Anton, Towikk for friends. I'm trying to improve myself everyday in every aspect of my life, especially in coding.</span>
          <div className={classes.aboutWrapper}>
            <img src={image} className={classes.aboutImg} alt="about" />
            <div className={classes.aboutInfoContainer} >
              <h2>Frontend React Developer</h2>

              <ul className={classes.aboutInfo}>
                <li className={classes.aboutInfoItem}> <FaCalendarDay /><span>Birthday: January 13 2002</span></li>
                <li className={classes.aboutInfoItem}> <FaArrowCircleUp /><span>Age: 22</span></li>
                <li className={classes.aboutInfoItem}> <FaPhone /><span>Phone: <a className={classes.kekus} href='tel:+380664190682'>+38 (066) 41-90-682</a></span></li>
                <li className={classes.aboutInfoItem}> <FaMapMarkedAlt /><span>City: Kyiv, Ukraine</span></li>
                <li className={classes.aboutInfoItem}> <FaMailBulk /><span>Mail: <a className={classes.kekus} href="mailto:anton.masuytkin@gmail.com"> anton.masuytkin@gmail.com</a></span></li>
                <li className={classes.aboutInfoItem}> <FaUserCheck /><span>Position: Frontend & Mobile Developer</span></li>
              </ul>
              <span style={{textAlign: 'start'}}>I am a guy from Kyiv, and I like improving everyday. I like books (classic literature), going to gym. Occasionally I play videogames and compose my own music. You can text or call me anytime to ask any questions for our future collaboration!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About