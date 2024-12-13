import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { correctAnswer, wrongAnswers } = location.state || {
    correctAnswer: "Unknown",
    wrongAnswers: [],
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Results</h1>
      <p>
        <strong>Correct Answer:</strong> {correctAnswer}
      </p>
      <h2>Wrong Attempts:</h2>
      <ul>
        {wrongAnswers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};


export default ResultsPage;
