import styled from "styled-components";
import CollectionItem from "../collection-item/collection-item.component";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  width: fit-content;

  &:hover {
    opacity: 0.8;
  }
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CollectionPreviewItem = styled(CollectionItem)`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;
