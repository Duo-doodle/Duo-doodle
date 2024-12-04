
import HowTo from '../components/HowTo';
import React, { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <HowTo />
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
