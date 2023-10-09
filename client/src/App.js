import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamsPage from './TeamsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={'home'} />
        <Route path="/teamspage" element={<TeamsPage />} />
        {/* <Route path="/classes" element={<classes/>}/> */}
        {/* <Route path="/packages" element={<packages/>}/> */}
        {/* <Route path="/schedule" element={<çcontact/>}/>  */}
      </Routes>
    </Router>
  );
};

export default App;
