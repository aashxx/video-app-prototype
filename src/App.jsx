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
      <Drive />
      <Fire />
      <Routes>
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </Router>
  )
}

export default App;