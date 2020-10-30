import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import ReactDOM from "react-dom";
import Filters from "./Filters";
import "./index.css";
import Purchases from "./Purchases";
import Header from "./ui/header/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Container fluid className="bg-dark">
      <Filters />
      <Purchases />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
