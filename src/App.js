import "./App.css";
import SideMenu from "./Components/SideMenu";
import NpsCharts from "./Components/Dashbord-Content/Charts/NpsCharts";
import NpsSurveyStatus from "./Components/Dashbord-Content/Survey_Status/NpsSurveyStatus";
import RecentComments from "./Components/Dashbord-Content/Comments/RecentComments";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [npsdata, setNpsdata] = useState([]);
  const [detractors,setDetractors]=useState(0);
  const [promoters,setPromoters]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    getNpsdata();
    
  }, []);
  const getNpsdata=()=>{
    
     axios.get("http://localhost:3010/api/npsdata")
    .catch((error) => {
      console.log(error);
    })
    .then((res)=>{
      setNpsdata(res.data);
      setLoading(false);       
    })
    
    !loading && npsdata.forEach(element=>{
      if(element.score <=6){
        setDetractors(detractors+1); 
      } else if(element.score >=9){
        setPromoters(promoters+1);
          
      }else {
        setNeutral(neutral+1);
      }
    })
  
      
  }
  
  
      
  
  
  
  
 

  return (
    
    <div>
      {" "}{promoters}
      <h1 className="dashbord_body"> NPS Dashboard </h1>
      <SideMenu />
      <NpsCharts />
      <NpsSurveyStatus />
      <RecentComments />
    </div>
  );
}

export default App;
