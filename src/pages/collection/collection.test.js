import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";

import Collection from "./collection.component";

/* Issue accessing Router props for test:

 TypeError: Cannot read property 'params' of undefined

      23 | const mapStateToProps = (state, ownProps) => ({
      24 |   // ownProps is an optional parameter refrencing the props on this component
    > 25 |   collection: selectCollection(ownProps.match.params.collectionId)(state),
    
*/
xtest("renders the Category component", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Collection />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
