import React, { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <Login onLogin={(username) => setUser(username)} />
      ) : (
        <div>Welcome, {user}!</div>
      )}
    </div>
  );
}

export default App;
