import React from 'react';
import style from './Post.module.css';

const Post =  (props) => {
   
    return( 
    <div className={style.post_item2}>
         <img  src='https://l-userpic.livejournal.com/85491562/10108447'></img> {props.message}
    <div>
    <span>like</span>
    </div>
    <span>dislike</span>
    </div>
    )
};
export default Post