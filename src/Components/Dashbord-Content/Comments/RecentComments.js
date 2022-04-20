import React, { useState } from "react";
import style from "./RecentComments.module.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Recent_comments = ({ data }) => {
  const latestData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(latestData);

  const comment_data = latestData.length > 4 ? data.slice(0, 4) : data;

  return (
    <div className={style.comments_container}>
      <p className={style.title_feedback}>Recent comments</p>
      <Link to="/data">
        <span className={style.see_all_desplay}>See all</span>
      </Link>

      {comment_data.map(({ id, date, score, feedback }) => (
        <div key={id}>
          <p className={style.feedback_display}>{feedback}</p>
          <span className={style.date_display}>
            {moment([date], "YYYYMMDD").fromNow()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Recent_comments;
