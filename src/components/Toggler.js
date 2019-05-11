import React from "react";
import useToggle from "../hooks/useToggle.js";

const Toggler = props => {
  const [isHappy, toggleIshHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
  const [isLearning, toggleIsLearning] = useToggle(true);
  return (
    <div>
      <h1 onClick={toggleIshHappy}>{isHappy ? ": )" : ": ("}</h1>
      <h1 onClick={toggleIsHeartBroken}>
        {isHeartBroken ? "heart" : "broken heart"}
      </h1>
      <h1 onClick={toggleIsLearning}>{isLearning ? "Learning" : "on break"}</h1>
    </div>
  );
};

export default Toggler;
