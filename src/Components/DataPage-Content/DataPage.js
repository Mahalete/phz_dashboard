import React from "react";
import styles from "./DataPage.module.css";

const DataPage = ({ data }) => {
  return (
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
      </table>
    </div>
  );
};

export default DataPage;
