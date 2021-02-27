import './index.css';
import { Link } from '../Link';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <ul className="footer__link-list">
        <li>
          <Link href="https://medium.com/@dsociety">Medium</Link>
        </li>
        <li>
          <Link href="https://twitter.com/dsociety3">Twitter</Link>
        </li>
        <li>
          <Link href="https://t.me/joinchat/ViNGrWRtj_6t8b3Y">Telegram</Link>
        </li>
        <li>
          <Link href="https://github.com/DS0CIETY">Github</Link>
        </li>
        <li>
          <Link href="mailto:ds0c1ety@protonmail.ch">Email</Link>
        </li>
      </ul>

      <p className="footer__copyright">© {year} DCOSIETY</p>
    </footer>
  );
};
