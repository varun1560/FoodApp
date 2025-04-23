import React from "react";
import { createRoot } from "react-dom/client";

// React Element => Start with small case letter
// JSX is not HTML in JS its XML like syntax
// JSX (transpiled before it reaches the JS Engine) => By Parcel => Babel
// JSX => Babel React.createElement => ReactElement.js Object => HTMLElement(render)
const jsxHeading = (
  <h1 className="head">Welcome to our food app 🚀 with jsx</h1>
);

// React Functional Component => always name start with Capital letter
const Title = () => {
  return <h1 className="head">React training 🚀</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <h1 className="head">
        Welcome to our food app 🚀 with jsx functional Component
      </h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
