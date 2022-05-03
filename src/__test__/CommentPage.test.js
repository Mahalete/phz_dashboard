import CommentPage from "../Components/CommentPage-Content/CommentPage";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

const testData = [
  { score: 10, feedback: "Great job" },
  { score: 1, feedback: "" },
  { score: 2, feedback: "" },
  { score: 3, feedback: "" },
  { score: 4, feedback: "" },
  { score: 5, feedback: "" },
  { score: 6, feedback: "not impressed" },
  { score: 7, feedback: "" },
  { score: 8, feedback: "" },
  { score: 9, feedback: "" },
  {
    score: 5,
    feedback: "This could have been a great experiance blabala blabla blabla",
  },
  { score: 9, feedback: "" },
  { score: 10, feedback: "" },
  { score: 2, feedback: "" },
  { score: 4, feedback: "" },
  { score: 5, feedback: "meehhh" },
  { score: 7, feedback: "" },
  { score: 10, feedback: "" },
  { score: 9, feedback: "I like it" },
  { score: 10, feedback: "" },
  { score: 3, feedback: "" },
];
test("There is a table", () => {
  render(<CommentPage data={testData} />);

  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
  cleanup();
});
