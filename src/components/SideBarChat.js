import React from 'react';

function SideBarChat({ message }) {
  return (
    <div className="chat-message">
    <button className="sidebar-button" >
      <img src="/whatsapp-svgrepo-com.svg" width={24} height={24} alt="whatsapp link"/>
    </button>
     <strong>{message.user}</strong> 
    <br/> 
    {message.text} 
    <small> {message.timestamp}</small>
    </div>
  );
}

export default SideBarChat;