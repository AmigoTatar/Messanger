import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from'./Profile.module.css';

const Profile =  () => {
    return(

        <div className={style.content}>

        <div className={style.catsy}>
        <img src='https://i1.wallbox.ru/wallpapers/main2/201718/kotenok-pryzok-malys.jpg'/>
      </div>
      
      <div className={style.vav_disc}> 
        <img src='https://crosti.ru/patterns/00/1a/84/13c3975846/preview.jpg'/>
        ava +discription</div>
      
     <MyPosts/>
      
      </div>
    )
};
export default Profile