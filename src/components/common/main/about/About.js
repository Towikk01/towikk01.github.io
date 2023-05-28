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
          <span>Hi there! I'm Anton, Towikk for friends ;) As a 21 age student I try to improve myself everyday in every aspect of my life, exactly i fell in love with coding!</span>
          <div className={classes.aboutWrapper}>
            <img src={image} className={classes.aboutImg} alt="about" />
            <div className={classes.aboutInfoContainer} >
              <h2>Frontend developer/react developer</h2>

              <ul className={classes.aboutInfo}>
                <li className={classes.aboutInfoItem}> <FaCalendarDay /><span>Birthday: 13 january 2002</span></li>
                <li className={classes.aboutInfoItem}> <FaGlobeEurope /><span>Website:towikk01</span></li>
                <li className={classes.aboutInfoItem}> <FaPhone /><span>Phone: <a className={classes.kekus} href='tel:+380664190682'>+38 (066) 41-90-682</a></span></li>
                <li className={classes.aboutInfoItem}> <FaMapMarkedAlt /><span>City: Kyiv, Ukraine</span></li>
                <li className={classes.aboutInfoItem}> <FaMailBulk /><span>Mail: <a className={classes.kekus} href="mailto:anton.masuytkin@gmail.com"> anton.masuytkin@gmail.com</a></span></li>
                <li className={classes.aboutInfoItem}> <FaUserCheck /><span>Specialisation: Frontend developer</span></li>

                <li className={classes.aboutInfoItem}> <FaArrowCircleUp /><span>Age: 21</span></li>
                <li className={classes.aboutInfoItem}> <FaHandsHelping /><span>Freelance: yes</span></li>
              </ul>
              <span>I am a student from Kyiv, who mind everyday how to be better. I like books(classique), some kind of sport and hookahs. Playing videogames sometimes and also write my own music, don't you mind to hear that? You can text\call me anytime to ask espesial questions for our future colobaration!</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About