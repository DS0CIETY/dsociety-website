import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const HeaderWrapper = styled.header`
  padding: 1rem 25%;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid #222;
  background-color: #09090990;
`;

const Nav = styled.nav`
  font-size: 1.2em;
  white-space: nowrap;
`;

const LinkStyles = {
  margin: '0 0.7em',
  textDecoration: 'none',
  color: 'inherit',
};

export const Header = () => {
  return (
    <HeaderWrapper>
      <div style={{ flex: '1' }}>
        <Logo />
      </div>

      <Nav>
        <Link style={LinkStyles} to="/">
          HOME
        </Link>
        <Link style={LinkStyles} to="/about">
          ABOUT
        </Link>
        <Link style={LinkStyles} to="/projects">
          PROJECTS
        </Link>
        <Link style={LinkStyles} to="/contacts">
          CONTACTS
        </Link>
      </Nav>
      {/* submenu with time and languages ? (en / ru) */}
    </HeaderWrapper>
  );
};
