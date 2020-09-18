import React from "react";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

const HomePage = (props) => {
//   console.log(props); // This component has access to Router props because it is being rendered by a Router component.

  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
