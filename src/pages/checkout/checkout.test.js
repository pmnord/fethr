import React from "react";
import ReactDOM from "react-dom";
import Checkout from "./checkout.component";

test("renders the Checkout component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Checkout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
