import "./App.css";
import { useState, type CSSProperties } from "react";

export default function TextReveal() {
  const [reset, setReset] = useState(0);

  return (
    <div>
      <div key={reset}>
        <h1 className="h1">
          {"Animations".split("").map((letter, i) => (
            <span key={i} style={{ "--index": i } as CSSProperties}>
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <button className="button" onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  );
}
