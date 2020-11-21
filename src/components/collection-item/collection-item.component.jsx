import React from "react";
import "./collection-item.styles.scss";
import { addCartItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  const handleAddItem = () => addCartItem(item);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={handleAddItem} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
