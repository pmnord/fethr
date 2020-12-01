import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";

import FormInput from "./form-input.component";

test("renders the FormInput component", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <FormInput label='test' value='test' handleChange={() => {}} />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
