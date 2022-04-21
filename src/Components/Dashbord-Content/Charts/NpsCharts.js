import React, { useState, useEffect } from "react";
import style from "./NpsCharts.module.css";
import { PieChart } from "react-minimal-pie-chart";
import { ReactComponent as HappyFace } from "../../../assets/happy_face.svg";
import { ReactComponent as AngryFace } from "../../../assets/angry_face.svg";
import { ReactComponent as NeutralFace } from "../../../assets/neutral_face.svg";

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
      setNpsScore(Math.round(((promoters - detractors) / total) * 100));
      // setNpsScore(((promoters - detractors) / total) * 100);
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
      <h1 className={style.chartContainer}>Current ProScore</h1>

      <div className={style.currentProScore}>
        <div className={style.chart}>
          <PieChart
            className={style.pieChart}
            lineWidth={35}
            label={()=>`${npsScore}`}
            labelPosition={0}
            labelStyle={{
              fontSize: "20px",
              fontColor: "FFFFFA",
              fontWeight: "400",
              fontFamily:"Roboto"
            }}
            paddingAngle={3}
            data={[
              { value: promoters, color: "#5FB566" },
              { value: detractors, color: "#F36158" },
              { value: neutral, color: "#E1AA51" },
            ]}
            radius={30}
            startAngle={0}
          />
        </div>

        {!loading && (
          <div className={style.chart_values}>
            <div className={style.score}>
              <div className={style.name}>
                <HappyFace className={style.emoji} />
                <p>Promoter </p>
              </div>
              <p className={style.promoter}>{promoters}</p>
            </div>

            <div className={style.score}>
              <div className={style.name}>
                <NeutralFace className={style.emoji} />
                <p>Neutral </p>
              </div>
              <p className={style.neutral}>{neutral}</p>
            </div>

            <div className={style.score}>
              <div className={style.name}>
                <AngryFace className={style.emoji} />
                <p>Detractor </p>
              </div>
              <p className={style.detractor}>{detractors}</p>
            </div>

            <div className={style.score}>
              <p className={style.total}>Total response: </p>
              <p className={style.total}>{total}</p>
            </div>

            <div className={style.score}>
              <p>NPS: </p>
              <p>{npsScore}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NPS_Charts;
