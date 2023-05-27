import { useState } from 'react';
import './portfolio.scss';
import PortfolioItem from './PortfolioItem';

import projects from '../../../../constants/projects';


function Portfolio({ sectionRef }) {

  const classes = {
    porfolio: 'portfolio',
    porfolioTitle: 'portfolio-title',
    porfolioFilters: 'portfolio-filters',
    porfolioFiltersList: 'portfolio-filters-list',
    porfolioFiltersItem: 'portfolio-filters-list-item'
  };

  const [tab, setTab] = useState(null);
  const shownProjects = tab ? projects.filter(item => item.type == tab) : projects;


  return (
    <div className={classes.porfolio} ref={sectionRef}>
      <div className={classes.porfolioTitle}>
        <h2>Portfolio</h2>
        <p>Here you can see all of my projects that I done on my own or with my team. HTML, CSS, Java Script and React were used on it.</p>
      </div>
      <div className={classes.porfolioFilters}>
        <ul className={classes.porfolioFiltersList}>
          <li className={classes.porfolioFiltersItem}><button onClick={() => {
            setTab(null)
          }}>All</button></li>
          <li className={classes.porfolioFiltersItem}><button onClick={() => {
            setTab('HTML')
          }}>HTML</button></li>
          <li className={classes.porfolioFiltersItem}><button onClick={() => {
            setTab('React')
          }}>React</button></li>
        </ul>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '2vh',
        paddingBottom: '2vh',
        gap: '1vw'
      }}>
        {shownProjects.map(project => <PortfolioItem project={project} />)
        }
      </div>
    </div >
  )
};

export default Portfolio;