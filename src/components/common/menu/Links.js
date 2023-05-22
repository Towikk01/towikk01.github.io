import { FaTelegram, FaInstagram, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import './Menu.scss'

const classes = {
  menu: "menu",
  menuList: "menu-list",
  menuItem: "menu-list-item",
  menuLink: 'menu-list-item-link'
}
function Links() {
  return (
    <>
      <ul className={classes.menuList}>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href='https://www.instagram.com/t0wikk/'>
            <FaInstagram />
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href='https://t.me/T0wikk'>
            <FaTelegram />
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href='https://www.linkedin.com/in/towikk/'>
            <FaLinkedinIn />
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href='discordapp.com/users/184387451752546305'>
            <FaDiscord />
          </a>
        </li>
      </ul>
    </>

  );
}


export default Links