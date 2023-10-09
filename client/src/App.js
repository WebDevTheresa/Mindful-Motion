import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamsPage from './TeamsPage';
import Fitnessclass from './Fitnessclass';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={'home'} />
        <Route path="/TeamPage" element={<TeamsPage />} />
        <Route path="/Fitnessclasses" element={<Fitnessclass />} />
        {/* <Route path="/packages" element={packages}/>
        <Route path="/schedule" element={contact}/>  */}
      </Routes>
    </Router>
  );
};

export default App;
