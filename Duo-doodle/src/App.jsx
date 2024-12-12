
import HowTo from '../components/HowTo';
import React, { useState } from "react";
import Login from "./components/Login";
import AccountCreation from './components/AccountCreation';
import WaitingRoom from './components/WaitingRoom';

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
      <AccountCreation />
      <WaitingRoom />
   </>
  );
}

export default App;
