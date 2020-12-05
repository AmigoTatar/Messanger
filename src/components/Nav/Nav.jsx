import React from 'react';
import style  from './Nav.module.css';


 const Nav = () =>{

  return (


<div className={style.overlay}>
    <nav className={style.overlayMenu}>
      <ul className={style.roleMenu}>
        <li><a href='#' className={style.menuitem}>Profile</a></li>
        <li><a href='#' className={style.menuitem}>Message</a></li>
        <li><a href='#' className={style.menuitem}>Musick</a></li>
        <li><a href='#' className={style.menuitem}>Feeds</a></li>
        <li><a href='#' className={style.menuitem}>Setings</a></li>

      </ul>
    </nav>
</div>

    
  )};
export default Nav;