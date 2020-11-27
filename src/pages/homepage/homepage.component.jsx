import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  // console.log(props) shows the Router props
  // This component has access to Router props by default
  // because it is being rendered by a Router component

  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
