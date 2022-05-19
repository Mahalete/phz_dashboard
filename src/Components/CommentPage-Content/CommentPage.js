import React, { useState, useEffect } from "react";
import comment from "./CommentPage.module.css";
import "./CommentPage.css"
import "./CommentPage.module.css"
import TableScrollbar from "react-table-scrollbar";
import Moment from "moment";

export const FILTERS = {
  PROMOTER: "promoter",
  DETRACTOR: "detractor",
  NEUTRAL: "neutral",
  ALL: "all",
};



// const getQueryString = () => {
//   const search = window.location.search;
//   const params = new URLSearchParams(search);
//   return params.get("filter");
// };

const CommentPage = ({ data }) => {
  const [activeNeutral, setActiveNeutral] = useState();
  const [activeAll, setActiveAll] = useState("activeComment");
  const [activePromoter, setActivePromoter] = useState();
  const [activeDetractor, setActiveDetractor] = useState();

  // const latestData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  // const readyData = latestData.filter((element) => element.feedback.length > 0);
  const getPreparedData = (item) =>
    item
      .filter((element) => element.feedback.length > 0)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  const [feedbacks, setFeedbacks] = useState(data);

  useEffect(() => {
    // if (filter) {
    //   onFilterChange(filter);
    // }
    setFeedbacks(data);
  }, [data]);
  console.log("CommentsPage ", data.length, feedbacks.length);

  const onFilterChange = (filter) => {
    switch (filter) {
      case FILTERS.PROMOTER:
        setActiveDetractor("")
        setActiveAll("")
        setActiveNeutral("")
        setActivePromoter("activeComment")
        return data.filter((element) => element.score >= 9);
      // break;
      case FILTERS.NEUTRAL:
        setActiveDetractor("")
        setActiveAll("")
        setActivePromoter("")
        setActiveNeutral("activeComment")
        return data.filter((element) => element.score > 6 && element.score < 9);

      // break;
      case FILTERS.DETRACTOR:
        setActivePromoter("")
        setActiveAll("")
        setActiveNeutral("")
        setActiveDetractor("activeComment")
        return data.filter((element) => element.score <= 6);
      // break;

      default:
        setActivePromoter("")
        setActiveDetractor("")
        setActiveNeutral("")
        setActiveAll("activeComment")
        return data;
      // break;
    }
    // console.log(filter, filteredData);
    // filteredData =
    // filteredData.length > 20 ? filteredData.slice(0, 20) : filteredData;
    // setFeedbacks(feedbacks);
  };

  

  return (
    <div>
      <div className={comment.center_data}>
        <div className={comment.listMenu}>
          <div className={comment.listMenu_button}>
            <button
              data-testid="all_data"
              // id={location.pathname === val.link ? comment.active : ""}
              className={comment.listMenuAll_button + ' ' + activeAll}
              onClick={ () => {
                setFeedbacks(onFilterChange(FILTERS.ALL));
                
              }}
            >
              ALL
            </button>
            <button
              data-testid="promoter_data"
              
              className={comment.listMenuAll_button + ' ' + activePromoter}
              onClick={() => setFeedbacks(onFilterChange(FILTERS.PROMOTER))}
            >
              PROMOTERS
            </button>
            <button
              data-testid="detractor_data"
            
              className={comment.listMenuAll_button + ' ' + activeDetractor}
              onClick={() => setFeedbacks(onFilterChange(FILTERS.DETRACTOR))}
            >
              DETRACTORS
            </button>
            <button
              data-testid="neutral_data"
              
              className={comment.listMenuAll_button + ' ' + activeNeutral}
              onClick={() => setFeedbacks(onFilterChange(FILTERS.NEUTRAL))}
            >
              NEUTRALS
            </button>
          </div>
          </div>
        
          <div className={comment.DataPageWrapper}>
          {/* <TableScrollbar height="615px"> */}
            <table className={comment.commentTable} data-testid="tableA">
              <thead className={comment.column_headers}>
                <tr className={comment.commentTr}>
                  <th>Date </th>
                  <th>Score </th>
                  <th>Feedback</th>
                </tr>
              </thead>

              <tbody>
                {getPreparedData(feedbacks).length === 0 && (
                  <p className={comment.feedback_empty}>No comments found.</p>
                )}
                {getPreparedData(feedbacks).length > 0 &&
                  getPreparedData(feedbacks).map((val) => {
                    return (
                      <tr
                        className={comment.commentTr}
                        data-testid="answer"
                        name={val.id}
                        key={val.id}
                      >
                        <td>{Moment(val.date).format("DD.MM.YYYY")}</td>
                        <td>{val.score}</td>
                        <td>{val.feedback}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {/* </TableScrollbar> */}
          </div>
        
      </div>
    </div>
  );
};
export default CommentPage;
