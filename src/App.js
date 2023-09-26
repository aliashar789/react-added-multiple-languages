import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Topbar from './components/Topbar';


function App() {
  return (
      <BrowserRouter>
        <div>
          <Topbar />
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/about' element={<About />} exact />
            <Route path='/contact' element={<Contact />} exact />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;