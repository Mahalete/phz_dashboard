import React from "react";

import NpsCharts from "../Components/Dashbord-Content/Charts/NpsCharts";

//const testData = [({ Promoters: 10 }, { Detractors: 5 }, { Neutral: 2 })];
// jest.mock("react-minimal-pie-chart", () => ({
//   Doughnut: () => null,
// }));

test("render the chart", () => {
  jest.mock("react-minimal-pie-chart", () => ({
    NPS_Charts: (testData) => null,
  }));
});
