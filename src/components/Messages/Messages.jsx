import React from 'react';
import style from './Messages.module.css';
import MessagesItem from './MessagesItem/MessagesItem';
import MessageText from './MessageText/MessageText';


/*
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
}*/

const Messages = (props) => {

    let messageData = [
        {id: 1, name:'Sveta'},
        {id: 2, name:'Gemar'},
        {id: 3, name:'Rysich'}
    ]
    let messageText= [
        {id:1, message:"hellow Pitwe"},
        {id:2, message:"it's a new history page from my life"},
        {id:3, message:"React"}
    ]

    let  messageElements = messageData
    .map(message => <MessagesItem name={message.name} id={message.id}/>) ;

    let  messsagesText = messageText 
    .map( messageTex =>  <MessageText text={messageTex.message}/> );


    
    return (
        <div className={style.dialogWrapper}>
            <div className={style.dialogItems}>
                {messageElements}
                
            </div>

            <div className={style.dialogMessages}>
            {messsagesText}
                
            </div>
        </div>
    )
};
export default Messages