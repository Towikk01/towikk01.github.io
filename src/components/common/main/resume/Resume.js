import './resume.scss';

function Resume({ sectionRef }) {
  const classes = {
    resume: 'resume',
    resumeTitle: 'resume-container-title',
    resumeContainer: 'resume-container',
    resumeWrapper: 'resume-wrapper',
    resumeItem: 'resume-wrapper-item',
    resumeBlock: 'resume-wrapper-item-block'
  }

  return (
    <div className={classes.resume} ref={sectionRef} id='resume'>
      <div className={classes.resumeContainer}>
        <div className={classes.resumeTitle}>
          <h2>Experience</h2>
        </div>
        <span>Below you will see details about my education and commercial experience!</span>
      </div>
      <div className={classes.resumeWrapper}>
        <div className={classes.resumeItem}>
          <h3>Summary</h3>
          <div className={classes.resumeBlock}>
            <h4>Anton Masuytkin</h4>
            <p>I am a frontend developer with 1+ year experience of design and development of freelance projects with my team and by myself using different tools. </p>
            <p></p>
          </div>
          <h3>Education</h3>
          <div className={classes.resumeItem}>
            <div className={classes.resumeBlock}>
              <h4>Entrepreneurship in hotel and restaurant business</h4>
              <div style={{ backgroundColor: '#76aaea', display: 'inline' }}>
                <span>2019-2024</span>
              </div>
              <i style={{ display: 'block', paddingTop: '1.5rem', fontSize: '1.7rem' }}>Kyiv National University of Technologies and Design </i>
              <p>I am dreaming to open my own restaurant with best service and hookahs.</p>
            </div>
          </div>
        </div>

        <div className={classes.resumeItem}>
          <h3>Working expirience</h3>
          <div className={classes.resumeBlock}>
            <h4>Junior Frontend Developer</h4>
            <div style={{ backgroundColor: '#76aaea', display: 'inline' }}>
              <span>2021-2022</span>
            </div>
            <i style={{ display: 'block', paddingTop: '1.5rem', fontSize: '1.7rem' }}>Kyiv, Ukraine</i>
            <ul>
              <li>Participating in development, partially design, and deployment of commercial projects;</li>
              <li>Cooperating with 'Blue Zenith' team on freelance projects, and contributed to almost all parts of the project; </li>
              <li>Supervise the assessment of all code in order to ensure quality and accuracy through the project.</li>

            </ul>
          </div>
           <div className={classes.resumeBlock}>
            <h4>Frontend Web Developer</h4>
            <div style={{ backgroundColor: '#76aaea', display: 'inline' }}>
              <span>2023-2024</span>
            </div>
            <i style={{ display: 'block', paddingTop: '1.5rem', fontSize: '1.7rem' }}>Kyiv, Ukraine</i>
            <ul>
              <li>Creating animation-rich websites, landings, SPA's.</li>
              <li>Cooperating with 'CodeHive' company, working together of many projects.</li>
              <li>Working full-time using great tech stack.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Resume;