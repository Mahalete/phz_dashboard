import DataPage from "../Components/DataPage-Content/DataPage";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

const testData = [
  { id: 1, date: "2020-01-01", score: 10, feedback: "dnjlaklc" },
  { id: 2, date: "2021-02-03", score: 1, feedback: "" },
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
  { id: 13, date: "2010-12-21", score: 10, feedback: "" },
  { id: 14, date: "2022-11-11", score: 2, feedback: "" },
  { id: 15, date: "2022-01-27", score: 4, feedback: "" },
  { id: 16, date: "2015-10-04", score: 5, feedback: "fqfd" },
  { id: 17, date: "2016-11-21", score: 7, feedback: "" },
  { id: 18, date: "2022-11-21", score: 10, feedback: "" },
  { id: 19, date: "2021-11-21", score: 9, feedback: "dqefqf" },
  { id: 20, date: "2010-12-21", score: 10, feedback: "" },
  { id: 21, date: "2022-11-11", score: 3, feedback: "" },
  {
    id: 22,
    date: "2022-01-27",
    score: 10,
    feedback: "pdjqwdjiqpdfioqdjnioöqwdioöqjdioqwjdoqwo",
  },
];

test("There is a table", () => {
  render(<DataPage data={testData} />);

  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
  cleanup();
});

describe("PageChanger", () => {
  afterEach(() => {
    cleanup();
  });

  test("When clicking the arrow to right the page number increments (if there is more data).", () => {
    render(<DataPage data={testData} />);

    const arrowRight = screen.getByTestId("arrowRight");
    expect(arrowRight).toBeInTheDocument();

    const pageNumber = screen.getByTestId("pageNumber");
    expect(pageNumber).toBeInTheDocument();

    fireEvent.click(arrowRight);
    expect(Number(pageNumber.textContent)).toBe(2);

    fireEvent.click(arrowRight);
    expect(Number(pageNumber.textContent)).toBe(3);

    // third click with this data should not change the page number to 4
    fireEvent.click(arrowRight);
    expect(Number(pageNumber.textContent)).toBe(3);
  });

  test("When clicking the arrow to left the page number decrements (if it is not the first page).", () => {
    render(<DataPage data={testData} />);

    const arrowRight = screen.getByTestId("arrowRight");
    const arrowLeft = screen.getByTestId("arrowLeft");
    expect(arrowLeft).toBeInTheDocument();

    const pageNumber = screen.getByTestId("pageNumber");

    fireEvent.click(arrowRight);
    expect(Number(pageNumber.textContent)).toBe(2);

    fireEvent.click(arrowLeft);
    expect(Number(pageNumber.textContent)).toBe(1);

    // second click to previous when the page is 1 should not make the page 0
    fireEvent.click(arrowLeft);
    expect(Number(pageNumber.textContent)).toBe(1);
  });

  /*
  test("When clicking the arrow to right the table shows next 10 data objects in the table (less if there is not 10).", async () => {
    render(<DataPage data={testData} />);

    const arrowRight = screen.getByTestId("arrowRight");
    const dataObjects = screen.getAllByTestId("answer");

    expect(dataObjects.length).toBe(10);

    let i = 0;

    dataObjects.forEach((o) => {
      expect(Number(o.getAttribute("name"))).toBe(testData[i].id);
      i++;
    });

    await fireEvent.click(arrowRight);

    i = 11;

    console.log(dataObjects);
    dataObjects.forEach((o) => {
      expect(Number(o.getAttribute("name"))).toBe(testData[i].id);
      i++;
    });
  }); */
});