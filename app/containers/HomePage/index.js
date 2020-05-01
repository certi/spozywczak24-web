import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
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

        <div style={{margin: 0, height: 'calc(100vh - 80px)'}}>
          {/*<h2>*/}
          {/*  <FormattedMessage {...messages.findmeHeader} />*/}
          {/*</h2>*/}
          {/*<Form onSubmit={onSubmitForm}>*/}
          {/*  <label htmlFor="query">*/}
          {/*    <FormattedMessage {...messages.findmeMessage} />*/}
          {/*    <Input*/}
          {/*      id="query"*/}
          {/*      type="text"*/}
          {/*      placeholder="herbata"*/}
          {/*      value={query}*/}
          {/*      onChange={onChangeQuery}*/}
          {/*    />*/}
          {/*  </label>*/}
          {/*</Form>*/}
          <ProductsList {...productListProps} />
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
