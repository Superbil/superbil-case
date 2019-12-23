import React from "react";
import "../../style/components/effect/BubbleMorph.css";

const BubbleMorph = ({ nth }) => {
  return (
    <div id="bubbleMorph">
      <div className={`bubble_${nth}`} />
    </div>
  );
};

export default BubbleMorph;
