import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from '../components/Header';
import { Home } from './Home';
import { About } from './About';
import { Contacts } from './Contacts';

export const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`App ${isDark ? '' : 'light'}`}>
      <HashRouter>
        <Header toggleTheme={toggleTheme} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </HashRouter>
    </div>
  );

  function toggleTheme() {
    setIsDark(!isDark);
  }
};
