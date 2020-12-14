import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (<header className={style.header}>
        <div><img
            src='https://cdn3.iconfinder.com/data/icons/arrows-4-5/30/chemical_reaction-128.png'/>
        </div>

        <div className={style.logoName}> <p>React-App-Redux</p> </div>

    </header>)
};

export default Header