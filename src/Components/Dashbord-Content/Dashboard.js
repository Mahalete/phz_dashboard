import React from "react";
import NpsCharts from "./Charts/NpsCharts";
import NpsSurveyStatus from "./Survey_Status/NpsSurveyStatus";
import RecentComments from "./Comments/RecentComments";


const Dashboard = ({ data }) => {
  return (
    <div >
      
      <NpsCharts  data={data} />
      <RecentComments  />
      <NpsSurveyStatus  />
      
    </div>
  );
};

export default Dashboard;
