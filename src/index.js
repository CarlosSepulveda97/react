import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Carlos"
    lastName="Sepúlveda"
    jobTitle="Software Engineer"
    twitter="CarlosSH"
    avatarUrl="https://www.gravatar.com/avatar/3250229f150e1d56c72c7962f33daca7"
  />,
  container
);
