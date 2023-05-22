import { FaHome, FaReceipt, FaClipboardList, FaBookOpen, FaGripLines, FaEnvelope } from "react-icons/fa";
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
  return (
    <ul className={classes.ScrollMenu}>
      <li className={classes.ScrollItem}>
        <a className={`${classes.ScrollLink} ${activeSection === 0 ? classes.Active : ''}`} href='#'>
          <FaHome /> <span>Home</span>
        </a>
      </li>
      <li className={classes.ScrollItem}>
        <a className={`${classes.ScrollLink} ${activeSection === 1 ? classes.Active : ''}`} href='#'>
          <FaReceipt /> <span>About</span>
        </a>
      </li>
      <li className={classes.ScrollItem}>
        <a className={classes.ScrollLink} href='#'>
          <FaClipboardList /> <span>Resume</span>
        </a>
      </li>
      <li className={classes.ScrollItem}>
        <a className={classes.ScrollLink} href='#'>
          <FaBookOpen /> <span>Portfolio</span>
        </a>
      </li>
      <li className={classes.ScrollItem}>
        <a className={classes.ScrollLink} href='#'>
          <FaGripLines /><span>Services</span>
        </a>
      </li>
      <li className={classes.ScrollItem}>
        <a className={classes.ScrollLink} href='#'>
          <FaEnvelope /> <span>Contact</span>
        </a>
      </li>
    </ul >
  )
}

export default ScrollList