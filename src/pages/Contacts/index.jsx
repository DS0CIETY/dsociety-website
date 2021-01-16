import { useState } from 'react';
import botData from '../../private/bot.json';
import './index.css';
import { Link } from '../../components/Link';

export const Contacts = () => {
  const [username, setUsername] = useState(false);
  const [userMessage, setUserMessage] = useState(false);

  return (
    <section className="contacts">
      <h2 className="contacts__title">JOIN OUR COMMUNITY</h2>
      <p className="contact__description">
        Want to change something, create useful project? Maybe just willing to work with us our own project? No matter
        the reason, we are always happy to help. Let's get in touch!
      </p>

      <div className="join-modal-wrapper">
        <div className="join-modal">
          <h3 className="join-modal__title">SEND US A MESSAGE</h3>

          <form className="join-modal__form" method="post">
            <label className="join-modal__label">
              Telegram username *
              <input
                className="join-modal__input"
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                name="username"
                required
              />
            </label>
            <label className="join-modal__label">
              Message *
              <input
                className="join-modal__input"
                onChange={(event) => setUserMessage(event.target.value)}
                type="text"
                name="usertext"
                required
              />
            </label>
            <button className="join-modal__submit" type="submit" onClick={(event) => sendForm(event)}>
              SEND
            </button>
          </form>
        </div>
      </div>

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

  function sendForm(event) {
    event.preventDefault();

    const savedUsername = window.localStorage.getItem('username');

    if (savedUsername) {
      //
    } else if (username && userMessage) {
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
