import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from '../components/Header';
import { Home } from './Home';
import { Blog } from './Blog';
import { Contacts } from './Contacts';

export const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`App ${isDark ? '' : 'light'}`}>
      <HashRouter>
        <Header toggleTheme={toggleTheme} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </HashRouter>
    </div>
  );

  function toggleTheme() {
    setIsDark(!isDark);
  }
};
