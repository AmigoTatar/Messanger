import React from 'react';
import LikeDis from './LikesDislakes/LikeDis';
import style from './Post.module.css';

const Post =  (props) => {
   
    return( 
    <div className={style.post_item2}>
         <img  src='https://l-userpic.livejournal.com/85491562/10108447'></img> {props.message}
   
   <LikeDis plus='15' minus='2' />

    </div>
    )
};
export default Post