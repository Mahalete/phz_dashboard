import React, { useState, useEffect } from "react";
import style from "./NpsSurveyStatus.module.css";
import { Line as Linejs } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { GradientSharp } from "@mui/icons-material";

const NPS_Survey_Status = ({ npsdata }) => {
  const [npsScoreJan, setNpsScoreJan] = useState(0);
  const [npsScoreFeb, setNpsScoreFeb] = useState(0);
  const [npsScoreMar, setNpsScoreMar] = useState(0);
  const [npsScoreApr, setNpsScoreApr] = useState(0);
  const [npsScoreMay, setNpsScoreMay] = useState(0);
  const [npsScoreJun, setNpsScoreJun] = useState(0);
  const [npsScoreJul, setNpsScorejul] = useState(0);
  const [npsScoreAug, setNpsScoreAug] = useState(0);
  const [npsScoreSep, setNpsScoreSep] = useState(0);
  const [npsScoreOct, setNpsScoreOct] = useState(0);
  const [npsScoreNov, setNpsScoreNov] = useState(0);
  const [npsScoreDec, setNpsScoreDec] = useState(0);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("2022");

  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          npsScoreJan,
          npsScoreFeb,
          npsScoreMar,
          npsScoreApr,
          npsScoreMay,
          npsScoreJun,
          npsScoreJul,
          npsScoreAug,
          npsScoreSep,
          npsScoreOct,
          npsScoreNov,
          npsScoreDec,
        ],
        label: "NPS",
        borderColor: "#D2782D",
        backgroundColor: "rgba(249, 237, 227, 0.8)",
        fill: true,
        lineTension: 0.1,
      },
    ],
  };

  let janPromoter = 0;
  let janDetractor = 0;
  let janNeutral = 0;
  let janTotal = 0;
  let janScore = 0;
  let febPromoter = 0;
  let febDetractor = 0;
  let febNeutral = 0;
  let febTotal = 0;
  let febScore = 0;
  let marPromoter = 0;
  let marDetractor = 0;
  let marNeutral = 0;
  let marTotal = 0;
  let marScore = 0;
  let aprPromoter = 0;
  let aprDetractor = 0;
  let aprNeutral = 0;
  let aprTotal = 0;
  let aprScore = 0;
  let mayPromoter = 0;
  let mayDetractor = 0;
  let mayNeutral = 0;
  let mayTotal = 0;
  let mayScore = 0;
  let junPromoter = 0;
  let junDetractor = 0;
  let junNeutral = 0;
  let junTotal = 0;
  let junScore = 0;
  let julPromoter = 0;
  let julDetractor = 0;
  let julNeutral = 0;
  let julTotal = 0;
  let julScore = 0;
  let augPromoter = 0;
  let augDetractor = 0;
  let augNeutral = 0;
  let augTotal = 0;
  let augScore = 0;
  let sepPromoter = 0;
  let sepDetractor = 0;
  let sepNeutral = 0;
  let sepTotal = 0;
  let sepScore = 0;
  let octPromoter = 0;
  let octDetractor = 0;
  let octNeutral = 0;
  let octTotal = 0;
  let octScore = 0;
  let novPromoter = 0;
  let novDetractor = 0;
  let novNeutral = 0;
  let novTotal = 0;
  let novScore = 0;
  let decPromoter = 0;
  let decDetractor = 0;
  let decNeutral = 0;
  let decTotal = 0;
  let decScore = 0;
  let result = npsdata.filter(
    (element) => element.date.substring(0, 4) === year
  );
  console.log(result);
  result.forEach((element) => {
    let date = element.date.substring(5, 7);
    switch (date) {
      case "01":
        if (element.score <= 6) {
          janDetractor = janDetractor + 1;
        } else if (element.score >= 9) {
          janPromoter = janPromoter + 1;
        } else {
          janNeutral = janNeutral + 1;
        }
        break;
      case "02":
        if (element.score <= 6) {
          febDetractor = febDetractor + 1;
        } else if (element.score >= 9) {
          febPromoter = febPromoter + 1;
        } else {
          febNeutral = febNeutral + 1;
        }
        break;
      case "03":
        if (element.score <= 6) {
          marDetractor = marDetractor + 1;
        } else if (element.score >= 9) {
          marPromoter = marPromoter + 1;
        } else {
          marNeutral = marNeutral + 1;
        }
        break;
      case "04":
        if (element.score <= 6) {
          aprDetractor = aprDetractor + 1;
        } else if (element.score >= 9) {
          aprPromoter = aprPromoter + 1;
        } else {
          aprNeutral = aprNeutral + 1;
        }
        break;
      case "05":
        if (element.score <= 6) {
          mayDetractor = mayDetractor + 1;
        } else if (element.score >= 9) {
          mayPromoter = mayPromoter + 1;
        } else {
          mayNeutral = mayNeutral + 1;
        }
        break;
      case "06":
        if (element.score <= 6) {
          junDetractor = junDetractor + 1;
        } else if (element.score >= 9) {
          junPromoter = junPromoter + 1;
        } else {
          junNeutral = junNeutral + 1;
        }
        break;
      case "07":
        if (element.score <= 6) {
          julDetractor = julDetractor + 1;
        } else if (element.score >= 9) {
          julPromoter = julPromoter + 1;
        } else {
          julNeutral = julNeutral + 1;
        }
        break;
      case "08":
        if (element.score <= 6) {
          augDetractor = augDetractor + 1;
        } else if (element.score >= 9) {
          augPromoter = augPromoter + 1;
        } else {
          augNeutral = augNeutral + 1;
        }
        break;
      case "09":
        if (element.score <= 6) {
          sepDetractor = sepDetractor + 1;
        } else if (element.score >= 9) {
          sepPromoter = sepPromoter + 1;
        } else {
          sepNeutral = sepNeutral + 1;
        }
        break;
      case "10":
        if (element.score <= 6) {
          octDetractor = octDetractor + 1;
        } else if (element.score >= 9) {
          octPromoter = octPromoter + 1;
        } else {
          octNeutral = octNeutral + 1;
        }
        break;
      case "11":
        if (element.score <= 6) {
          novDetractor = novDetractor + 1;
        } else if (element.score >= 9) {
          novPromoter = novPromoter + 1;
        } else {
          novNeutral = novNeutral + 1;
        }
        break;
      case "12":
        if (element.score <= 6) {
          decDetractor = decDetractor + 1;
        } else if (element.score >= 9) {
          decPromoter = decPromoter + 1;
        } else {
          decNeutral = decNeutral + 1;
        }
        break;
      default:
        console.log(`Sorry, we are out of ${date}.`);
    }
  });
  janTotal = janPromoter + janDetractor + janNeutral;
  if (janTotal === 0) {
    janScore = 0;
  } else {
    janScore = ((janPromoter - janDetractor) / janTotal) * 100;
  }
  febTotal = febPromoter + febDetractor + febNeutral;
  if (febTotal === 0) {
    febScore = 0;
  } else {
    febScore = ((febPromoter - febDetractor) / febTotal) * 100;
  }

  marTotal = marPromoter + marDetractor + marNeutral;
  if (marTotal === 0) {
    marScore = 0;
  } else {
    marScore = ((marPromoter - marDetractor) / marTotal) * 100;
  }

  aprTotal = aprPromoter + aprDetractor + aprNeutral;
  if (aprTotal === 0) {
    aprScore = 0;
  } else {
    aprScore = ((aprPromoter - aprDetractor) / aprTotal) * 100;
  }

  mayTotal = mayPromoter + mayDetractor + mayNeutral;
  if (mayTotal === 0) {
    mayScore = 0;
  } else {
    mayScore = ((mayPromoter - mayDetractor) / mayTotal) * 100;
  }

  junTotal = junPromoter + junDetractor + junNeutral;
  if (junTotal === 0) {
    junScore = 0;
  } else {
    junScore = ((junPromoter - junDetractor) / junTotal) * 100;
  }

  julTotal = julPromoter + julDetractor + julNeutral;
  if (julTotal === 0) {
    julScore = 0;
  } else {
    julScore = ((julPromoter - julDetractor) / julTotal) * 100;
  }

  augTotal = augPromoter + augDetractor + augNeutral;
  if (augTotal === 0) {
    augScore = 0;
  } else {
    augScore = ((augPromoter - augDetractor) / augTotal) * 100;
  }

  sepTotal = sepPromoter + sepDetractor + sepNeutral;
  if (sepTotal === 0) {
    sepScore = 0;
  } else {
    sepScore = ((sepPromoter - sepDetractor) / sepTotal) * 100;
  }

  octTotal = octPromoter + octDetractor + octNeutral;
  if (octTotal === 0) {
    octScore = 0;
  } else {
    octScore = ((octPromoter - octDetractor) / octTotal) * 100;
  }

  novTotal = novPromoter + novDetractor + novNeutral;
  if (novTotal === 0) {
    novScore = 0;
  } else {
    novScore = ((novPromoter - novDetractor) / novTotal) * 100;
  }

  decTotal = decPromoter + decDetractor + decNeutral;
  if (decTotal === 0) {
    decScore = 0;
  } else {
    decScore = ((decPromoter - decDetractor) / decTotal) * 100;
  }

  console.log("febpromo" + febPromoter);
  console.log("febdetr" + febDetractor);
  console.log("febneu" + febNeutral);
  console.log("febTotal" + febTotal);

  useEffect(() => {
    setNpsScoreJan(janScore);
    setNpsScoreFeb(febScore);
    setNpsScoreMar(marScore);
    setNpsScoreApr(aprScore);
    setNpsScoreMay(mayScore);
    setNpsScoreJun(junScore);
    setNpsScorejul(julScore);
    setNpsScoreAug(augScore);
    setNpsScoreSep(sepScore);
    setNpsScoreOct(octScore);
    setNpsScoreNov(novScore);
    setNpsScoreDec(decScore);
    setLoading(false);
  }, [
    npsScoreJan,
    npsScoreFeb,
    npsScoreMar,
    npsScoreApr,
    npsScoreMay,
    npsScoreJun,
    npsScoreJul,
    npsScoreAug,
    npsScoreSep,
    npsScoreOct,
    npsScoreNov,
    npsScoreDec,
    loading,
    aprScore,
    augScore,
    decScore,
    febScore,
    janScore,
    julScore,
    marScore,
    novScore,
    junScore,
    mayScore,
    octScore,
    sepScore,
  ]);

  return (
    <div className={style.survey_status_container}>
      <div className={style.title}>
        <h1>ProScore Overtime</h1>
        <select name="year" onChange={(e) => setYear(e.target.value)}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>

      <Line type="line" width={160} height={45} data={lineChartData} />
    </div>
  );
};

export default NPS_Survey_Status;
