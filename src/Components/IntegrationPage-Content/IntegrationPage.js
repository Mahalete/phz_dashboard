import React from "react";
import styles from "./IntegrationPage.module.css";

const IntegrationPage = () => {
  return (
    <div className={styles.IntegrationPage}>
      <h1 className={styles.hOne}>
        Please copy the code below and add to your own webpage!
      </h1>

      <div data-testid="box" className={styles.box}>
        <p>{` <body id="body" style="height: unset"> `}</p>
        <p>{`    <iframe id="iframe"`}</p>
        <p>{`     style=`}</p>
        <p>{`     "height: 100vh;`}</p>
        <p>{`   width: 100vw;`}</p>
        <p>{`    position: absolute;`}</p>
        <p>{`    top: 0px;`}</p>
        <p>{`    z-index: 100;`}</p>
        <p>{`   border-radius: 10px;"`}</p>
        <p>{`   title="survey"`}</p>
        <p>{`    src="${process.env.REACT_APP_SURVEY_URL}/survey"></iframe>`}</p>
        <p>{`   <script>`}</p>
        <p>{`     {window.addEventListener("message", (ev) => {`}</p>
        <p>{`      let iFrame = document.getElementById("iframe");`}</p>
        <p>{`      let body = document.getElementById("body");`}</p>
        <p>{`     if (ev.origin === "${process.env.REACT_APP_SURVEY_URL}") {`}</p>
        <p>{`       body.style.setProperty("height", ev.data.message.bodyHeight);`}</p>
        <p>{`      body.style.setProperty("position", ev.data.message.bodyPosition);`}</p>
        <p>{`     body.style.setProperty("top", ev.data.message.bodyTop);`}</p>
        <p>{`      body.style.setProperty("left", ev.data.message.bodyLeft);`}</p>
        <p>{`     iFrame.style.setProperty("height", ev.data.message.iFrameHeight);`}</p>
        <p>{`     iFrame.style.setProperty("width", ev.data.message.width);`}</p>
        <p>{`    iFrame.style.setProperty("top", ev.data.message.top);`}</p>
        <p>{`    iFrame.style.setProperty("left", ev.data.message.left);`}</p>
        <p>{`    iFrame.style.setProperty("bottom", ev.data.message.bottom);`}</p>
        <p>{`    iFrame.style.setProperty("display", ev.data.message.display);`}</p>
        <p>{`    iFrame.style.setProperty("border", ev.data.message.border);}})}</script> </body>`}</p>
      </div>
      <button
        className={styles.copy}
        onClick={() => {
          navigator.clipboard.writeText(` <body
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
