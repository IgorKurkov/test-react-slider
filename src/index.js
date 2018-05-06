import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { default as data } from "./api/api";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App data={data} />, document.getElementById("root"));
registerServiceWorker();
