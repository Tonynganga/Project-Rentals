import React from "react";

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

//pages
import Home from './pages/Home';

const App = () => {
  return(
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>

    </div>
  );
};


export default App;
