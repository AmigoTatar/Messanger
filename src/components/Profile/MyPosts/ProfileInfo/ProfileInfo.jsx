import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo =() => {
    return( <div>
        <div className={style.catsy}>
            <img src='https://i1.wallbox.ru/wallpapers/main2/201718/kotenok-pryzok-malys.jpg'/>
        </div>
    <div className={style.avatarDiscription}>
        <div className={style.avatar}>
            <img src='https://crosti.ru/patterns/00/1a/84/13c3975846/preview.jpg'/>
        </div>

        <div className={style.descriptionUsers}> ava +discription React dev</div>
    </div>
            </div>
    )
};

export default ProfileInfo;