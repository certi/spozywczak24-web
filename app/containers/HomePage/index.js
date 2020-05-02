import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {FormattedMessage, FormattedNumber} from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectProducts,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';

import { changeQuery } from './actions';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadProducts } from '../App/actions';
import { makeSelectQuery } from './selectors';
import reducer from './reducer';
import saga from './saga';

import ProductsList from '../../components/ProductsList';
import './Products.scss';
import ProductListItem from "../ProductCard";

const key = 'home';

export function HomePage({
  query,
  loading,
  error,
  products,
  onSubmitForm,
  onChangeQuery,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    if (products === false) {
      onSubmitForm();
    }
    if (query && query.trim().length > 0) {
      onSubmitForm();
    }
  }, []);

  const productListProps = {
    loading,
    error,
    products,
  };

  let array = [];
  if (products !== false) {

    for (let i = 0; i < products.length; i++) {
      let item = products[i];
      array.push(
        <div className="product-card">
          <div className="product-card__aaa">
            <div className="product-card__name">
              <h5>{item.name}</h5>
            </div>
            <div className="product-card__body">
              <div className='product-card__body__image' style={{backgroundImage: `url("${item.image}")`}} />
              <div className="product-card__body__actions">
                  <div className="price"><FormattedNumber value={item.price} /></div>
                  <div className="button">
                    <svg viewBox="0 0 24 24" aria-hidden="true" color="white">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

    return (
    <article>
      <Helmet>
        <title>Spożywczak 24 - Twoje miejsce zakupów online!</title>
        <meta
          name="description"
          content="Spożywczak 24 - Internetowy sklep z żywnością i artykułami pierwszej portrzeby."
        />
      </Helmet>
      <div style={{marginTop: 56, paddingTop: '2vh'}}>
        <CenteredSection>
          <h2>
            <FormattedMessage {...messages.startHeader} />
          </h2>
          <p>
            <FormattedMessage {...messages.startMessage} />
          </p>
        </CenteredSection>
        {/*<Section>*/}

        <div className="products">
          {array}
          {/*<ProductsList {...productListProps} />*/}
        {/*</Section>*/}
        </div>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  products: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  query: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeQuery: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  products: makeSelectProducts(),
  query: makeSelectQuery(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeQuery: evt => dispatch(changeQuery(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadProducts());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
