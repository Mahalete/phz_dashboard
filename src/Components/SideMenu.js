import React, { useState } from "react";
import styles from "./SideMenu.module.css";
import { SideMenuData } from "./SideMenuData";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SideMenu = ({ dateGiver }) => {
  const [startDate, setStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 6)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [showStart, setShowStart] = useState(
    new Date().setMonth(new Date().getMonth() - 6)
  );
  const [showEnd, setShowEnd] = useState(new Date());

  const dateSetter = (setter, date) => {
    if (setter === "startDate") {
      setStartDate(date);
      setShowStart(date);
    } else {
      setEndDate(date);
      setShowEnd(date);
    }
  };

  const filter = () => {
    dateGiver(new Date(startDate), new Date(endDate));
    setStartDate(new Date().setMonth(new Date().getMonth() - 6));
    setEndDate(new Date());
  };

  const reset = () => {
    setShowStart(new Date().setMonth(new Date().getMonth() - 6));
    setShowEnd(new Date());
    dateGiver(new Date(startDate), new Date(endDate));
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

      <div className={styles.line}></div>
      <div className={styles.datePickerContainer}>
        {" "}
        {/* <p className={styles.dateRangeTitle}>Date range</p> */}
        <div data-testid="datePicker" className={styles.datePicker}>
          <div className={styles.labelWrapper}>
            <p className={styles.titles}> From </p>
            <DatePicker
              className={styles.dates}
              dateFormat="yyyy-MM-dd"
              selected={showStart}
              onChange={(date) => dateSetter("startDate", date)}
            />
          </div>
          <div className={styles.labelWrapper}>
            <p className={styles.titles}> To </p>
            <br></br>
            <DatePicker
              className={styles.dates}
              dateFormat="yyyy-MM-dd"
              selected={showEnd}
              onChange={(date) => dateSetter("endDate", date)}
            />
          </div>
        </div>
        <button onClick={filter} className={styles.button}>
          Filter
        </button>
        <button onClick={reset} className={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
