import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (

        <div className={style.content}>
            <ProfileInfo/>

            <MyPosts/>

        </div>
    )
};
export default Profile