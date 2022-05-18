import React, { useState } from "react";
import styles from "../src/Components/SideMenu.module.css";
import { SideMenuData } from "../src/Components/SideMenuData";
import { ReactComponent as Logo } from "../src/assets/PHZ _ ProScore.svg";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SideMenu = ({ dateGiver }) => {
  const [startDate, setStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 6)
  );
  const [endDate, setEndDate] = useState(new Date());

  const dateSetter = (setter, date) => {
    console.log(setter, date);
    if (setter === "startDate") {
      dateGiver(setter, date);
      setStartDate(date);
    } else {
      dateGiver("endDate", date);
      setEndDate(date);
    }
  };

  let location = useLocation();
  return (
    <div data-testid="menu" className={styles.side_menu}>
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

      <div className={styles.datePickerContainer}>
        {" "}
        <p className={styles.dateRangeTitle}>Date range</p>
        <div data-testid="datePicker" className={styles.datePicker}>
          <div className={styles.labelWrapper}>
            <p className={styles.titles}> From </p>
            <DatePicker
              wrapperClassName={styles.startDatePicker}
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => dateSetter("startDate", date)}
            />
          </div>
          <div className={styles.labelWrapper}>
            <p className={styles.titles}> To </p>
            <br></br>
            <DatePicker
              className={styles.endDatePicker}
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={(date) => dateSetter("endDate", date)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
