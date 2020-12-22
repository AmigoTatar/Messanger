import React from 'react';
import style from './../Messages.module.css';
import {NavLink} from "react-router-dom";


const MessagesItem = (props) => {
    let path = "/message/" + props.id;
    return (
        <div className={style.userDialogs + ' ' + style.active}><NavLink
            to={path}> {props.name}</NavLink>
            </div>
    )
};



export default MessagesItem