import React from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { About } from './About';
import { Ideas } from './Ideas';
import { Home } from './Home';
// import { NoMatch } from './NoMatch';

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
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/about" component={About} />
            <Route exact strict path="/ideas" component={Ideas} />
            {/* <Route exact strict path="/*" component={NoMatch} /> */}
          </PageWrapper>
        </Switch>
      </AppWrapper>
    </HashRouter>
  );
};
