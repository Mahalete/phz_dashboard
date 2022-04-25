import React from 'react';
import style from './Header.module.css';
import avatar from '../assets/unsplash_ILip77SbmOE.png';
import { SideMenuData } from "./SideMenuData";
import { useLocation } from "react-router-dom";


const Header = () => {
    let location =useLocation();
    return (
        <div className={style.header}>

          
        {SideMenuData.map((val, key) => {
            if (location.pathname === val.link){
                return (
            
                    <div key={key}>
                    <p className={style.title}>{val.title}</p>
                  </div>
                  );
            }
          return (
              null
          );
        })}
      

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