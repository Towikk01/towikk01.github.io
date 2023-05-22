import './resume.scss'
import useScrollSpy from 'react-use-scrollspy';


function Resume() {

  function ScrollList({ sectionRefs }) {
    const activeSection = useScrollSpy({
      sectionElementRefs: [...sectionRefs],
      offsetPx: -300,
    })
  }

  const classes = {
    resume: 'resume',
    resumeTitle: 'resume-container-title',
    resumeContainer: 'resume-container',
    resumeWrapper: 'resume-wrapper',
    resumeItem: 'resume-wrapper-item',
    resumeBlock: 'resume-wrapper-item-block'

  }
  return (
    <div className={classes.resume}>
      <div className={classes.resumeContainer}>
        <div className={classes.resumeTitle}>
          <h2>Resume</h2>
        </div>
        <span>In the block below you can see all detail information about me, also my skill education and main profile!</span>
      </div>
      <div className={classes.resumeWrapper}>
        <div className={classes.resumeItem}>
          <h3>Sumary</h3>
          <div className={classes.resumeBlock}>
            <h4>Anton Masuytin</h4>
            <p>I am a frontend developer with 1+ year of expirience designing and developing freelance project with my command and by my own, do projects with different technologies. </p>
            <ul>
              <li>Kyiv, Ukraine, EU</li>
              <li>(066) 41 90 682</li>
              <li>anton.masuytkin@gmail.com</li>
            </ul>
          </div>
          <div className={classes.resumeItem}>
            <h3>Education</h3>
            <div className={classes.resumeBlock}>
              <h4>Entrepreneurship in hotel and restaurant business</h4>
              <div style={{ backgroundColor: '#76aaea', display: 'inline' }}>
                <span>2019-2024</span>
              </div>
              <i style={{ display: 'block', paddingTop: '1.5rem' }}>Kyiv National University of Technologies and Design </i>
              <p>I was dreaming to open my own business restaurant with best service and hookahs.</p>
            </div>
          </div>
        </div>
        <div className={classes.resumeItem}>
          <h3>Professional expirience</h3>
          <div className={classes.resumeBlock}>
            <h4>Junior frontend developer</h4>
            <div style={{ backgroundColor: '#76aaea', display: 'inline' }}>
              <span>2019-Present</span>
            </div>
            <i style={{ display: 'block', paddingTop: '1.5rem' }}>Kyiv, Ukraine, EU</i>
            <ul>
              <li>Lead in development, some design, and production commercial projects.</li>
              <li>Working with my 'HRHD' team on freelance projects, and do almost all aspects of the project. </li>
              <li>Supervise the assessment of all code in order to ensure quality and accuracy of the project</li>

            </ul>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Resume