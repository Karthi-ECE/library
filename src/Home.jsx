import './App.css';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import UserHome from './UserHome';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<UserHome/>} />
      </Routes>
    </Router>
  );
}

export default App;