import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowTo from "./components/HowTo.jsx";
import Login from "./components/Login";
import DrawingSubmission from "./components/DrawingSubmission.jsx";
import GuesserPage from "./components/GuesserPage.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import AccountCreation from "./components/AccountCreation.jsx";
import Lobby from "./components/WaitingRoom.jsx";



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
          <Route path="/information" element={<HowTo />} />
          <Route path="/account-creation" element={<AccountCreation />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/drawing-submission" element={<DrawingSubmission />} />
          <Route path="/guesser" element={<GuesserPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
