import IntegrationPage from "../Components/IntegrationPage-Content/IntegrationPage";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

test("There is h1 with a text 'Please copy the code below and add to your own webpage!'.", () => {
  render(<IntegrationPage />);

  const h1 = screen.getByRole("heading");
  expect(h1).toBeInTheDocument();
  expect(h1.textContent).toEqual(
    "Please copy the code below and add to your own webpage!"
  );
});

test(`There is instructions: You can adjust the size the of survey on your page by changing the
values in the <iframe min-height: 100vh" width="100%">.`, () => {
  render(<IntegrationPage />);

  const instructions = screen.getByTestId("instructions");
  expect(instructions).toBeInTheDocument();
  expect(instructions.textContent).toEqual(
    `You can adjust the size the of survey on your page by changing the values in the <iframe min-height: 100vh" width="100%">.`
  );
});

test("There is div with text including '</iframe>'", () => {
  render(<IntegrationPage />);

  const box = screen.getByTestId("box");
  expect(box).toBeInTheDocument();
  expect(box.textContent.includes("</iframe>")).toBeTruthy();
});

test("There is button with a text 'Click here to copy!'", () => {
  render(<IntegrationPage />);

  const copy = screen.getByRole("button");
  expect(copy).toBeInTheDocument();
  expect(copy.textContent).toEqual("Click here to copy!");
});

test("When you click the button you get the code copied to your clipboard.", () => {
  render(<IntegrationPage />);

  let clipboardData = "";
  const mockClipboard = {
    writeText: jest.fn((data) => {
      clipboardData = data;
    }),
    readText: jest.fn(() => {
      return clipboardData;
    }),
  };
  global.navigator.clipboard = mockClipboard;

  const copy = screen.getByRole("button");
  fireEvent.click(copy);

  expect(navigator.clipboard.readText()).toEqual(`<html lang="en">
          <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Survey</title>
          </head>
          <body style="min-height: 100vh">
          <iframe src="https://6250087de54f4a00086ddc56--profound-pithivier-7c3ab2.netlify.app/" style="border: none; min-height: 100vh" width="100%" ></iframe>
          </body>
          </html>`);
});
