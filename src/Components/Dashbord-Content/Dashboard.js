import React from "react";
import NpsCharts from "./Charts/NpsCharts";
import NpsSurveyStatus from "./Survey_Status/NpsSurveyStatus";
import RecentComments from "./Comments/RecentComments";

const Dashboard = ({ data }) => {
  return (
    <div>
      {<NpsCharts data={data} />}
      <NpsSurveyStatus />
      {<RecentComments data={data} />}
    </div>
  );
};

export default Dashboard;
