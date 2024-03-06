import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Generator from './components/home/Generator';
import History from './components/fav & his/History';
import Favorites from './components/fav & his/Favorites';
import Theme from './components/theme/Theme';
import './components/components.css'

const App = () => {

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Generator />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/theme" element={<Theme />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
