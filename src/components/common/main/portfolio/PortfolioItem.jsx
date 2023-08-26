import './portfolioitem.scss';

function PortfolioItem({ project }) {
  return (
    <a href={project.url} target="_blank" rel='noreferrer'>
      <div className="portfolio-item">
        <div className="portfolio-item-content">
          <h2 className="portfolio-item-title">{project.name}</h2>
        </div>
        <div
          className="portfolio-item-image"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
      </div>
    </a>
  );
};

export default PortfolioItem;