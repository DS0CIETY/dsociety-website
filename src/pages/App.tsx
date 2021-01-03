import React from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { About } from './About';
import { Ideas } from './Ideas';
import { Home } from './Home';
import AppGif from './AppGif.gif';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #0007;
  color: #fefefe;
`;

const PageWrapper = styled.div`
  padding: 2rem 25%;
`;

export const App = () => {
  return (
    <HashRouter>
      <img
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: -1,
          height: '100vh',
          width: '100vw',
        }}
        src={AppGif}
        alt="gif with underground"
      />
      <AppWrapper>
        <Header />

        <Switch>
          <PageWrapper>
            <Route exact strict path="/" component={Home} />
            <Route strict path="/about" component={About} />
            <Route strict path="/ideas" component={Ideas} />
          </PageWrapper>
        </Switch>
      </AppWrapper>
    </HashRouter>
  );
};
