import React, { useState, useEffect } from "react";
import style from "./RecentComments.module.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { FILTERS } from "../../CommentPage-Content/CommentPage";
import { Scrollbars } from "rc-scrollbars";

const Recent_comments = ({ data, filter }) => {
  const latestData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(filter);

  let readyData = latestData.filter((element) => element.feedback.length > 0);
  const [feedbacks, setFeedbacks] = useState(readyData);

  useEffect(() => {
    onFilterChange(filter);
    // setFeedbacks(data);
  }, [filter, data]);

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

  //Display part og the paragraph wne greater than 20 characters

  const comment_data = feedbacks;
  // .length > 4 ? feedbacks.slice(0, 4) : feedbacks;
  //console.log(comment_data);
  const getFeedbackScoreStyle = (score) => {
    if (score >= 9) {
      return FILTERS.PROMOTER;
    } else if (score > 6 && score < 9) {
      return FILTERS.NEUTRAL;
    } else if (score <= 6) {
      return FILTERS.DETRACTOR;
    }

    return "";
  };

  return (
    <div className={style.comments_container}>
      <div className={style.title_feedback}>
        <h1>Comments</h1>
        <Link to="/comment">See all</Link>
      </div>
      <Scrollbars style={{ width: "20vw", height: "50vh" }}>
        <div className={style.comments}>
          {comment_data.length === 0 && (
            <p className={style.feedback_empty}>No comments found.</p>
          )}
          {comment_data.length > 0 &&
            comment_data.map(({ id, date, score, feedback }) => (
              <div
                className={`${style.feedback} ${
                  style[`feedback_${getFeedbackScoreStyle(score)}`]
                }`}
                key={id}
              >
                <p
                  className={`${style.feedback_score} ${
                    style[getFeedbackScoreStyle(score)]
                  }`}
                >
                  {score}
                </p>
                <p className={style.feedback_display}>{feedback}</p>

                <span className={style.date_display}>
                  {moment([date], "YYYYMMDD").fromNow()}
                </span>
              </div>
            ))}
        </div>
      </Scrollbars>
    </div>
  );
};

export default Recent_comments;
