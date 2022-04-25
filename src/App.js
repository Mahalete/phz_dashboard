import "./App.css";
import SideMenu from "./Components/SideMenu";
import Dashboard from "./Components/Dashbord-Content/Dashboard";
import CommentPage from "./Components/CommentPage-Content/CommentPage";
import CommentsPage from "./Components/CommentPage-Content/CommentPage";
import DataPage from "./Components/DataPage-Content/DataPage";
import GraphPage from "./Components/GraphPage-Content/GraphPage";
import SettingsPage from "./Components/SettingsPage-Content/SettingsPage";
import IntegrationPage from "./Components/IntegrationPage-Content/IntegrationPage";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  const [npsdata, setNpsdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNpsdata = () => {
    axios
      .get("http://localhost:3010/api/npsdata")
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setNpsdata(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNpsdata();
  }, []);

  return (
    <div className="App">
      <SideMenu />
      <Routes>
        <Route path="/" element={!loading && <Dashboard data={npsdata} />} />
        <Route
          path="/graph"
          element={!loading && <GraphPage data={npsdata} />}
        />
        <Route path="/data" element={!loading && <DataPage data={npsdata} />} />
        <Route
          path="/comment"
          element={!loading && <CommentPage data={npsdata} />}
        />
        <Route path="/integration" element={<IntegrationPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
