import "./App.css";

import Dashboard from "./Components/Dashbord-Content/Dashboard";
import CommentPage from "./Components/CommentPage-Content/CommentPage";
import DataPage from "./Components/DataPage-Content/DataPage";
import IntegrationPage from "./Components/IntegrationPage-Content/IntegrationPage";
import SideMenu from "./Components/SideMenu";

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function App() {
  const [npsdata, setNpsdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadingDaterange, setLoadingDaterange] = useState(true);
  const [npsdatawithdaterange, setNpsdatawithdaterange] = useState([]);
  const [startDate, setStartDate] = useState(
    new Date().setMonth(new Date().getMonth() - 6)
  );
  const [endDate, setEndDate] = useState(new Date());
  let formatedStartDate = moment(startDate).format("YYYY-MM-DD");
  let formatedEndDate = moment(endDate).format("YYYY-MM-DD");

  const getNpsdata = () => {
    axios
      .get(process.env.REACT_APP_URL)
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setNpsdata(res.data);
      });
  };

  const setDates = (start, end) => {
    setStartDate(start);
    setEndDate(end);
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

  return (
    <div className="App">
      <SideMenu dateGiver={setDates} />
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
    </div>
  );
}

export default App;
