import React, { useState, useEffect } from "react";
import styles from "./DataPage.module.css";
import Sorting from "@mui/icons-material/ArrowDropDown";
import Moment from "moment";

const DataPage = ({ data }) => {
  const [activeId, setActiveId] = useState("active");
  const [activeDate, setActiveDate] = useState();
  const [activeScore, setActiveScore] = useState();
  const [answers, setAnswers] = useState(data);
  const [date, setDate] = useState();
  const [score, setScore] = useState();
  const [id, setId] = useState(true);

  useEffect(() => {
    setAnswers(data);
    setActiveId("active");
    setActiveDate("");
    setActiveScore("");
  }, [data]);

  const sorting = (sortingBase) => {
    let result;
    let clickedDate;
    let clickedId;
    let clickedScore;

    if (sortingBase === "score") {
      if (score === true) {
        clickedDate = "";
        clickedId = "";
        clickedScore = "active";
        result = data.sort((a, b) => a.score - b.score);
        setScore(false);
      } else {
        clickedDate = "";
        clickedId = "";
        clickedScore = "active";
        result = data.sort((a, b) => b.score - a.score);
        setScore(true);
      }
    } else if (sortingBase === "id") {
      if (id === false) {
        clickedDate = "";
        clickedId = "active";
        clickedScore = "";
        result = data.sort((a, b) => a.id - b.id);
        setId(true);
      } else {
        clickedDate = "";
        clickedId = "active";
        clickedScore = "";
        result = data.sort((a, b) => b.id - a.id);
        setId(false);
      }
    } else {
      if (date === false) {
        clickedDate = "active";
        clickedId = "";
        clickedScore = "";
        result = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setDate(true);
      } else {
        clickedDate = "active";
        clickedId = "";
        clickedScore = "";
        result = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setDate(false);
      }
    }
    setAnswers(result);
    setActiveScore(clickedScore);
    setActiveId(clickedId);
    setActiveDate(clickedDate);
  };

  return (
    <div>
      <div className={styles.centralize}>
        <div className={styles.DataPageWrapper}>
          <table data-testid="table">
            <thead className={styles.thead}>
              <tr className={styles.trHeaderStyle}>
                <th className={styles.thStyle}>
                  <div className={styles.id + " " + activeId}>
                    ID{" "}
                    <Sorting
                      data-testid="id"
                      className={styles.sorting}
                      onClick={() => sorting("id")}
                    />
                  </div>
                </th>
                <th className={styles.thStyle}>
                  <div className={styles.date + " " + activeDate}>
                    Date{" "}
                    <Sorting
                      data-testid="date"
                      className={styles.sorting}
                      onClick={() => sorting("")}
                    />
                  </div>
                </th>
                <th className={styles.thStyle}>
                  <div className={styles.score + " " + activeScore}>
                    <p>Score </p>
                    <Sorting
                      data-testid="score"
                      className={styles.sorting}
                      onClick={() => sorting("score")}
                    />
                  </div>
                </th>
                <th className={styles.thStyle}>Feedback</th>
              </tr>
            </thead>

            <tbody>
              {answers.length === 0 && (
                <p className={styles.feedback_empty}>No data found.</p>
              )}

              {answers.length > 0 &&
                answers.map((val) => {
                  return (
                    <tr
                      className={styles.trStyle}
                      data-testid={"answer"}
                      name={val.id}
                      key={val.id}
                    >
                      <td className={styles.tdStyle}>#{val.id}</td>
                      <td
                        className={styles.tdStyle}
                        data-testid={String("Id:" + val.id)}
                      >
                        {Moment(val.date).format("DD.MM.YYYY")}
                      </td>
                      <td className={styles.tdStyle}>{val.score}</td>
                      <td>
                        <div className={styles.feedback}>{val.feedback}</div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
