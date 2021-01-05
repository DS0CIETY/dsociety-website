import React from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contacts } from './Contacts';
import Background from './background.png';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #0009;
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
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          width: '100vw',
        }}
        src={Background}
        alt="dark city"
      />
      <AppWrapper>
        <Header />

        <Switch>
          <PageWrapper>
            <Route exact strict path="/" component={Home} />
            <Route strict path="/about" component={About} />
            <Route strict path="/projects" component={Projects} />
            <Route strict path="/contacts" component={Contacts} />
          </PageWrapper>
        </Switch>
      </AppWrapper>
    </HashRouter>
  );
};
