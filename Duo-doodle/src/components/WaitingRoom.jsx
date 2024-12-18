import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); 

function Lobby({ username }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    
    socket.emit("join-room", username);

  
    socket.on("update-players", (players) => {
      setPlayers(players);
    });

    return () => {
      socket.disconnect();
    };
  }, [username]);

  return (
    <section className="lobby-container">
      <h1>Welcome to the Lobby, {username}!</h1>
      <h2>Players in the Lobby:</h2>
      <ul className="players-list">
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      {/* fill button with the code to randomize and sort the players */}
      {/* <button onClick={ fill this with player sorting code }>Start Game!</button> */}
    </section>
  );
}

export default Lobby;