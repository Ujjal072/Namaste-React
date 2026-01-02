/*
<div id="parent">
     <div id="child">
           <h1>Hi I am H1 tag</h1>
           <h2>Hi I am H2 tag</h2>
     </div>
      <div id="child2">
           <h1>Hi I am H1 tag</h1>
           <h2>Hi I am H2 tag</h2>
     </div>

</div>

ReactElement(object) => HTML that browser understands
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Hi I am H1 tag"),
    React.createElement("h2", {}, "Hi I am H2 tag")]
    
  ),React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "Hi I am H1 tag"),
    React.createElement("h2", {}, "Hi I am H2 tag")]
    
  )]
);

// JSX



// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
