import React from "react";
import NpsCharts from "./Charts/NpsCharts";
import NpsSurveyStatus from "./Survey_Status/NpsSurveyStatus";
import RecentComments from "./Comments/RecentComments";
import Header from "../Header";

const Dashboard = ({ data ,dateRangeData}) => {
  return (
    <div>
      <Header />
      <NpsCharts data={dateRangeData} />
      <RecentComments data={dateRangeData} />
      <NpsSurveyStatus npsdata={data}/>
    </div>
  );
};

export default Dashboard;
