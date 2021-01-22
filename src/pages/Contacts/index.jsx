import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import botData from '../../private/bot.json';
import './index.css';
import { Link } from '../../components/Link';
import { Modal } from '../../components/Modal';

export const Contacts = () => {
  const [userName, setUserName] = useState(false);
  const [userPhone, setUserPhone] = useState(false);
  const [userEmail, setUserEmail] = useState(false);
  const [userMessage, setUserMessage] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <section className="Contacts">
      <h2 className="Contacts__title">
        <FormattedMessage id="contactsMainTitle" defaultMessage="OUR COMMUNITY" />
      </h2>
      <p className="Contacts__description">
        <FormattedMessage
          id="contactsMainDescription"
          defaultMessage={`Do you want to change something, create a useful project? Work on interesting ideas? Whatever the reason, we're happy to help. With us!`}
        />
      </p>

      <div className="Contacts__form-wrapper">
        <h3 className="Contacts__form-title">
          <FormattedMessage
            id="contactsFormTitle"
            defaultMessage="Don't want to be an observer? {br} Join us!"
            value={{ br: <br /> }}
          />
        </h3>

        <form className="Contacts__form" method="post">
          <input
            className="Contacts__form-input unimportant"
            onChange={(event) => setUserPhone(event.target.value)}
            type="text"
            placeholder="Phone"
          />
          <input
            className="Contacts__form-input unimportant"
            onChange={(event) => setUserEmail(event.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="Contacts__form-input"
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            placeholder="Telegram username *"
            required
          />
          <textarea
            className="Contacts__form-textarea"
            onChange={(event) => setUserMessage(event.target.value)}
            type="text"
            placeholder="Message *"
            required
          />
          <button className="Contacts__form-btn-submit" type="submit" onClick={(event) => sendForm(event)}>
            <FormattedMessage id="contactsFormSendButton" defaultMessage="SEND" />
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

      <Modal isVisible={modalIsVisible} onClose={closeModal} title={modalTitle} />
    </section>
  );

  function sendForm(event) {
    event.preventDefault();

    const savedUsername = window.localStorage.getItem('username');

    if (savedUsername) {
      setModalTitle('You sended request already');
      setModalIsVisible(true);
    } else if (userName && userMessage && userName[0] === '@' && userName.length > 1) {
      const requestText = `<b>🤖 User:</b> ${userName} phone: ${userPhone && userPhone} email: ${
        userEmail && userEmail
      } ➜ <b>💬 Message:</b> ${userMessage}`;
      const botRequest = `https://api.telegram.org/bot${botData.token}/sendMessage?chat_id=${botData.chatId}&parse_mode=html&text=${requestText}`;

      fetch(botRequest, {
        method: 'POST',
      })
        .then(() => {
          setModalTitle('Request successfully sended');
          setModalIsVisible(true);
          window.localStorage.setItem('username', userName);
        })
        .catch(() => {
          setModalTitle('Something wrong. Try again');
          setModalIsVisible(true);
        });
    } else {
      setModalTitle('Wrong data');
      setModalIsVisible(true);
    }
  }

  function closeModal() {
    setModalIsVisible(false);
  }
};
