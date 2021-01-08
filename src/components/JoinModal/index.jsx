import './index.css';

export const JoinModal = (props) => {
  const { setModalVisible, setUsername, setUserMessage, sendForm } = props;
  return (
    <div className="join-modal-wrapper">
      <div className="join-modal">
        <div className="join-modal__header">
          <h3 className="join-modal__title">SEND US A MESSAGE</h3>
          <button
            className="join-modal__close"
            onClick={() => setModalVisible(false)}
          >
            ×
          </button>
        </div>

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
          <button
            className="join-modal__submit"
            type="submit"
            onClick={(event) => sendForm(event)}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};
