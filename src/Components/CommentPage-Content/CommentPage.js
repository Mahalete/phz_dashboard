import React, { useState, useEffect } from "react";
import style from "./CommentPage.module.css";
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew";
import ArrowRight from "@mui/icons-material/ArrowForwardIos";
import Pipe from "@mui/icons-material/Remove";
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
  const [feedbacks, setFeedbacks] = useState(
    data.length > 10 ? data.slice(0, 20) : data
  );
  const [pages, setPages] = useState(1);

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
        filteredData = data.filter((element) => element.score >= 9);
        break;
      case FILTERS.NEUTRAL:
        filteredData = data.filter(
          (element) => element.score > 6 && element.score < 9
        );

        break;
      case FILTERS.DETRACTOR:
        console.log(filter, filteredData);
        filteredData = data.filter((element) => element.score <= 6);
        break;

      default:
        filteredData = data;
        break;
    }
    console.log(filter, filteredData);
    filteredData =
      filteredData.length > 20 ? filteredData.slice(0, 20) : filteredData;
    setFeedbacks(filteredData);
  };

  return (
    <div>
      <Header />
      <div className={style.center_data}>
        <div>
          <div className={style.listMenu_button}>
            <button onClick={() => onFilterChange(FILTERS.ALL)}>ALL</button>
            <button onClick={() => onFilterChange(FILTERS.PROMOTER)}>
              PROMOTERS
            </button>
            <button onClick={() => onFilterChange(FILTERS.DETRACTOR)}>
              DETRACTORS
            </button>
            <button onClick={() => onFilterChange(FILTERS.NEUTRAL)}>
              NEUTRALS
            </button>
          </div>
        </div>
        <TableScrollbar height="400px">
          <div className={style.DataPageWrapper}>
            <table>
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
