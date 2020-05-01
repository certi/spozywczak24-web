import React from 'react';
import PropTypes from 'prop-types';
import Img from '../Img';

function Product(props) {
  return (
    <div className="product" key={props.id}>
      <div className="image">
        <Img src={props.imageUrl} alt={props.name} />
      </div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Product;
