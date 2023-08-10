import './css/App.css';
import './css/reset.css';
import { Routes, Route, Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import retiringroom from './data/retiringroom';
import { useState } from 'react';
function App() {
  let [data] = useState(retiringroom);
  return (
    <div className="App">
      <Header title="내용변경 완료" />
      <Routes>
        <Route path='/' element={<Main data={data} />}></Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
