import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";

import Checkout from "./checkout.component";

test("renders the Checkout component", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Checkout />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
