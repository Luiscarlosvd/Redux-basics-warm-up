import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from '../icons';

function CartItem({
  img, title, price, amount,
}) {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        {/* remove button */}
        <button type="button" className="remove-btn">remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button type="button" className="amount-btn">
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button type="button" className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

CartItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
