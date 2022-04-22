import React from "react";
import NpsCharts from "./Charts/NpsCharts";
import NpsSurveyStatus from "./Survey_Status/NpsSurveyStatus";
import RecentComments from "./Comments/RecentComments";
import Header from "../Header";

const Dashboard = ({ data }) => {
  return (
    <div>
      <Header />
      <NpsCharts data={data} />
      <RecentComments data={data} />
      <NpsSurveyStatus npsdata={data}/>
    </div>
  );
};

export default Dashboard;
