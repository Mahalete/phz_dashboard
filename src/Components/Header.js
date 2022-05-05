import React from "react";
import style from "./Header.module.css";
import avatar from "../assets/unsplash_ILip77SbmOE.png";
import { SideMenuData } from "./SideMenuData";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const Header = ({ dateGiver }) => {
  const [loadingDaterange, setLoadingDaterange] = useState(true);
  const [npsdatawithdaterange, setNpsdatawithdaterange] = useState([]);
  const [startDate, setStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 6)
  );
  const [endDate, setEndDate] = useState(new Date());
  let location = useLocation();
  return (
    <>
      <div className={style.header}>
        {SideMenuData.map((val, key) => {
          if (location.pathname === val.link) {
            return (
              <div key={key}>
                <p data-testid ={`title-${val.id}`} className={style.title}>{val.title}</p>
              </div>
            );
          }
          return null;
        })}
        <div className={style.datePickerContainer}>
          <div data-testid = "datePicker" className={style.datePicker}>
            <p className={style.startTitle}>Start_Date: </p>
            <DatePicker
              wrapperClassName={style.startDatePicker}
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => dateGiver("startDate", date)}
            />

            <p className={style.endTitle}> End_Date: </p>
            <br></br>
            <DatePicker
              className={style.endDatePicker}
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={(date) => dateGiver("endDate", date)}
            />
          </div>
        </div>

        <div className={style.titleRight}>
          <img data-testid = "image" className={style.avatar} src={avatar} alt="avatar" />
          <div className={style.userName}>
            <p className={style.fullName}>Antti Hätinen</p>
            <p className={style.ocupation}>CEO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
