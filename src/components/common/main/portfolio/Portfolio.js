import './portfolio.scss'
import useScrollSpy from 'react-use-scrollspy';


function Portfolio() {

  const projects = [{}, {}, {}]

  const classes = {
    porfolio: 'portfolio',
    porfolioTitle: 'portfolio-title',
    porfolioFilters: 'portfolio-filters',
    porfolioFiltersList: 'portfolio-filters-list',
    porfolioFiltersItem: 'portfolio-filters-list-item'

  }

  return (
    <div className={classes.porfolio}>
      <div className={classes.porfolioTitle}>
        <h2>Portfolio</h2>
        <p>Here you can see all of my projects that I done on my own or with my team. HTML, CSS, Java Script and React were used on it.</p>
      </div>
      <div className={classes.porfolioFilters}>
        <ul className={classes.porfolioFiltersList}>
          <li className={classes.porfolioFiltersItem}>ALL</li>
          <li className={classes.porfolioFiltersItem}>HTML</li>
          <li className={classes.porfolioFiltersItem}>React</li>
        </ul>
      </div>
    </div>

  )
}

export default Portfolio