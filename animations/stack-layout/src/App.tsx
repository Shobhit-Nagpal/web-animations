import { useState, type CSSProperties } from "react";
import "./App.css";

const LENGTH = 3;
const SCALE = 0.05;
const TRANSLATE = "-13%";

export default function StackedComponent() {
  const [scaleIncrement, setScaleIncrement] = useState(0);
  const [translateIncrement, setTranslateIncrement] = useState("0%");

  function toggleStack() {
    if (scaleIncrement === 0 && translateIncrement === "0%") {
      setScaleIncrement(SCALE);
      setTranslateIncrement(TRANSLATE);
      return;
    }

    setScaleIncrement(0);
    setTranslateIncrement("0%");
  }

  return (
    <div className="box">
      <div className="wrapper">
        {new Array(LENGTH).fill(0).map((_, i) => (
          <div
            className="card"
            key={i}
            style={
              {
                "--index": LENGTH - 1 - i,
                "--scale-increment": scaleIncrement,
                "--translate-increment": translateIncrement,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <button className="btn" onClick={toggleStack}>
        Toggle stacking
      </button>
    </div>
  );
}
