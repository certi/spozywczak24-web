import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import ProductListItem from '../../containers/ProductCard';

function ProductsList({ loading, error, products }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (products !== false) {

    let array = [];
    for (let i = 0; i < products.length; i++) {
      let item = products[i];
      array.push(
        <ProductListItem key={item.id} item={item} />
      );
    }

    // Render it
    return (
      <div style={{height: 'calc(100vh - 80px)'}}>
        {array}
      </div>
    );
  }

  return null;
}

ProductsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  products: PropTypes.any,
};

export default ProductsList;
