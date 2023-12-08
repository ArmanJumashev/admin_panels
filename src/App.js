import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessagingPage from './MessagingPage';
import PhoneCallsPage from './PhoneCallsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MessagingPage />} />
        <Route path="/phone-calls" element={<PhoneCallsPage />} />
      </Routes>
    </Router>
  );
}

export default App;