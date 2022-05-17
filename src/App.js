import "./App.css";

import Dashboard from "./Components/Dashbord-Content/Dashboard";
import CommentPage from "./Components/CommentPage-Content/CommentPage";
import DataPage from "./Components/DataPage-Content/DataPage";
import IntegrationPage from "./Components/IntegrationPage-Content/IntegrationPage";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import moment from "moment";

import Header from "./Components/Header";
import { SideMenu } from "./SideMenu";

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
        // console.log(res);
        setNpsdata(res.data);
      });
  };
  // console.log("npsdata ", npsdata);
  console.log("AppsData ", npsdatawithdaterange.length);

  const setDates = (setter, date) => {
    if (setter === "startDate") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

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
    setLoading(false);
  }, [formatedEndDate, formatedStartDate, startDate, endDate]);
  // console.log("npsdata with daterange", npsdatawithdaterange);

  return (
    <div className="App">
      <Header dateGiver={setDates} />
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
       
      </Routes>
      <SideMenu />
    </div>
  );
}

export default App;
