import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const HeaderWrapper = styled.header`
  padding: 1rem 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1em solid #272727;
`;

const LinkStyles = {
  margin: '0 0.7em',
  textDecoration: 'none',
  color: 'inherit',
};

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />

      <nav>
        <Link style={LinkStyles} to="/">
          HOME
        </Link>
        <Link style={LinkStyles} to="/about">
          ABOUT
        </Link>
        <Link style={LinkStyles} to="/apps">
          APPS
        </Link>
      </nav>
    </HeaderWrapper>
  );
};
