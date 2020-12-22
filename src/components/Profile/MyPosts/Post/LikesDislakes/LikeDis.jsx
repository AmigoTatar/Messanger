import React from 'react';
import style from './LikeDis.module.css';

const LikeDis =  (props) => {
   
    return( 
        <div>
    <div className={style.like}>
    <span>like {props.plus}</span>
    </div>

    <div className={style.dislike}>
    <span>dislike {props.minus} </span>
    </div>
    </div>
    
    )
};
export default LikeDis