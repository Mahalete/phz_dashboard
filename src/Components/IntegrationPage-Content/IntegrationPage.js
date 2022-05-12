import React from "react";
import styles from "./IntegrationPage.module.css";

const IntegrationPage = () => {
  return (
    <div className={styles.IntegrationPage}>
      <h1 className={styles.hOne}>
        Please copy the code below and add to your own webpage!
      </h1>
      <p data-testid="instructions" className={styles.instructions}>
        You can adjust the size the of survey on your page by changing the style
        attribute values in the html element {`<body>`}.
      </p>
      <div data-testid="box" className={styles.box}>
        <p>{`   <body id="body" style="height: unset"> `}</p>
        <p>{` <iframe id="iframe"`}</p>
        <p>{` style="
              height: 100vh;
              width: 100vw;
              position: absolute;
              top: 0px;
              bottom: unset;
              left: unset;
              z-index: 100;
            "`}</p>

        <p>{` title="survey"`}</p>
        <p>{`  src="https://phz-survey.herokuapp.com/survey"></iframe> `}</p>
        <p>{`  <script>{window.addEventListener("message", (ev) => {`}</p>
        <p>{`  let iFrame = document.getElementById("iframe");`}</p>
        <p>{`  let body = document.getElementById("body");`}</p>
        <p>{`  if (ev.origin === "https://phz-survey.herokuapp.com/") {`}</p>
        <p>{` if (ev.data.message === "closed") {`}</p>
        <p>{`  body.style.setProperty("height", "100vh");`}</p>
        <p>{`  iFrame.style.setProperty("height", "10vh");`}</p>
        <p>{`  iFrame.style.setProperty("width", "20vw");`}</p>
        <p>{`  iFrame.style.setProperty("top", "unset");`}</p>
        <p>{`  iFrame.style.setProperty("left", "0vw");`}</p>
        <p>{`  iFrame.style.setProperty("bottom", "0px");`}</p>
        <p>{`  iFrame.style.setProperty("display", "unset");`}</p>
        <p>{` } else if (ev.data.message === "submitted") {`}</p>
        <p>{`   iFrame.style.setProperty("display", "none");`}</p>
        <p>{`  } else if (ev.data.message === "open") {`}</p>
        <p>{`   body.style.setProperty("height", "100vh");`}</p>
        <p>{`   iFrame.style.setProperty("height", "100vh");`}</p>
        <p>{`   iFrame.style.setProperty("width", "100vw");`}</p>
        <p>{`   iFrame.style.setProperty("top", "0px");`}</p>
        <p>{`   iFrame.style.setProperty("left", "unset");`}</p>
        <p>{`   iFrame.style.setProperty("bottom", "unset");`}</p>
        <p>{`   iFrame.style.setProperty("display", "unset");}}})}; </script></body>`}</p>
      </div>
      <button
        className={styles.copy}
        onClick={() => {
          navigator.clipboard.writeText(`
          <body id="body" style="height: unset">
          <iframe
            id="iframe"
            style="
              height: 100vh;
              width: 100vw;
              position: absolute;
              top: 0px;
              bottom: unset;
              left: unset;
              z-index: 100;
            "
            title="survey"
            src="https://phz-survey.herokuapp.com/survey"
          ></iframe>
          <script>
            {
              window.addEventListener("message", (ev) => {
                let iFrame = document.getElementById("iframe");
                let body = document.getElementById("body");
                if (ev.origin === "https://phz-survey.herokuapp.com/") {
                if (ev.data.message === "closed") {
                  body.style.setProperty("height", "100vh");
                  iFrame.style.setProperty("height", "10vh");
                  iFrame.style.setProperty("width", "20vw");
                  iFrame.style.setProperty("top", "unset");
                  iFrame.style.setProperty("left", "0vw");
                  iFrame.style.setProperty("bottom", "0px");
                  iFrame.style.setProperty("display", "unset");
                } else if (ev.data.message === "submitted") {
                  iFrame.style.setProperty("display", "none");
                } else if (ev.data.message === "open") {
                  body.style.setProperty("height", "100vh");
                  iFrame.style.setProperty("height", "100vh");
                  iFrame.style.setProperty("width", "100vw");
                  iFrame.style.setProperty("top", "0px");
                  iFrame.style.setProperty("left", "unset");
                  iFrame.style.setProperty("bottom", "unset");
                  iFrame.style.setProperty("display", "unset");
                }
              }
            });        
          }
          </script>
        </body>
          `);
        }}
      >
        Click here to copy!
      </button>
    </div>
  );
};

export default IntegrationPage;
