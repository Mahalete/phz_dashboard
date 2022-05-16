import React, { useState } from "react";
import NpsCharts from "./Charts/NpsCharts";
import NpsSurveyStatus from "./Survey_Status/NpsSurveyStatus";
import RecentComments from "./Comments/RecentComments";
import { FILTERS } from "../CommentPage-Content/CommentPage";

const Dashboard = ({ data, dateRangeData }) => {
  const [filter, setFilter] = useState(FILTERS.ALL);

  return (
    <div>
      {dateRangeData.length > 0 && (
        <NpsCharts setFilter={setFilter} data={dateRangeData} />
      )}

      {dateRangeData.length > 0 && (
        <RecentComments filter={filter} data={dateRangeData} />
      )}

      {data && <NpsSurveyStatus npsdata={data} />}
    </div>
  );
};

export default Dashboard;
