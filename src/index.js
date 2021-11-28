import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { motion, useAnimation } from "framer-motion";

import Circle from "./components/Circle";

function App() {
  const controls = useAnimation();
  return (
    <>
      <div className="container">
        <button onClick={() => controls.start({ x: [0, 100, 50] })}>
          Start
        </button>
        <motion.div
          style={{
            backgroundColor: "red",
            width: "30px",
            height: "30px",
            margin: "80px",
          }}
          animate={controls}
        />

        <Circle />
      </div>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
