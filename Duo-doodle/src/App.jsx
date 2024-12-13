import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowTo from "./components/HowTo.jsx";
import Login from "./components/Login";
import DrawingSubmission from "./components/DrawingSubmission.jsx";
import GuesserPage from "./components/GuesserPage.jsx";
import ResultsPage from "./components/ResultsPage.jsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HowTo />
                <DrawingSubmission />
                <div>
                  {!user ? (
                    <Login onLogin={(username) => setUser(username)} />
                  ) : (
                    <div>Welcome, {user}!</div>
                  )}
                </div>
              </>
            }
          />
          <Route path="/guesser" element={<GuesserPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
