import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/svg/logo.svg';
import LogoDark from '../../assets/svg/logo_dark.svg';

export const Header = (props) => {
  const { isDark, toggleTheme } = props;

  return (
    <header className="header">
      <a href="." className="header__logo-wrapper">
        <img src={isDark ? LogoDark : Logo} alt="logo" />
        DSOCIETY
      </a>

      <ul className="header__link-list">
        <li>
          <Link to="/" className="header__link">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/blog" className="header__link">
            BLOG
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="header__link">
            CONTACTS
          </Link>
        </li>
      </ul>

      <div className="header__theme">
        <input onClick={toggleTheme} type="checkbox" id="theme-checkbox" checked={isDark} />
        <label htmlFor="theme-checkbox" className="theme-fakecheckbox"></label>
      </div>
    </header>
  );
};
