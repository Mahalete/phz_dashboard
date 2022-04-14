import React from "react";
import styles from "./SideMenu.module.css";
import {SideMenuData} from './SideMenuData';
import { ReactComponent as Logo } from "../assets/PHZ _ ProScore.svg";


const SideMenu = () => {
  return (
    <div className={styles.side_menu}>
      <Logo className= {styles.logo} />
      <ul className={styles.side_menu_list}>
      {SideMenuData.map((val,key) => {
        return(
          <li 
          id ={window.location.pathname === val.link ? styles.active : ""}
          className={styles.row} 
          key={key} 
          onClick={()=>{window.location.pathname = val.link}}>
            {" "}
            <div className ={styles.icon}>{val.icon}</div>{" "}
            <div className ={styles.title}>{val.title}</div>
          </li>
        )
      })}
      </ul>
    </div>
  );
};

export default SideMenu;
