import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Theme } from './Theme';

export const Header = () => {
  return (
    <header>
      <Logo />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/apps">Apps</Link>
      </nav>

      <Theme />
    </header>
  );
};
