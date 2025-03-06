import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Hello from React and JSX</h1>;

const Heading = () => (
  <div id="container">
    <Title />
    <h1>This is a Heading</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Heading />);
