import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Person from './component/Person';
import Skill from './component/Skill';
import NavbarLayout from './component/NavbarLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<NavbarLayout />}>
            <Route path="/person" element={<Person id="0"/>} />
            <Route path="/skill" element={<Skill />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
