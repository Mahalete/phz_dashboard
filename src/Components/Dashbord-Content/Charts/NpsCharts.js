import React from "react";
import style from "./NpsCharts.module.css";

const NPS_Charts = (props) => {
  let promoters = props.promoters;
  let detractors = props.detractors;

  return (
    <div className={style.chart_container}>
      <div>promoters{promoters}</div>
    </div>
  );
};

export default NPS_Charts;
