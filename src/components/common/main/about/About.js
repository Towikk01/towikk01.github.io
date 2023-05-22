import './about.scss'
import image from '../../../../images/me4.jpeg'
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
  progress: 'progress',
  progressItem: 'progress-item',
  progressText: 'progress-item-text',
  progressBar: 'progress-item-bar',
  progressCompete: 'progress-item-bar-complete'
}

function About({ sectionRef }) {
  return (
    <div ref={sectionRef} className={classes.about}>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutTitle}>
          About
        </div>
        <div className={classes.aboutSection}>
          <span>Hi there! I'm Anton, Towikk for friends ;) As a 21 age student I try to improve myself everyday in every aspect of my life, exactly i fell in love with coding!</span>
          <div className={classes.aboutWrapper}>
            <img src={image} className={classes.aboutImg}></img>
            <div className={classes.aboutInfoContainer} >
              <h2 style={{ margin: '0', paddingBottom: '1.5rem' }}>Frontend developer/react developer</h2>

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
              <span style={{ textAlign: 'justify', paddingTop: "2.5rem" }}>I am a student from Kyiv, who mind everyday how to be better. I like books(classique), some kind of sport and hookahs. Playing videogames sometimes and also write my own music, don't you mind to hear that? You can text\call me anytime to ask espesial questions for our future colobaration!</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        backgroundColor: '#ddd9d9',
        width: '100%',
        paddingTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ alignSelf: 'center', paddingTop: '2rem' }} className={classes.aboutTitle}>
          Skills
        </div>
        <div style={{ width: '90%', alignSelf: 'center', paddingTop: '2rem', paddingBottom: '5rem', }}>
          <span style={{ fontSize: '1.5rem' }}>I try to improve myself on Frontend development, also strong knowlegde about HTML, CSS and GIT system! Here you can see mine progress on different technologies!</span>
          <div className={classes.progress}>
            <div className={classes.progressItem}>
              <div className={classes.progressText}>
                <span>HTML</span>
                <span>100%</span>
              </div>
              <div className={classes.progressBar}>
                <div style={{ width: "100%" }} className={classes.progressCompete}></div>
              </div>
            </div>
            <div className={classes.progressItem}>
              <div className={classes.progressText}>
                <span>CSS</span>
                <span>100%</span>
              </div>
              <div className={classes.progressBar}>
                <div style={{ width: "100%" }} className={classes.progressCompete}></div>
              </div>
            </div><div className={classes.progressItem}>
              <div className={classes.progressText}>
                <span>Java Script</span>
                <span>80%</span>
              </div>
              <div className={classes.progressBar}>
                <div style={{ width: "80%" }} className={classes.progressCompete}></div>
              </div>
            </div><div className={classes.progressItem}>
              <div className={classes.progressText}>
                <span>React</span>
                <span>50%</span>
              </div>
              <div className={classes.progressBar}>
                <div style={{ width: "50%" }} className={classes.progressCompete}></div>
              </div>
            </div><div className={classes.progressItem}>
              <div className={classes.progressText}>
                <span>GiT</span>
                <span>100%</span>
              </div>
              <div className={classes.progressBar}>
                <div style={{ width: "100%" }} className={classes.progressCompete}></div>
              </div>
            </div><div className={classes.progressItem}>
              <div className={classes.progressText}>
                <span>Next JS</span>
                <span>0%</span>
              </div>
              <div className={classes.progressBar}>
                <div style={{ width: "1%" }} className={classes.progressCompete}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About