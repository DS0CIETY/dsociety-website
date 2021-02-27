import { Link } from 'react-router-dom';
import './index.css';
import Logo from '../../assets/svg/logo.svg';
import LogoDark from '../../assets/svg/logo_dark.svg';
import SunSvg from '../../assets/svg/sun.svg';
import MoonSvg from '../../assets/svg/moon.svg';

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
            ГЛАВНАЯ
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="header__link">
            КОНТАКТЫ
          </Link>
        </li>
      </ul>

      <div className="header__theme">
        <input onClick={toggleTheme} type="checkbox" id="theme-checkbox" defaultChecked={isDark} />
        <label htmlFor="theme-checkbox" className="theme-fakecheckbox">
          <img src={isDark ? SunSvg : MoonSvg} className="theme-icon" alt="Theme icon" />
        </label>
      </div>
    </header>
  );
};
