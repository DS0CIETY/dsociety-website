import './index.css';
import { Link } from '../../components/Link';

export const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title">JOIN US</h2>
      <p className="contact__description">
        Want to change something, create useful project? Maybe just willing to
        work with us our own project? No matter the reason, we are always happy
        to help. Let's get in touch!
      </p>

      <ul className="contacts__link-list">
        <li>
          <Link href="https://medium.com/@dsociety">Medium</Link>
        </li>
        <li>
          <Link href="https://twitter.com/dsociety3">Twitter</Link>
        </li>
        <li>
          <Link href="https://github.com/DS0CIETY">Github</Link>
        </li>
        <li>
          <Link href="mailto:ds0c1ety@protonmail.ch">Email</Link>
        </li>
      </ul>
    </section>
  );
};
