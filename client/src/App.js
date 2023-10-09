import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={'home'} />
        {/* <Route path="/team" element={team}/>
        <Route path="/classes" element={classes}/>
        <Route path="/packages" element={packages}/>
        <Route path="/schedule" element={contact}/> */}
      </Routes>
    </Router>
  );
};

export default App;
