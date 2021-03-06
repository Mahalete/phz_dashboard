import CommentPage from "../Components/CommentPage-Content/CommentPage";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

const testData = [
  { id: 1, date: "2022-01-01", score: 10, feedback: "dnjlaklc" },
  { id: 2, date: "2022-01-01", score: 1, feedback: "" },
  { id: 3, date: "2022-03-04", score: 2, feedback: "" },
  { id: 4, date: "2019-04-05", score: 3, feedback: "" },
  { id: 5, date: "2018-05-11", score: 4, feedback: "" },
  { id: 6, date: "2017-06-04", score: 5, feedback: "" },
  { id: 7, date: "2016-07-09", score: 6, feedback: "knaclnc" },
  { id: 8, date: "2016-09-10", score: 7, feedback: "" },
  { id: 9, date: "2015-10-04", score: 8, feedback: "" },
  { id: 10, date: "2016-11-21", score: 9, feedback: "" },
  {
    id: 11,
    date: "2022-11-21",
    score: 5,
    feedback:
      "aldcnqklcnqlclcnleqnlqenclqnclenclkccnklcnlkncqeklncklqnclkqwncklnqwkl-cdnqlkw-ncklq-encklq-ncklqncklqncklqncl",
  },
  { id: 12, date: "2021-11-21", score: 9, feedback: "" },
  { id: 13, date: "2010-12-22", score: 10, feedback: "" },
  { id: 14, date: "2016-09-10", score: 2, feedback: "" },
  { id: 15, date: "2022-01-27", score: 4, feedback: "" },
  { id: 16, date: "2010-12-28", score: 5, feedback: "fqfd" },
  {
    id: 17,
    date: "2016-11-21",
    score: 7,
    feedback: "I think this was not bad",
  },
  { id: 18, date: "2022-11-21", score: 10, feedback: "" },
  { id: 19, date: "2021-11-21", score: 9, feedback: "dqefqf" },
  { id: 20, date: "2010-12-28", score: 10, feedback: "" },
  { id: 21, date: "2022-11-11", score: 3, feedback: "" },
  {
    id: 22,
    date: "2022-9-27",
    score: 10,
    feedback: "Great Job ",
  },
  {
    id: 23,
    date: "2022-03-27",
    score: 6,
    feedback: "Needs more effort",
  },
];

// test("There is a table", () => {
//   render(<CommentPage data={testData} />);

//   const table = screen.getByTestId("CommentPage");
//   expect(table[0]).toBeInTheDocument();

//   cleanup();
// });
test("When clicking All button the table shows the data starting from the recent entered data ,filtering data which have feedbacks.", () => {
  render(<CommentPage data={testData} />);

  const all = screen.getByTestId("all_data");

  fireEvent.click(all);

  let dataObjects = screen.getAllByTestId("answer");

  expect(Number(dataObjects[0].getAttribute("name"))).toBe(11);
  expect(Number(dataObjects[1].getAttribute("name"))).toBe(22);
  expect(Number(dataObjects[2].getAttribute("name"))).toBe(23);
  expect(Number(dataObjects[3].getAttribute("name"))).toBe(1);
  expect(Number(dataObjects[4].getAttribute("name"))).toBe(19);
  expect(Number(dataObjects[5].getAttribute("name"))).toBe(17);
  expect(Number(dataObjects[6].getAttribute("name"))).toBe(7);
  expect(Number(dataObjects[7].getAttribute("name"))).toBe(16);
});
test("When clicking Detractor button the table shows the data starting from the recent entered data ,filtering promoter data(score <6) which has feedback.", () => {
  render(<CommentPage data={testData} />);

  const detractor = screen.getByTestId("detractor_data");

  fireEvent.click(detractor);

  let dataObjects = screen.getAllByTestId("answer");

  expect(Number(dataObjects[0].getAttribute("name"))).toBe(11);
  expect(Number(dataObjects[1].getAttribute("name"))).toBe(23);
  expect(Number(dataObjects[2].getAttribute("name"))).toBe(7);
  expect(Number(dataObjects[3].getAttribute("name"))).toBe(16);
});
test("When clicking Promoter button the table shows the data starting from the recent entered data ,filtering promoter data(score > 9) which has feedback.", () => {
  render(<CommentPage data={testData} />);

  const promoter = screen.getByTestId("promoter_data");

  fireEvent.click(promoter);

  let dataObjects = screen.getAllByTestId("answer");

  expect(Number(dataObjects[0].getAttribute("name"))).toBe(22);
  expect(Number(dataObjects[1].getAttribute("name"))).toBe(1);
  expect(Number(dataObjects[2].getAttribute("name"))).toBe(19);
});
test("When clicking Neutral button the table shows the data starting from the recent entered data ,filtering promoter data(score >6 and score<9) which has feedback.", () => {
  render(<CommentPage data={testData} />);

  const neutral = screen.getByTestId("neutral_data");

  fireEvent.click(neutral);

  let dataObjects = screen.getAllByTestId("answer");

  expect(Number(dataObjects[0].getAttribute("name"))).toBe(17);
});
