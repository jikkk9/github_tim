import './App.css';
import { Routes, Route, Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}></Route>

      </Routes>
    </div>
  );
}

export default App;
