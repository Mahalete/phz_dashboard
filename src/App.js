import "./App.css";

import Dashboard from "./Components/Dashbord-Content/Dashboard";
import CommentPage from "./Components/CommentPage-Content/CommentPage";
import DataPage from "./Components/DataPage-Content/DataPage";
import GraphPage from "./Components/GraphPage-Content/GraphPage";
import SettingsPage from "./Components/SettingsPage-Content/SettingsPage";
import IntegrationPage from "./Components/IntegrationPage-Content/IntegrationPage";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

import styles from "../src/Components/SideMenu.module.css";
import { SideMenuData } from "../src/Components/SideMenuData";
import { ReactComponent as Logo } from "../src/assets/PHZ _ ProScore.svg";
import { Link, useLocation } from "react-router-dom";



export const SideMenu = () => {

  let location =useLocation();
  return (
    <div data-testid="menu" className={styles.side_menu}>
      <Logo className={styles.logo} data-testid="company-logo" />
      <ul className={styles.side_menu_list}>
        {SideMenuData.map((val, key) => {
          return (
            <Link  key={key} to={val.link}>
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

function App() {
  const [npsdata, setNpsdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadingDaterange, setLoadingDaterange] = useState(true);
  const [npsdatawithdaterange, setNpsdatawithdaterange] = useState([]);
  const [startDate, setStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 6)
  );
  const [endDate, setEndDate] = useState(new Date());
  // console.log("startdate", startDate);
  // console.log("enddate", endDate);
  let formatedStartDate = moment(startDate).format("YYYY-MM-DD");
  let formatedEndDate = moment(endDate).format("YYYY-MM-DD");
  // console.log("formatdate", formatedStartDate);
  // console.log("formatenddate", formatedEndDate);

  const getNpsdata = () => {
    axios
      .get(process.env.REACT_APP_URL)
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        console.log(res);
        setNpsdata(res.data);
        setLoading(false);
      });
  };
  console.log("npsdata ", npsdata);

  useEffect(() => {
    getNpsdata();
    const getNpsdataWithDateRange = () => {
      axios
        .get(
          `${process.env.REACT_APP_URL}/${formatedStartDate}/${formatedEndDate}`
        )
        .catch((error) => {
          console.log(error);
        })
        .then((res) => {
          setNpsdatawithdaterange(res.data);
          setLoadingDaterange(false);
        });
    };
    getNpsdataWithDateRange();
  }, [formatedEndDate, formatedStartDate, startDate, endDate]);
  console.log("npsdata with daterange", npsdatawithdaterange);

  return (
    <div className="App">

      <SideMenu />
      <Routes>
        <Route
          path="/"
          element={
            !loading &&
            !loadingDaterange && (
              <Dashboard data={npsdata} dateRangeData={npsdatawithdaterange} />
            )
          }
        />
        <Route
          path="/graph"
          element={!loading && <GraphPage data={npsdata} />}
        />
        <Route
          path="/data"
          element={
            !loading &&
            !loadingDaterange && <DataPage data={npsdatawithdaterange} />
          }
        />
        <Route
          path="/comment"
          element={
            !loading &&
            !loadingDaterange && <CommentPage data={npsdatawithdaterange} />
          }
        />
        <Route path="/integration" element={<IntegrationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        
      </Routes>
      <SideMenu />
    </div>
  );
}

export default App;
