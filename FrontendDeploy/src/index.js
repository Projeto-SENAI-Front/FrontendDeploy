import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home from './pages/Home';
import Equipamentos from './pages/Equipamentos';

import Header from './components/Header';
import Footer from './components/Footer';


import './index.css'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/equipamentos' element={<Equipamentos/>} /> 
        </Routes>                   
        <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


