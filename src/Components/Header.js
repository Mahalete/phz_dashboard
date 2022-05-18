import React from "react";
import style from "./Header.module.css";
import { SideMenuData } from "./SideMenuData";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = ({ dateGiver }) => {
  const [startDate, setStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 6)
  );
  const [endDate, setEndDate] = useState(new Date());

  const dateSetter = (setter, date) => {
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
    <>
      <div className={style.header}>
        {SideMenuData.map((val, key) => {
          if (location.pathname === val.link) {
            return (
              <div key={key}>
                <p data-testid={`title-${val.id}`} className={style.title}>
                  {val.title}
                </p>
              </div>
            );
          }
          return null;
        })}
        <div className={style.datePickerContainer}>
          <div data-testid="datePicker" className={style.datePicker}>
            <p className={style.startTitle}>From: </p>
            <DatePicker
              wrapperClassName={style.startDatePicker}
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => dateSetter("startDate", date)}
            />

            <p className={style.endTitle}> To: </p>
            <br></br>
            <DatePicker
              className={style.endDatePicker}
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={(date) => dateSetter("endDate", date)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
