import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const Title = (
  <h1 className="head" tabIndex="1">
      {elem}
    Namaste React from JSX
  </h1>
);

const a = ()=>(
  <h1>a component hu</h1>
);

// component compositions
const HeadingComponent = () => {
  return (
    <div id="container">
     {Title}
     {a()}
      <h2>{10000+3425}</h2>
      <h1 id="heading">Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
