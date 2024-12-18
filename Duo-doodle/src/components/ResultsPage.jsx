import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./../styles/ResultsPage.css"; // Add this CSS file for styling

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { correctAnswer, wrongAnswers } = location.state || {
    correctAnswer: "Meadow",
    wrongAnswers: ["grass", "flower", "daytime", "outside"],
  };

  return (
    <div className="holographic-background">
      <div className="results-container">
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
    </div>
  );
};

export default ResultsPage;
