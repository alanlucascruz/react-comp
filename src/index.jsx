import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

// import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    {/* <Sidebar /> */}
    <Modal />
  </Fragment>
);
