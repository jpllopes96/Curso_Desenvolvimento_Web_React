import React from "react";
import ReactDom from "react-dom";

function App() {
  //return React.createElement("h1", null, "Olá Mundo!");
  return <h1 className="title">Olá Mundo</h1>;
}
//ReactDom.render(React.createElement(App), document.getElementById("root"));
ReactDom.render(<App />, document.getElementById("root"));
