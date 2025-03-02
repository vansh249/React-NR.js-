const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from REACT!!"
);
console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm a h1"),
      React.createElement("h2", {}, "I'm a h2"),
    ]),
  ],
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm a h1"),
      React.createElement("h2", {}, "I'm a h2"),
    ]),
  ],
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
