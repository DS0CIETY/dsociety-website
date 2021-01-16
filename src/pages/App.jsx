import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from '../components/Header';
import { Home } from './Home';
import { Blog } from './Blog';
import { Contacts } from './Contacts';

export const App = () => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const localStorageTheme = window.localStorage.getItem('theme');
  // check local storage theme
  // if have then set this theme
  // else set browser theme
  const darkThemeIsActive = localStorageTheme ? localStorageTheme === 'dark' : prefersDarkScheme.matches;
  const [isDark, setIsDark] = useState(darkThemeIsActive);

  return (
    <div className={`App ${isDark ? '' : 'light'}`}>
      <HashRouter>
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </HashRouter>

      {/* Background animation */}
      <div class="App__lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  );

  function toggleTheme() {
    const theme = isDark ? 'light' : 'dark';

    setIsDark(!isDark);
    localStorage.setItem('theme', theme);
  }
};
