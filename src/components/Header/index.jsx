import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
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
            <FormattedMessage id="headerHomeLink" defaultMessage="HOME" />
          </Link>
        </li>
        <li>
          <a href="https://blog.dsoc1ety.org" className="header__link">
            <FormattedMessage id="headerBlogLink" defaultMessage="BLOG" />
          </a>
        </li>
        <li>
          <Link to="/contacts" className="header__link">
            <FormattedMessage id="headerContactsLink" defaultMessage="CONTACTS" />
          </Link>
        </li>
      </ul>

      <div className="header__theme">
        <input onClick={toggleTheme} type="checkbox" id="theme-checkbox" defaultChecked={isDark} />
        <label htmlFor="theme-checkbox" className="theme-fakecheckbox"></label>
      </div>
    </header>
  );
};
