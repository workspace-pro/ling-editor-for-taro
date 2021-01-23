import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "../src/style";
import LingTemplateEditor from "../src";

function App() {
  return <LingTemplateEditor src="https://ling.jd.com/" template={{}} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
