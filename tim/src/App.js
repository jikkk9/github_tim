import "./css/App.css";
import "./css/reset.css";
import "./css/section04.css";
import "./css/section04_List.css";
import "./css/section05.css";
import "./css/section03.css";
import "./css/section02.css";
import "./css/section06.css";
import "./css/section07.css";
import "./css/footer.css";
import "./css/header.css";
import "./css/NaverMap.css";
import "./css/root.css";

import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";

import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import retiringroom from "./data/retiringroom";
import section05Data from "./data/section05Data";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import Section06 from "./components/Section06";
import Section07 from "./components/Section07";
import NaverMap from "./components/NaverMap";

function CombinedSections({ data, data05 }) {
  return (
    <>
      <Section04 data={data} />
      <Section05 data={data05} />
    </>
  );
}
function App() {
  let [data] = useState(retiringroom);
  let [data05] = useState(section05Data);

  return (
    <div className="App">
      <Header title="Header" />

      <Routes>
        <Route path="/" element={
          <>
            <Section01 />
            <Section02 />
            <Section03 />
            <CombinedSections data05={data05} data={data} />
            <Section06 />
            <Section07 />

          </>
        } />
        <Route path="/about" element={<NaverMap />} />
      </Routes>
      <Footer />


    </div>
  );
}


export default App;

