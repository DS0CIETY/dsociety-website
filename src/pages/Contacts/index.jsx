import { useState } from 'react';
import botData from '../../private/bot.json';
import './index.css';
import { Link } from '../../components/Link';

export const Contacts = () => {
  const [username, setUsername] = useState(false);
  const [userMessage, setUserMessage] = useState(false);

  return (
    <section className="Contacts">
      <h2 className="Contacts__title">OUR COMMUNITY</h2>
      <p className="Contacts__description">
        Want to change something, create useful project? Maybe just willing to work with us our own project? No matter
        the reason, we are always happy to help. Let's get in touch!
      </p>

      <div className="Contacts__form-wrapper">
        <h3 className="Contacts__form-title">
          Don't want to be an observer? <br /> Join us!
        </h3>

        <form className="Contacts__form" method="post">
          <input
            className="Contacts__form-input"
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="username"
            placeholder="Telegram username *"
            required
          />
          <textarea
            className="Contacts__form-textarea"
            onChange={(event) => setUserMessage(event.target.value)}
            type="text"
            name="usertext"
            placeholder="Message *"
            required
          />
          <button className="Contacts__form-btn-submit" type="submit" onClick={(event) => sendForm(event)}>
            SEND
          </button>
        </form>
      </div>

      <ul className="Contacts__link-list">
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

  function sendForm(event) {
    event.preventDefault();

    const savedUsername = window.localStorage.getItem('username');

    if (savedUsername) {
      //
    } else if (username && userMessage && username[0] === '@' && username.length > 1) {
      const requestText = `<b>🤖 User:</b> ${username} ➜ <b>💬 Message:</b> ${userMessage}`;
      const botRequest = `https://api.telegram.org/bot${botData.token}/sendMessage?chat_id=${botData.chatId}&parse_mode=html&text=${requestText}`;

      fetch(botRequest, {
        method: 'POST',
      })
        .then(() => {
          window.localStorage.setItem('username', username);
        })
        .catch(() => {
          //
        });
    } else {
      //
    }
  }
};
