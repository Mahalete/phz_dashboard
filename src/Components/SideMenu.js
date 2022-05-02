import React from "react";
import styles from "./SideMenu.module.css";
import { SideMenuData } from "./SideMenuData";
import { ReactComponent as Logo } from "../assets/PHZ _ ProScore.svg";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {

  let location =useLocation();
  return (
    <div data-testid="menu" className={styles.side_menu}>
      <Logo className={styles.logo} />
      <ul className={styles.side_menu_list}>
        {SideMenuData.map((val, key) => {
          return (
            <Link to={val.link}>
              <li
                id={location.pathname === val.link ? styles.active : ""}
                className={styles.row}
                key={key}
              >
                {" "}
                <div className={styles.icon}>{val.icon}</div>{" "}
                <div className={styles.title}>{val.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
