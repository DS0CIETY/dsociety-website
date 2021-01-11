import { Link } from 'react-router-dom';
import './index.css';

export const Header = (props) => {
  const { toggleTheme } = props;

  return (
    <header className="header">
      <a href="." className="header__logo">
        <span className="logo"></span>
        DSOCIETY
      </a>

      <ul className="header__link-list">
        <li>
          <Link to="/" className="header__link" data-text="HOME">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className="header__link" data-text="ABOUT">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="header__link" data-text="CONTACTS">
            CONTACTS
          </Link>
        </li>
      </ul>

      <div className="header__theme">
        <input onClick={toggleTheme} type="checkbox" id="theme-checkbox" />
        <label htmlFor="theme-checkbox" className="theme-fakecheckbox"></label>
      </div>
    </header>
  );
};
