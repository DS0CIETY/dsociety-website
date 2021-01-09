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
      <div className="home__illustration">
        <svg viewBox="0 0 640.0 640.0">
          <g
            transform="translate(-143.0, 780.0) scale(0.145, -0.145)"
            fill="var(--color)"
            stroke="none"
          >
            <path
              d="M3208 4546 c-26 -7 -66 -26 -90 -42 -77 -52 -232 -216 -359 -379
-304 -392 -419 -476 -634 -462 -126 9 -178 28 -445 164 -259 132 -322 153
-452 153 -86 -1 -146 -16 -178 -45 -42 -38 -33 -161 20 -265 40 -78 123 -153
290 -262 226 -148 290 -232 298 -388 5 -104 -17 -202 -113 -499 -113 -349
-141 -492 -113 -571 26 -71 139 -111 257 -91 131 21 178 80 260 329 60 183 98
241 172 263 85 26 131 -25 193 -214 44 -130 65 -173 103 -208 88 -83 231 -90
288 -15 56 74 54 287 -5 603 -62 328 -72 459 -46 603 39 218 179 424 505 745
l92 90 125 -127 c113 -115 129 -135 168 -220 51 -108 71 -191 62 -263 -11 -95
-71 -240 -227 -550 -162 -323 -212 -450 -231 -583 -10 -70 -9 -82 11 -135 32
-83 89 -150 156 -182 55 -27 56 -27 99 -11 56 22 135 104 175 184 17 33 49
107 72 164 53 134 105 232 145 274 26 29 38 34 75 34 114 0 154 -75 204 -380
31 -187 47 -247 88 -323 35 -67 68 -97 106 -97 43 0 123 44 167 92 34 37 43
56 54 113 16 84 9 247 -19 440 -25 168 -27 319 -6 399 24 91 81 190 158 272
69 74 170 147 381 275 116 70 278 228 323 314 99 191 0 294 -227 236 -105 -26
-141 -44 -292 -142 -158 -103 -222 -124 -357 -116 -127 7 -236 36 -347 92
-156 78 -219 149 -374 422 -75 133 -136 205 -222 261 -94 61 -201 77 -310 48z"
            />
            <path
              d="M4356 4474 c-142 -45 -228 -163 -228 -312 0 -65 4 -83 33 -140 39
-76 114 -144 181 -164 24 -7 75 -13 113 -13 121 0 231 71 287 183 33 68 33
206 -1 274 -70 143 -240 218 -385 172z"
            />
            <path
              d="M2040 4471 c-138 -45 -220 -152 -228 -297 -4 -72 -1 -88 23 -141 33
-75 92 -134 168 -168 51 -24 68 -27 140 -23 101 4 159 31 226 104 56 61 81
127 81 214 0 85 -25 152 -79 212 -64 72 -127 101 -226 104 -44 2 -91 0 -105
-5z"
            />
          </g>
        </svg>
        <button
          className="home__join-button"
          onClick={() => setModalVisible(true)}
        >
          JOIN
        </button>
      </div>
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
