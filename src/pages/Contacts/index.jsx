import { useState } from 'react';
import botData from '../../private/bot.json';
import './index.css';
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
      <h2 className="Contacts__title">НАШЕ СООБЩЕСТВО</h2>
      <p className="Contacts__description">
        Хотите что-то изменить? Есть нтересные идеи или хотите обсудить нашу жизнь и окружение? Не хотите быть
        наблюдателем? Тогда можете приосоединиться к нам. Вместе мы сможем что-то изменить. Оставьте контакты в форме
        ниже.
      </p>

      <div className="Contacts__form-wrapper">
        <form className="Contacts__form" method="post">
          <input
            className="Contacts__form-input unimportant"
            onChange={(event) => setUserPhone(event.target.value)}
            type="text"
            placeholder="Телефон"
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
            placeholder="Сообщение *"
            required
          />
          <button className="Contacts__form-btn-submit" type="submit" onClick={(event) => sendForm(event)}>
            ОТПРАВИТЬ
          </button>
        </form>
      </div>

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
