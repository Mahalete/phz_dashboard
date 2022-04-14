import React from "react";
import styles from "./DataPage.module.css";

const DataPage = ({ data }) => {
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

  return (
    <div className={styles.centralize}>
      <div className={styles.DataPageWrapper}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Score</th>
              <th>Feedback</th>
            </tr>
          </thead>

          <tbody>
            {data.map((val) => {
              return (
                <tr>
                  <td>#{val.id}</td>
                  <td>{dateChanger(val.date.substring(0, 10))}</td>
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

export default DataPage;
