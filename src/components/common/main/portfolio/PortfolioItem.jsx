import './portfolioitem.scss';

function PortfolioItem({ project }) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item-content">
        <h2 className="portfolio-item-title">{project.name}</h2>
      </div>
      <div
        className="portfolio-item-image"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
    </div>
  );
};

export default PortfolioItem;