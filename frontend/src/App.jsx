import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Create, Home, Notes } from "@pages";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/notes" element={<Notes />} />

          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
