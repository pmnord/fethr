import React from "react";

import {
  CollectionPreviewContainer,
  Title,
  Preview,
  CollectionPreviewItem,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, idx) => idx < 4) // Be aware that computations performed inside components are going to run again every time the component gets re-rendered. If your dataset gets too large, this can become a performance concern.
          .map((item) => (
            <CollectionPreviewItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
