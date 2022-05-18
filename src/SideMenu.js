import styles from "../src/Components/SideMenu.module.css";
import { SideMenuData } from "../src/Components/SideMenuData";
import { ReactComponent as Logo } from "../src/assets/PHZ _ ProScore.svg";
import { Link, useLocation } from "react-router-dom";
export const SideMenu = () => {
  let location = useLocation();
  return (
    <div data-testid="menu" className={styles.side_menu}>
      <Logo className={styles.logo} data-testid="company-logo" />
      <ul className={styles.side_menu_list}>
        {SideMenuData.map((val, key) => {
          return (
            <Link key={key} to={val.link}>
              <li
                id={location.pathname === val.link ? styles.active : ""}
                className={styles.row}
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
