import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { GlitchItem } from '../GlitchItem';

const HeaderWrapper = styled.header`
  padding: 0 25%;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid var(--black);
  background-color: #0003;
`;

const Nav = styled.nav`
  font-size: 1.3em;
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
          <GlitchItem>HOME</GlitchItem>
        </Link>
        <Link style={LinkStyles} to="/about">
          <GlitchItem>ABOUT</GlitchItem>
        </Link>
        <Link style={LinkStyles} to="/ideas">
          <GlitchItem>IDEAS</GlitchItem>
        </Link>
      </Nav>
      {/* submenu with time and languages ? (en / ru) */}
    </HeaderWrapper>
  );
};
