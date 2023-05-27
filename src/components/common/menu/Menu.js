import './Menu.scss'
import Links from "./Links";
import ScrollList from './ScrollList';
import image from '../../../images/ava.jpg'
import React from 'react';


const classes = {
  menu: "menu",
  img: "img"
}

function Menu({ sectionRefs }) {
  return (
    <div className={classes.menu}>
      <img className={classes.img} src={image} alt='Towikk' />
      <h2 style={{ textAlign: 'center' }}>Anton Masuytkin</h2>
      <Links />
      <ScrollList sectionRefs={sectionRefs} />
    </div>
  )
}

export default Menu

