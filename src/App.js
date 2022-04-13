import "./App.css";
import SideMenu from "./Components/SideMenu";
import NpsCharts from "./Components/Dashbord-Content/Charts/NpsCharts";
import NpsSurveyStatus from "./Components/Dashbord-Content/Survey_Status/NpsSurveyStatus";
import RecentComments from "./Components/Dashbord-Content/Comments/RecentComments";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [npsdata, setNpsdata] = useState([]);
  const [detractors, setDetractors] = useState(0);
  const [promoters, setPromoters] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [npsScore, setNpsScore] = useState(0);
  useEffect(() => {
    getNpsdata();
  }, [neutral, detractors, promoters, total]);
  const getNpsdata = () => {
    axios
      .get("http://localhost:3010/api/npsdata")
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setNpsdata(res.data);
        setLoading(false);
        //console.log(res.data);
        let scores = [];
        res.data.forEach((element) => {
          scores.push(element.score);
          console.log(scores);
        });
        let dedactor_val = 0;
        let promoter_val = 0;
        let neutral_val = 0;
        scores.forEach((score) => {
          if (score <= 6) {
            console.log("Before" + dedactor_val);
            dedactor_val = dedactor_val + 1;
            console.log("After" + dedactor_val);
            console.log(score);
          } else if (score >= 9) {
            promoter_val = promoter_val + 1;

            console.log(score);
          } else {
            neutral_val = neutral_val + 1;
          }
        });
        setDetractors(dedactor_val);
        setNeutral(neutral_val);
        setPromoters(promoter_val);
        console.log(detractors);
      });

    setTotal(promoters + neutral + detractors);
    if (total === 0) {
      setNpsScore(0);
    } else {
      setNpsScore(((promoters - detractors) / total) * 100);
    }
  };

  return (
    <div>
      {" "}
      <h1 className="dashbord_body"> NPS Dashboard </h1>
      <div>
        {npsdata.map((data) => (
          <div key={data.id}>
            <p>{data.id}</p>
            <p>{data.date}</p>
            <p>{data.score}</p>
            <p>{data.feedback}</p>
          </div>
        ))}
        <p>Promoter{promoters}</p>
        <p>Detractor{detractors}</p>
        <p>Neutral{neutral}</p>
        <p>NPS: {npsScore} </p>
      </div>
      {/* <SideMenu /> */}
      <NpsCharts />
      <NpsSurveyStatus />
      <RecentComments />
    </div>
  );
}

export default App;
