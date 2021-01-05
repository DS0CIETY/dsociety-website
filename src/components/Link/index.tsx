import styled from 'styled-components';

const LinkItem = styled.a`
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: 0.2s;

  &:hover {
    opacity: 0.5;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -0.1em;
    left: 2%;
    width: 96%;
    height: 0.1em;
    background-color: var(--white);
    transition: inherit;
  }
`;

type LinkProps = {
  [key: string]: any;
};

export const Link = (props: LinkProps) => {
  const { href, children } = props;

  return <LinkItem href={href}>{children}</LinkItem>;
};
