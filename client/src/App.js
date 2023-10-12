import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamsPage from './TeamsPage';
import Fitnessclass from './Fitnessclass';
import Normalize from 'react-normalize';

const App = () => {
  return (
    <>
      <Normalize />
      <Router>
        <Routes>
          <Route path="/" element={'home'} />
          <Route path="/teamspage" element={<TeamsPage />} />
          <Route path="/Fitnessclass" element={<Fitnessclass />} />
          {/* <Route path="/packages" element={packages}/>
        <Route path="/schedule" element={contact}/>  */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
