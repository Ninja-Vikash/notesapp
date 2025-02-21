import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Notes } from "@pages";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
