import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";

import CollectionPreview from "./collection-preview.component";

test("renders the CollectionPreview component", () => {
  const mockCollection = {
    title: "test",
    items: [{ id: 1, imageUrl: "", price: "", name: "", quantity: 1 }],
  };

  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <CollectionPreview
            title={mockCollection.title}
            items={mockCollection.items}
          />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
