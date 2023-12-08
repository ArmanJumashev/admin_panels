import React from 'react';

function SideBarChat({ message }) {
  return (
    <div className="chat-message">
      <strong>{message.user}</strong><br/><br/> {message.text} <small>{message.timestamp}</small>
    </div>
  );
}

export default SideBarChat;