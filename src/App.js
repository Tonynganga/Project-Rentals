import React from "react";

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import "./App.css";
import Header2 from './components/Header_V2';

const App = () => {
  return(
    <div className="max-w-[1440px] mx-auto bg-white">
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/header' element={<Header2 />}/>
      </Routes>
      
    </div>
  );
};


export default App;
