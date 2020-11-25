import React from "react";
import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match }) => {
  console.log(match);
  console.log(match.params.collectionId);
  return (
    <div>
      <h2>Collection Page</h2>
    </div>
  );
};

export default CollectionPage;
