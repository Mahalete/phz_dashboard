import React, { useState, useEffect } from "react";
import comment from "./CommentPage.module.css";
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
      <div className={comment.center_data}>
        <div>
          <div className={comment.listMenu_button}>
            <button
              data-testid="all_data"
              className={comment.listMenuAll_button}
              onClick={() => onFilterChange(FILTERS.ALL)}
            >
              ALL
            </button>
            <button
              data-testid="promoter_data"
              className={comment.listMenuAll_button}
              onClick={() => onFilterChange(FILTERS.PROMOTER)}
            >
              PROMOTERS
            </button>
            <button
              data-testid="detractor_data"
              className={comment.listMenuAll_button}
              onClick={() => onFilterChange(FILTERS.DETRACTOR)}
            >
              DETRACTORS
            </button>
            <button
              data-testid="neutral_data"
              className={comment.listMenuAll_button}
              onClick={() => onFilterChange(FILTERS.NEUTRAL)}
            >
              NEUTRALS
            </button>
          </div>
        </div>
        <TableScrollbar height="500px">
          <div className={comment.DataPageWrapper}>
            <table className={comment.commentTable} data-testid="tableA">
              <thead className={comment.column_headers}>
                <tr className={comment.commentTr}>
                  <th>Score </th>
                  <th>Feedback</th>
                </tr>
              </thead>

              <tbody>
                {feedbacks.map((val) => {
                  return (
                    <tr className={comment.commentTr} data-testid="answer" name={val.id} key={val.id}>
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
