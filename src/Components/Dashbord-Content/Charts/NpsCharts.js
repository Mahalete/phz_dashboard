import React, { useState, useEffect } from "react";
import style from "./NpsCharts.module.css";
import { PieChart } from "react-minimal-pie-chart";
import { ReactComponent as Emojione_grinning } from "../../../assets/emojione_grinning-face-with-smiling-eyes (1).svg";

import { Style } from "@mui/icons-material";
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
    <div>
      <div className={style.piechart}>
        <p className={style.chart_title}>Current Pro Score</p>
        {!loading && (
          <div className={style.chart_values}>
            <p>
              <Emojione_grinning className={style.grinning_emj} />
              Promoters: {promoters}
            </p>
            <p>Detractors {detractors}</p>
            <p>Neutrals {neutral}</p>
            <p>NPS: {npsScore} </p>
          </div>
        )}

        <div className={style.circle}>
          <PieChart
            lineWidth={40}
            label={(props) => {
              return props.dataEntry.title;
            }}
            labelPosition={120}
            labelStyle={{
              fontSize: "5px",
            }}
            data={[
              {
                title: `Promoters`,
                value: promoters,
                color: "#5FB566",
              },
              { title: "Detractors", value: detractors, color: "#F36158" },
              { title: "Neutrals", value: neutral, color: "#E1AA51" },
            ]}
            radius={28}
            startAngle={0}
          />
        </div>
      </div>
    </div>
  );
};

export default NPS_Charts;
