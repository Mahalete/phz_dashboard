import React, { useState, useEffect } from "react";
import NpsCharts from "./Charts/NpsCharts";
import NpsSurveyStatus from "./Survey_Status/NpsSurveyStatus";
import RecentComments from "./Comments/RecentComments";
import Styles from "./Dashboard.module.css";
import { FILTERS } from "../CommentPage-Content/CommentPage";

const Dashboard = ({ data, dateRangeData }) => {
  useEffect(() => {
    setFilter(dateRangeData);
  }, [dateRangeData]);
  console.log("Dashboard ", data.length, dateRangeData.length);

  const [filter, setFilter] = useState(FILTERS.ALL);

  return (
    <div>
      {!dateRangeData ||
        (dateRangeData.length === 0 && (
          <p className={Styles.feedback_empty}>No data found.</p>
        ))}
      {dateRangeData && dateRangeData.length > 0 && (
        <NpsCharts setFilter={setFilter} data={dateRangeData} />
      )}

      {dateRangeData && dateRangeData.length > 0 && (
        <RecentComments filter={filter} data={dateRangeData} />
      )}

      {data && data.length > 0 && <NpsSurveyStatus npsdata={data} />}
    </div>
  );
};

export default Dashboard;
