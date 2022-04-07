import "./App.css";
import SideMenu from "./Components/SideMenu";
import NpsCharts from "./Components/Dashbord-Content/Charts/NpsCharts";
import NpsSurveyStatus from "./Components/Dashbord-Content/Survey_Status/NpsSurveyStatus";
import RecentComments from "./Components/Dashbord-Content/Comments/RecentComments";

function App() {
  return (
    <div>
      {" "}
      <h1 className="dashbord_body"> NPS Dashboard </h1>
      <SideMenu />
      <NpsCharts />
      <NpsSurveyStatus />
      <RecentComments />
    </div>
  );
}

export default App;
