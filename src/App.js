import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NavBar from './components/NavBar'
//import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
