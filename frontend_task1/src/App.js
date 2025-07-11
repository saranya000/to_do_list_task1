import './App.css';
import TaskManager from './Components/TaskManager';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taskmanager" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}

export default App;
