import './index.css';

export const Link = (props) => {
  const { children, href } = props;

  return (
    <a href={href} className="link" target="_blank" rel="noreferrer">
      {children} <span className="link__arrow">↗</span>
    </a>
  );
};
