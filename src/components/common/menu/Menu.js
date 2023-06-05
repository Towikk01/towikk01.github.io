import React from 'react';

import { FaPrint, FaSun } from 'react-icons/fa';

import Links from "./Links";
import ScrollList from './ScrollList';

import SwitchTheme from '../../hooks/theme';

import image from '../../../images/ava.jpg'
import './Menu.scss'



const classes = {
  menu: "menu",
  img: "img",
  menuResp: 'menu-resp',
  print: 'print',
  theme: 'theme',
  actionButtons: 'action-buttons'
}

function Menu({ sectionRefs, toggleTheme }) {


  return (
    <header className={classes.menu}>
      <div className={classes.menuResp}>
        <img className={classes.img} src={image} alt='Towikk' />
        <h2 style={{ textAlign: 'center' }}>Anton Masuytkin</h2>
      </div>
      <Links />
      <ScrollList sectionRefs={sectionRefs} />
      <div className={classes.actionButtons}>
        <button className={classes.print} onClick={window.print}><FaPrint /></button>
        <button className={classes.theme} onClick={toggleTheme} ><FaSun /></button>
      </div>
    </header>
  )
}

export default Menu

