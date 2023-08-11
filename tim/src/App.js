import './css/App.css';
import './css/reset.css';
import './css/section04.css';
import './css/section04_List.css';

import { Routes, Route, Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import retiringroom from './data/retiringroom';
import { useState } from 'react';
import Section04 from './components/Section04';
import Section02 from './components/Section02';


function App() {
  let [data] = useState(retiringroom);
  return (
    <div className="App">
      <Header title="Header" />
      <Section02></Section02>

      <Routes>
        <Route path='/' element={<Section04 data={data} />}></Route>
      </Routes>


      <Footer />
    </div >
  );
}

export default App;
