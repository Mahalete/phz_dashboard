import React, { useState } from "react";
import styles from "./DataPage.module.css";
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew";
import ArrowRight from "@mui/icons-material/ArrowForwardIos";
import Pipe from "@mui/icons-material/Remove";
import Sorting from "@mui/icons-material/ArrowDropDown";

const DataPage = ({ data }) => {
  const [answers, setAnswers] = useState(
    data.length > 10 ? data.slice(0, 10) : data
  );
  const [pages, setPages] = useState(1);
  const [date, setDate] = useState();
  const [score, setScore] = useState();

  const pageChanger = (change) => {
    let startIndex = pages * 10;
    if (change === "next") {
      if (data.length > 10 * pages) {
        setPages(pages + 1);
        data.length > startIndex + 10
          ? setAnswers(data.slice(startIndex, startIndex + 10))
          : setAnswers(data.slice(startIndex));
      }
    } else {
      if (pages !== 1) {
        setPages(pages - 1);
        setAnswers(data.slice((pages - 1) * 10 - 10, (pages - 1) * 10));
      } else {
        setPages(1);
        setAnswers(data.slice(0, 10));
      }
    }
  };

  const sorting = (sortingBase) => {
    let result;
    if (sortingBase === "score") {
      if (score === true) {
        result = data.sort((a, b) => a.score - b.score);
        setScore(false);
      } else {
        result = data.sort((a, b) => b.score - a.score);
        setScore(true);
      }
    } else if (sortingBase === "id") {
      answers[0].id > answers[1].id
        ? (result = data.sort((a, b) => a.id - b.id))
        : (result = data.sort((a, b) => b.id - a.id));
    } else {
      if (date === false) {
        result = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setDate(true);
      } else {
        result = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setDate(false);
      }
    }
    setAnswers(result.slice(0, 10));
    setPages(1);
  };

  const dateChanger = (date) => {
    let newDate = "";
    for (let i = date.length - 1; i > 0; i--) {
      if (i === 9) {
        newDate = newDate + date.substring(i - 1, i + 1);
      } else if (i === 8) {
        newDate = newDate + date.substring(i - 1, i).replace("-", ".");
      } else if (i === 7) {
        newDate = newDate + date.substring(i - 2, i + 1);
      } else if (!date.substring(i - 4, i).includes("-")) {
        newDate = newDate + date.substring(i - 4, i);
      }
    }
    return newDate.substring(0, 10).replace("-", ".");
  };
  console.log("DataPage ", data.length, answers.length);

  return (
    <div>
      <div className={styles.centralize}>
        <div className={styles.nextPage}>
          <ArrowRight
            data-testid="arrowRight"
            className={styles.arrows}
            onClick={() => pageChanger("next")}
          />
          <span>
            <h3 data-testid="pageNumber">{pages}</h3>
          </span>
          <ArrowLeft
            data-testid="arrowLeft"
            className={styles.arrows}
            onClick={() => pageChanger("")}
          />
          <h3> Page </h3>
          <Pipe className={styles.pipe} />
          <h3>
            {data.length < 11
              ? answers.length
              : (pages - 1) * 10 + answers.length}{" "}
            / {data.length}
          </h3>
        </div>
        <div className={styles.DataPageWrapper}>
          <table data-testid="table">
            <thead className={styles.thead}>
              <tr className={styles.trHeaderStyle}>
                <th className={styles.thStyle}>
                  <div className={styles.id}>
                    ID{" "}
                    <Sorting
                      data-testid="id"
                      className={styles.sorting}
                      onClick={() => sorting("id")}
                    />
                  </div>
                </th>
                <th className={styles.thStyle}>
                  <div className={styles.date}>
                    Date{" "}
                    <Sorting
                      data-testid="date"
                      className={styles.sorting}
                      onClick={() => sorting("")}
                    />
                  </div>
                </th>
                <th className={styles.thStyle}>
                  <div className={styles.score}>
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
              {answers.map((val) => {
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
                      {dateChanger(val.date.substring(0, 10))}
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
