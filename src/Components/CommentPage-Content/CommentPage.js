import React, { useState } from "react";
import style from "./CommentPage.module.css";
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew";
import ArrowRight from "@mui/icons-material/ArrowForwardIos";
import Pipe from "@mui/icons-material/Remove";
import Sorting from "@mui/icons-material/ArrowDropDown";

const CommentPage = ({ data }) => {
  const [feedbacks, setFeedbacks] = useState(
    data.length > 10 ? data.slice(0, 20) : data
  );
  const [pages, setPages] = useState(1);

  const nextPage = () => {
    if (data.length > 20 * pages) {
      setPages(pages + 1);
      let startIndex = pages * 20;
      data.length > startIndex + 20
        ? setFeedbacks(data.slice(startIndex, startIndex + 20))
        : setFeedbacks(data.slice(startIndex));
    }
  };

  const previousPage = () => {
    let startIndex = pages * 20;
    if (pages !== 1) {
      setPages(pages - 1);
      setFeedbacks(data.slice(startIndex, startIndex + 20));
    }
    setPages(1);
    setFeedbacks(data.slice(0, 20));
  };
  const sorting = (sortingBase) => {
    let result;
    if (sortingBase === "score") {
      result = data.sort((a, b) => a.score - b.score);
    } else if (sortingBase === "id") {
      result = data.sort((a, b) => a.id - b.id);
    } else {
      result = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    setFeedbacks(result.slice(0, 20));
  };

  return (
    <div className={style.center_data}>
      <h1 className={style.title_commentsPage}>Comments</h1>

      <div className={style.nextPage}>
        <ArrowRight className={style.arrows} onClick={nextPage} />
        <h3>{pages}</h3>
        <ArrowLeft className={style.arrows} onClick={previousPage} />
        <h3> Page </h3>
        <Pipe className={style.pipe} />
        <h3>
          {data.length < 11
            ? feedbacks.length
            : (pages - 1) * 20 + feedbacks.length}{" "}
          / {data.length}
        </h3>
        <div className={style.listMenu}>
          <li>ALL</li>
          <li>PROMOTERS</li>
          <li>DETRACTORS</li>
          <li>NEUTRALS</li>
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
