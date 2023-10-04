import React from "react";

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import "./App.css";
import Header from './components/Header';

const App = () => {
  return(
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/header' element={<Header />}/>
      </Routes>
      <Footer />
    </div>
  );
};


export default App;
