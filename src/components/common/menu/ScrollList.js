import { FaHome, FaReceipt, FaClipboardList, FaBookOpen, FaEnvelope, FaGripLines } from "react-icons/fa";
import './Menu.scss'
import useScrollSpy from 'react-use-scrollspy';

const classes = {
  ScrollMenu: 'scroll-menu',
  ScrollItem: 'scroll-menu-item',
  ScrollLink: 'scroll-menu-item-link',
  Active: 'active'
}
function ScrollList({ sectionRefs }) {

  const activeSection = useScrollSpy({
    sectionElementRefs: [...sectionRefs],
    offsetPx: -300,
  });

  const onLinkClick = (e, index) => {
    e.preventDefault();
    sectionRefs[index].current.scrollIntoView({
      behavior: 'smooth',
      offsetPx: -300,
    });
  };


  return (
    <ul className={classes.ScrollMenu}>
      <li className={classes.ScrollItem}>
        <button className={`${classes.ScrollLink} ${activeSection === 0 ? classes.Active : ''}`} onClick={(e) => onLinkClick(e, 0)}>
          <FaHome /> <span>Home</span>
        </button>
      </li>
      <li className={classes.ScrollItem}>
        <button className={`${classes.ScrollLink} ${activeSection === 1 ? classes.Active : ''}`} onClick={(e) => onLinkClick(e, 1)}>
          <FaReceipt /> <span>About</span>
        </button>
      </li>
      <li className={classes.ScrollItem}>
        <button className={`${classes.ScrollLink} ${activeSection === 2 ? classes.Active : ''}`} onClick={(e) => onLinkClick(e, 2)}>
          <FaGripLines /> <span>Skills</span>
        </button>
      </li>
      <li className={classes.ScrollItem}>
        <button className={`${classes.ScrollLink} ${activeSection === 3 ? classes.Active : ''}`} onClick={(e) => onLinkClick(e, 3)}>
          <FaClipboardList /> <span>Experience</span>
        </button>
      </li>
      <li className={classes.ScrollItem}>
        <button className={`${classes.ScrollLink} ${activeSection === 4 ? classes.Active : ''}`} onClick={(e) => onLinkClick(e, 4)}>
          <FaBookOpen /> <span>Portfolio</span>
        </button>
      </li>
      <li className={classes.ScrollItem}>
        <button className={`${classes.ScrollLink} ${activeSection === 5 ? classes.Active : ''}`} onClick={(e) => onLinkClick(e, 5)}>
          <FaEnvelope /> <span>Contact</span>
        </button>
      </li>
    </ul >
  )
}

export default ScrollList