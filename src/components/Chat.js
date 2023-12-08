import React, { useState, useEffect } from 'react';
import './chatstyles.css';

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Загрузка сообщений из JSON
    fetch('./chat_messages.json')
      .then(response => response.json())
      .then(data => setMessages(data.messages))
      .catch(error => console.error('Ошибка загрузки сообщений:', error));
  }, []);

  return (
    <div className="chat-container">
    <div className="messages-list">
      {messages.map(message => (
        <div key={message.id} className={`message ${message.user === 'Alice' ? 'sent' : 'received'}`}>
          <div className="message-content">{message.text}</div>
          <div className="message-timestamp">{new Date(message.timestamp).toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
    <div className="message-input">
      <input type="text" placeholder="Введите сообщение..." />
      <button>Отправить</button>
    </div>
  </div>
  );
}

export default Chat;