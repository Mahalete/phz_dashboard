import React from "react";
import NpsCharts from "./Charts/NpsCharts";
import NpsSurveyStatus from "./Survey_Status/NpsSurveyStatus";
import RecentComments from "./Comments/RecentComments";

const Dashboard = ({ data ,dateRangeData}) => {
  return (
    <div>
     
      <NpsCharts data={dateRangeData} />
      <RecentComments data={dateRangeData} />
      <NpsSurveyStatus npsdata={data}/>
    </div>
  );
};

export default Dashboard;
