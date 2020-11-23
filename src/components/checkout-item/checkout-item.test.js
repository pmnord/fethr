import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import CheckoutItem from "./checkout-item.component";

test("renders the CheckoutItem component", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <CheckoutItem />
      </Provider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
