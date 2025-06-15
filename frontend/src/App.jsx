import Root from "@components/containers/Root";
import { UserIdContext } from "@contexts/userId";
import { Home, Notes } from "@pages";
import Auth from "@pages/auth-page/Auth";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  const [userId, setUserId] = useState(null);
  
  return (
    <UserIdContext.Provider value={[userId, setUserId]}>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />

            <Route path="/login" element={<Auth />} />

            <Route path="/notes" element={<Notes />} />
          </Route>
        </Routes>
      </Router>
    </UserIdContext.Provider>
  );
};

export default App;
