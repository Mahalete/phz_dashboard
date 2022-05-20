import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />,
    <body id="body" style={{ height: "unset" }}>
      <iframe
        id="iframe"
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: "0px",
          Zindex: "100",
          borderRadius: "10px",
        }}
        title="survey"
        src="http://localhost:3001/survey"
      ></iframe>
      <script>
        {window.addEventListener("message", (ev) => {
          let iFrame = document.getElementById("iframe");
          let body = document.getElementById("body");
          if (ev.origin === "http://localhost:3001") {
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
    </body>
  </BrowserRouter>
);
