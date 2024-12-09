
import HowTo from './components/HowTo.jsx';
import React, { useState } from "react";
import Login from "./components/Login";
import DrawingSubmission from './components/DrawingSubmission.jsx';



function App() {
  const [user, setUser] = useState(null);

  return (
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
  );
}

export default App;
