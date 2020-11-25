import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";

import SignUp from "./sign-up.component";

test("renders the SignUp page", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <SignUp />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
