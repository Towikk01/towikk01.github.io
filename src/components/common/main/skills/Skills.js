import './skills.scss'


function Skills({ sectionRef }) {
  const classes = {
    skills: 'skills',
    skillsTitle: 'skills-title',
    progress: 'progress',
    progressItem: 'progress-item',
    progressText: 'progress-item-text',
    progressBar: 'progress-item-bar',
    progressCompete: 'progress-item-bar-complete',
    skillsMobile: 'skills-mobile'
  }
  return (
    <div className={classes.skills} ref={sectionRef}>
      <div className={classes.skillsTitle}>
        Skills
      </div>
      <div className={classes.skillsMobile}>
        <span >I try to improve myself on Frontend development, also strong knowlegde about HTML, CSS and GIT system! Here you can see mine progress on different technologies!</span>
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
              <span>Bootstrap</span>
              <span>50%</span>
            </div>
            <div className={classes.progressBar}>
              <div style={{ width: "50%" }} className={classes.progressCompete}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills