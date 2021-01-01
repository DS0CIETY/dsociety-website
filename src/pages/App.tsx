import React from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { About } from './About';
import { Apps } from './Apps';
import { Home } from './Home';
import { NoMatch } from './NoMatch';

const AppWrapper = styled.div`
  min-height: 100vh;
  background: #080808;
  color: #fff;
`;

const PageWrapper = styled.div`
  padding: 2rem 25%;
`;

export const App = () => {
  return (
    <HashRouter>
      <AppWrapper>
        <Header />

        <Switch>
          <PageWrapper>
            <Route exact strict path="/">
              <Home />
            </Route>
            <Route exact strict path="/about">
              <About />
            </Route>
            <Route exact strict path="/apps">
              <Apps />
            </Route>
            <Route exact strict path="/*">
              <NoMatch />
            </Route>
          </PageWrapper>
        </Switch>
      </AppWrapper>
    </HashRouter>
  );
};
