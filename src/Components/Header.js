import React from 'react';
import style from './Header.module.css'
import avatar from '../assets/unsplash_ILip77SbmOE.png'

const Header = () => {
    
    return (
        <div className={style.header}>
            <p className={style.title}>Dashboard</p>

            <div className={style.titleRight}>
            <img className={style.avatar} src={avatar} alt="avatar" />
            <div className={style.userName}>
                <p className={style.fullName}>Antti Hätinen</p>
                <p className={style.ocupation}>CEO</p>
            </div>
            </div>
        </div>
    );
};

export default Header;