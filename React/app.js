import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Hello from JSX</h1>;
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
