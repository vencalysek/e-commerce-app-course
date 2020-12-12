import React from "react";
import CollectionItem from "../collection-item/Collection-item";

import { CollectionPreviewContainer, Title, PreviewContainer} from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <PreviewContainer>
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
