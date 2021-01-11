import { useState } from 'react';
import './index.css';
import { JoinModal } from '../../components/JoinModal';
import botData from '../../private/bot.json';

export const Home = () => {
  const [username, setUsername] = useState(false);
  const [userMessage, setUserMessage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <section className="home">
      <h1 hidden>DSOCIETY</h1> {/* SEO TITLE */}
      <h2 className="home__title">TOGETHER WE CREATE OUR NEW FUTURE</h2>
      <button
        className="home__join-button"
        onClick={() => setModalVisible(true)}
      >
        JOIN
      </button>
      {modalVisible && (
        <JoinModal
          setModalVisible={setModalVisible}
          setUsername={setUsername}
          setUserMessage={setUserMessage}
          sendForm={sendForm}
        />
      )}
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
          setModalVisible(false);
        })
        .catch(() => {
          setModalVisible(false);
        });
    } else {
      //
    }
  }
};
