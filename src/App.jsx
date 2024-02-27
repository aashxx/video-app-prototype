import React from 'react';
import Navbar from './components/Navbar';
import Drive from './components/Drive';
import Fire from './components/Fire';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upload from './components/Upload';

const App = () => {
  return (
    <Router>
      <Navbar />
      <h5 className='marquee'>This is just a prototype. Hence, the actual application UI and functionalities will differ.</h5>
      <Routes>
        <Route path='/' element={<><Drive /><Fire /></>} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </Router>
  )
}

export default App;