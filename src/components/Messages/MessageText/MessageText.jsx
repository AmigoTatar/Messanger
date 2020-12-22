import React from 'react';
import style from './../Messages.module.css';


const MessageText = (props) => {
    return (
        <div className={style.message}> {props.text}</div>
    )
}


export default MessageText