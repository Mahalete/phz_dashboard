import React from "react";
import styles from "./IntegrationPage.module.css";

const IntegrationPage = () => {
  return (
    <div className={styles.IntegrationPage}>
      <h1 className={styles.hOne}>
        Please copy the code below and add to your own webpage!
      </h1>
      <p className={styles.instructions}>
        You can adjust the size the of survey on your page by changing the
        values in the{" "}
        <span
          className={styles.heightWidth}
        >{`<iframe min-height: 100vh" width="100%">`}</span>
        .
      </p>
      <div className={styles.box}>
        <p>{'<html lang="en">'}</p>
        <p>{" <head>"}</p>
        <p>{'  <meta charset="UTF-8" />'}</p>

        <p>{' <meta http-equiv="X-UA-Compatible" content="IE=edge" />'}</p>

        <p>
          {
            '  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>'
          }
        </p>

        <p>{"  <title>Survey/title>"}</p>
        <p>{"  </head>"}</p>

        <p>{'  <body style="min-height: 100vh">'}</p>
        <p>
          {`  <iframe 
              src="https://6250087de54f4a00086ddc56--profound-pithivier-7c3ab2.netlify.app/"
              style="border: none; min-height: 100vh"
              width="100%"
            ></iframe>`}
        </p>
        <p>{"  </body>"}</p>
        <p>{"  </html>"} </p>
      </div>
      <button
        className={styles.copy}
        onClick={() => {
          navigator.clipboard.writeText(`<html lang="en">
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
        }}
      >
        Click here to copy!
      </button>
    </div>
  );
};

export default IntegrationPage;
