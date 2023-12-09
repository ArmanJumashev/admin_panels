import React, {useState,useEffect} from 'react';
import './sidebarstyle.css';
import SideBarChat from './SideBarChat';
import MiniSettingsWindow from './MiniSettingsWindow';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [messages, setMessages] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  let navigate = useNavigate();

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);

  useEffect(() => {
    // Загрузка сообщений из JSON
    fetch('/sidebar_chats.json') 
      .then(response => response.json())
      .then(data => setMessages(data.messages))
      .catch(error => console.error("Ошибка загрузки сообщений:", error));
  }, []);

  function handleClick(path) {
    navigate(path); 
  }



  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={handleOpenModal}>
        <img src="/menu-four-svgrepo-com.svg" width={28} height={28} alt="menu"/>
      </button>

      <MiniSettingsWindow show={modalShow} onClose={handleCloseModal}>
        <p>Настройки</p>
      </MiniSettingsWindow>

      <button className="sidebar-button" onClick={() => handleClick('/phone-calls')}>
        <img src="/phone-flip-svgrepo-com.svg" width={25} height={25} alt="phone"/>
      </button>

      <button className="sidebar-button" onClick={() => handleClick('/')}>
        <img src="/info-square-svgrepo-com.svg" width={25} height={25} alt="chat"/>
      </button>

      {messages.map(message => (
        <SideBarChat key={message.id} message={message} />
      ))}

    </div>
  );
}

export default Sidebar;