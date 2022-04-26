import React, { useState } from "react";
import style from "./CommentPage.module.css";
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew";
import ArrowRight from "@mui/icons-material/ArrowForwardIos";
import Pipe from "@mui/icons-material/Remove";
import Header from "../Header";

const FILTERS = {
  PROMOTER: "promoter",
  DETRACTOR: "detractor",
  NEUTRAL: "neutral",
  ALL: "all",
};

const CommentPage = ({ data }) => {
  const [feedbacks, setFeedbacks] = useState(
    data.length > 10 ? data.slice(0, 10) : data
  );
  const [pages, setPages] = useState(1);

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
      filteredData.length > 20 ? filteredData.slice(0, 10) : filteredData;
    setFeedbacks(filteredData);
  };

  const nextPage = () => {
    if (data.length > 10 * pages) {
      setPages(pages + 1);
      let startIndex = pages * 10;
      data.length > startIndex + 10
        ? setFeedbacks(data.slice(startIndex, startIndex + 10))
        : setFeedbacks(data.slice(startIndex));
    }
  };

  const previousPage = () => {
    let startIndex = pages * 10;
    if (pages !== 1) {
      setPages(pages - 1);
      setFeedbacks(data.slice(startIndex, startIndex + 10));
    }
    setPages(1);
    setFeedbacks(data.slice(0, 10));
  };

  return (
    <div className={style.center_data}>
      <Header />

      <div className={style.nextPage}>
        <div className={style.indicator}>
        <ArrowRight className={style.arrows} onClick={nextPage} />
        <h3>{pages}</h3>
        <ArrowLeft className={style.arrows} onClick={previousPage} />
        <h3> Page </h3>
        <Pipe className={style.pipe} />
        <h3>
          {data.length < 11
            ? feedbacks.length
            : (pages - 1) * 10 + feedbacks.length}{" "}
          / {data.length}
        </h3>
        </div>
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
      <div className={style.DataPageWrapper}>
        <table>
          <thead>
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
    </div>
  );
};
export default CommentPage;
