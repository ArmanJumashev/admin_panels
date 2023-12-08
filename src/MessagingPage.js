import './MessagingPage.css';
import Sidebar from './components/SideBar';
import Chat from './components/Chat';

function MessagingPage() {
  return (
    <div className="base-container">
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default MessagingPage;
