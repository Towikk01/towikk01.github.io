import { useState } from 'react';
import './portfolio.scss';
import PortfolioItem from './PortfolioItem';

import projects from '../../../../constants/projects';


function Portfolio({ sectionRef }) {

  const classes = {
    portfolio: 'portfolio',
    portfolioTitle: 'portfolio-title',
    portfolioFilters: 'portfolio-filters',
    portfolioFiltersList: 'portfolio-filters-list',
    portfolioFiltersItem: 'portfolio-filters-list-item',
    portfolioItems: 'portfolio-items'
  };

  const [tab, setTab] = useState(null);
  const shownProjects = tab ? projects.filter(item => item.type == tab) : projects;


  return (
    <div className={classes.portfolio} ref={sectionRef}>
      <div className={classes.portfolioTitle}>
        <h2>Portfolio</h2>
        <p>Here you can see all my projects that I have done by myself or with my team. HTML, CSS, Java Script and React were used on it</p>
      </div>
      <div className={classes.portfolioFilters}>
        <ul className={classes.portfolioFiltersList}>
          <li className={classes.portfolioFiltersItem}><button onClick={() => {
            setTab(null)
          }}>All</button></li>
          <li className={classes.portfolioFiltersItem}><button onClick={() => {
            setTab('HTML')
          }}>HTML</button></li>
          <li className={classes.portfolioFiltersItem}><button onClick={() => {
            setTab('React')
          }}>React</button></li>
        </ul>
      </div>
      <div className={classes.portfolioItems}>
        {shownProjects.map(project => <PortfolioItem project={project} />)
        }
      </div>
    </div >
  )
};

export default Portfolio;