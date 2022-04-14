import React, { useState, useEffect } from "react";
import style from "./NpsCharts.module.css";

const NPS_Charts = ({ data }) => {
  const [detractors, setDetractors] = useState(0);
  const [promoters, setPromoters] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [npsScore, setNpsScore] = useState(0);
  const [loading, setLoading] = useState(true);

  let scores = [];

  data.forEach((element) => {
    scores.push(element.score);
  });

  let dedactor_val = 0;
  let promoter_val = 0;
  let neutral_val = 0;

  scores.forEach((score) => {
    if (score <= 6) {
      dedactor_val++;
    } else if (score >= 9) {
      promoter_val++;
    } else {
      neutral_val++;
    }
  });

  useEffect(() => {
    setDetractors(dedactor_val);
    setNeutral(neutral_val);
    setPromoters(promoter_val);

    setTotal(promoters + neutral + detractors);

    if (total === 0) {
      setNpsScore(0);
    } else {
      setNpsScore(((promoters - detractors) / total) * 100);
    }

    setLoading(false);
  }, [
    dedactor_val,
    neutral_val,
    promoter_val,
    promoters,
    neutral,
    detractors,
    total,
  ]);

  return (
    <div className={style.chart_container}>
      {!loading && (
        <div>
          <p>Promoter{promoters}</p>
          <p>Detractor{detractors}</p>
          <p>Neutral{neutral}</p>
          <p>NPS: {npsScore} </p>
        </div>
      )}
    </div>
  );
};

export default NPS_Charts;
