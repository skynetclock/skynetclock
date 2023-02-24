import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">AI overlord</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>
        Skynet Clock
      </h1>
      <h2>
        Time left for an AI to enslave us
      </h2>
      <br />
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info">
        No te pierdas la oportunidad de aprender más sobre ella y su potencial para cambiar el mundo.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
