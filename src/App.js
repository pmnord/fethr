import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
    // Firebase auth open subscription will invoke the callback
    // The open subscription is an open messaging system with the firebase app
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // Close subscription in cleanup
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/fethr" render={({ history }) => history.push("/")} />
          {/* Github hosting is at the /fethr route so the above line autopushes to root */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
