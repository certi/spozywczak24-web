import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

// import GlobalStyle from '../../global-styles';
import PrimarySearchAppBar from "../../components/PrimarySearchAppBar";
import './App.scss';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Spożywczak 24" defaultTitle="Spożywczak 24">
        <meta name="description" content="Spożywczak 24" />
      </Helmet>
      <PrimarySearchAppBar />



       {/*<div className="columns">*/}
       {/*  <div className='columns__item'> A </div>*/}
       {/*  <div className='columns__item'> B </div>*/}
       {/*  <div className='columns__item'> C </div>*/}
       {/*  <div className='columns__item'> D </div>*/}
       {/*</div>*/}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/jak_zamawiac" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/*<GlobalStyle />*/}
    </AppWrapper>
  );
}
