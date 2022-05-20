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

test("There is div with text including '</iframe>'", () => {
  render(<IntegrationPage />);

  const box = screen.getByTestId("box");
  expect(box).toBeInTheDocument();
  expect(box.textContent.includes("</iframe>")).toBeTruthy();
});

test("There is button with a text 'Click here to copy!'", () => {
  render(<IntegrationPage />);

  const copy = screen.getByTestId("Copy_btn");
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

  const javascript_btn = screen.getByTestId("Javascript_btn");
  const react_btn = screen.getByTestId("React_btn");

  let copy = screen.getByTestId("Copy_btn");
  fireEvent.click(javascript_btn);

  fireEvent.click(copy);

  expect(navigator.clipboard.readText()).toEqual(` <body
            id="body"
            style="height: unset"
          >
            <iframe
              id="iframe"
              style="
              height: 100vh;
              width: 100vw;
              position: absolute;
              top: 0px;
              z-index: 100;
              border-radius: 10px;
            "
              title="survey"
              src="${process.env.REACT_APP_SURVEY_URL}/survey"
            ></iframe>
            <script>
              {window.addEventListener("message", (ev) => {
                let iFrame = document.getElementById("iframe");
                let body = document.getElementById("body");
                if (ev.origin === "${process.env.REACT_APP_SURVEY_URL}") {
                  body.style.setProperty("height", ev.data.message.bodyHeight);
                  body.style.setProperty("position", ev.data.message.bodyPosition);
                  body.style.setProperty("top", ev.data.message.bodyTop);
                  body.style.setProperty("left", ev.data.message.bodyLeft);
                  iFrame.style.setProperty("height", ev.data.message.iFrameHeight);
                  iFrame.style.setProperty("width", ev.data.message.width);
                  iFrame.style.setProperty("top", ev.data.message.top);
                  iFrame.style.setProperty("left", ev.data.message.left);
                  iFrame.style.setProperty("bottom", ev.data.message.bottom);
                  iFrame.style.setProperty("display", ev.data.message.display);
                  iFrame.style.setProperty("border", ev.data.message.border);
                }
              })}
            </script>
          </body>`
    
  );
  const copy2 = screen.getByTestId("Copy_btn");
  fireEvent.click(react_btn);

  fireEvent.click(copy2);

  expect(navigator.clipboard.readText()).toEqual(`
            <body id="body" style={{height: "unset"}}> 
               <iframe id="iframe"
                style={{
                height: "100vh",
                width: "100vw",
                position: "absolute",
                top: "0px",
                Zindex: "100",
                borderRadius: "10px"
                }}
              title="survey"
               src="${process.env.REACT_APP_SURVEY_URL}/survey"></iframe>
               <script>
                 {window.addEventListener("message", (ev) => {
                let iFrame = document.getElementById("iframe");
                let body = document.getElementById("body");
                if (ev.origin === "${process.env.REACT_APP_SURVEY_URL}") 
                {
                body.style.setProperty("height", ev.data.message.bodyHeight);
                body.style.setProperty("position", ev.data.message.bodyPosition);
                body.style.setProperty("top", ev.data.message.bodyTop);
                body.style.setProperty("left", ev.data.message.bodyLeft);
                iFrame.style.setProperty("height", ev.data.message.iFrameHeight);
                iFrame.style.setProperty("width", ev.data.message.width);
                iFrame.style.setProperty("top", ev.data.message.top);
                iFrame.style.setProperty("left", ev.data.message.left);
                iFrame.style.setProperty("bottom", ev.data.message.bottom);
                iFrame.style.setProperty("display", ev.data.message.display);
                iFrame.style.setProperty("border", ev.data.message.border);
            }})}
               </script>
               </body>
            `
    
  );
});


