import './index.css';
import { Link } from '../Link';

export const Footer = () => {
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
      {/* change year (adaptive) */}
      <p className="footer__copyright">© 2021 DCOSIETY</p>
    </footer>
  );
};
