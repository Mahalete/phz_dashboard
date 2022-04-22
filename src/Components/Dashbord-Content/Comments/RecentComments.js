import React, { useState } from "react";
import style from "./RecentComments.module.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Recent_comments = ({ data }) => {
  const latestData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(latestData);

  let filteredData = latestData.filter(
    (element) => element.feedback.length > 0
  );
  console.log(filteredData);

  const comment_data =
    filteredData.length > 4 ? filteredData.slice(0, 4) : filteredData;
  console.log(comment_data);

  return (
    <div className={style.comments_container}>
      <div className={style.title_feedback}>
        <h1>Recent comments</h1>
        <Link to="/comment">See all</Link>
      </div>

      <div className={style.comments}>
        {comment_data.map(({ id, date, score, feedback }) => (
          <div className={style.feedback} key={id}>
            <p className={style.feedback_display}>{feedback}</p>
            <span className={style.date_display}>
              {moment([date], "YYYYMMDD").fromNow()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent_comments;
