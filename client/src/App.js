import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamsPage from './TeamsPage';
import Fitnessclass from './Fitnessclass';
import Normalize from 'react-normalize';
import Reformerclass from './Reformerclass';
import Rates from './Rates';
import Contact from './Contact';
const App = () => {
  return (
    <>
      <Normalize />
      <Router>
        <Routes>
          <Route path="/" element={'home'} />
          <Route path="/teamspage" element={<TeamsPage />} />
          <Route path="/Fitnessclass" element={<Fitnessclass />} />
          <Route path="/Reformerclass" element={<Reformerclass />} />
          <Route path="/Rates" element={<Rates />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
