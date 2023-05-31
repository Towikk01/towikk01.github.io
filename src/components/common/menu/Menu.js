import React from 'react';

import { FaPrint } from 'react-icons/fa';

import Links from "./Links";
import ScrollList from './ScrollList';

import image from '../../../images/ava.jpg'


import './Menu.scss'


const classes = {
  menu: "menu",
  img: "img",
  menuResp: 'menu-resp',
  print: 'print'
}

function Menu({ sectionRefs }) {
  return (
    <div className={classes.menu}>

      <div className={classes.menuResp}>
        <img className={classes.img} src={image} alt='Towikk' />
        <h2 style={{ textAlign: 'center' }}>Anton Masuytkin</h2>
      </div>
      <Links />
      <ScrollList sectionRefs={sectionRefs} />
      <button className={classes.print} onClick={window.print}><FaPrint /></button>
    </div >
  )
}

export default Menu

