import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Nav.module.css';


const Nav = () => {

    return (


        <div className={style.overlay}>
            <nav className={style.overlayMenu}>
                <ul className={style.roleMenu}>
                    <li><NavLink to='/Profile' activeClassName={style.active} >Profile</NavLink></li>
                    <li><NavLink to='/Messages' activeClassName = {style.active}>Messages </NavLink></li>
                    <li><NavLink to='/Music' activeClassName={style.active}>Music</NavLink></li>
                    <li><NavLink to='/Feeds' activeClassName={style.active}>Feeds</NavLink></li>
                    <li><NavLink to='/Settings' activeClassName={style.active}>Settings</NavLink></li>


                </ul>
            </nav>
        </div>


    )
};
export default Nav