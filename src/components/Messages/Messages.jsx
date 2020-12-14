import React from 'react';
import style from './Messages.module.css';
import {NavLink} from "react-router-dom";

const MessagesItem = (props) => {
    return (
        <div className={style.userDialogs + ' ' + style.active}><NavLink
            to={'/Messages/' + props.id}> {props.name}</NavLink></div>
    )
};
const MessageText = (props) => {
    return (
        <div className={style.message}> {props.text}</div>
    )
}

const Messages = () => {

    let messageData = [
        {id: 1, name:'Sveta'},
        {id: 2, name:'Gemar'},
        {id: 3, name:'Rysich'}
    ];

    let messageText= [
        {id:1, message:"hellow Pitwe"},
        {id:2, message:"it's a new history page from my life"},
        {id:3, message:"React"}
    ];


    
    return (
        <div className={style.dialogWrapper}>
            <div className={style.dialogItems}>

                <MessagesItem name={messageData[0].name} id={messageData[0].id}/>

                <MessagesItem name={messageData[1].name} id={messageData[1].id}/>

                <MessagesItem name={messageData[2].name} id={messageData[2].id}/>
            </div>

            <div className={style.dialogMessages}>

                <MessageText text={messageText[0].message}/>

                <MessageText text={messageText[1].message}/>

                <MessageText text={messageText[2].message}/>
            </div>
        </div>
    )
};
export default Messages