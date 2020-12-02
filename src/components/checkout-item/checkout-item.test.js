import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";

import CheckoutItem from "./checkout-item.component";

test("renders the CheckoutItem component", () => {
  const mockItem = { imageUrl: "", name: "", price: 10, quantity: 10 };
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <CheckoutItem item={mockItem} />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
