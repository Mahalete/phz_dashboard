import DataPage from "../Components/DataPage-Content/DataPage";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

test("test", () => {
  expect(true).toBeTruthy();
  render(<DataPage />);
});
