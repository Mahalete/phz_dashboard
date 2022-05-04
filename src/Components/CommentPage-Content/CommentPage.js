import React, { useState, useEffect } from "react";
import style from "./CommentPage.module.css";
import Header from "../Header";
import TableScrollbar from "react-table-scrollbar";

const FILTERS = {
  PROMOTER: "promoter",
  DETRACTOR: "detractor",
  NEUTRAL: "neutral",
  ALL: "all",
};

const getQueryString = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get("filter");
};

const CommentPage = ({ data }) => {
  const latestData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  const readyData = latestData.filter((element) => element.feedback.length > 0);
  const [feedbacks, setFeedbacks] = useState(readyData);

  useEffect(() => {
    const filter = getQueryString();
    console.log("Inside Comment Page", filter);
    if (filter) {
      onFilterChange(filter);
    }
  }, []);

  const onFilterChange = (filter) => {
    let filteredData = [];
    switch (filter) {
      case FILTERS.PROMOTER:
        filteredData = readyData.filter((element) => element.score >= 9);
        break;
      case FILTERS.NEUTRAL:
        filteredData = readyData.filter(
          (element) => element.score > 6 && element.score < 9
        );

        break;
      case FILTERS.DETRACTOR:
        console.log(filter, filteredData);
        filteredData = readyData.filter((element) => element.score <= 6);
        break;

      default:
        filteredData = readyData;
        break;
    }
    console.log(filter, filteredData);
    filteredData =
      // filteredData.length > 20 ? filteredData.slice(0, 20) : filteredData;
      setFeedbacks(filteredData);
  };

  return (
    <div>
      <Header />
      <div className={style.center_data}>
        <div>
          <div className={style.listMenu_button}>
            <button
              className={style.listMenuAll_button}
              onClick={() => onFilterChange(FILTERS.ALL)}
            >
              ALL
            </button>
            <button
              className={style.listMenuAll_button}
              onClick={() => onFilterChange(FILTERS.PROMOTER)}
            >
              PROMOTERS
            </button>
            <button
              className={style.listMenuAll_button}
              onClick={() => onFilterChange(FILTERS.DETRACTOR)}
            >
              DETRACTORS
            </button>
            <button
              className={style.listMenuAll_button}
              onClick={() => onFilterChange(FILTERS.NEUTRAL)}
            >
              NEUTRALS
            </button>
          </div>
        </div>
        <TableScrollbar height="500px">
          <div className={style.DataPageWrapper}>
            <table data-testid="table">
              <thead className={style.column_headers}>
                <tr>
                  <th>Score </th>
                  <th>Feedback</th>
                </tr>
              </thead>

              <tbody>
                {feedbacks.map((val) => {
                  return (
                    <tr>
                      <td>{val.score}</td>
                      <td>{val.feedback}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TableScrollbar>
      </div>
    </div>
  );
};
export default CommentPage;
