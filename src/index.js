import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Filters from "./Filters";
import "./index.css";
import Purchases from "./Purchases";
import Header from "./ui/header/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div class="container-fluid bg-dark">
      <Filters />
      <Purchases />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
