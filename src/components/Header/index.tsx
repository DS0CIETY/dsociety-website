import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { GlitchItem } from '../GlitchItem';

const HeaderWrapper = styled.header`
  padding: 0.8rem 25%;
  display: flex;
  align-items: center;
  border-bottom: 0.1em solid #333;
`;

const Nav = styled.nav`
  white-space: nowrap;
`;

const LinkStyles = {
  margin: '0 0.7em',
  textDecoration: 'none',
  color: 'inherit',
};

const LangWrapper = styled.div`
  margin-left: 1em;
`;

const LangButton = styled.button`
  border: none;
  opacity: 0.5;
  background-color: transparent;
  color: inherit;
`;

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

      <LangWrapper>
        <LangButton>EN</LangButton>
        {'｜'}
        <LangButton>RU</LangButton>
      </LangWrapper>
    </HeaderWrapper>
  );
};
