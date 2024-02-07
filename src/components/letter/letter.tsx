import React from "react";
import "./letter.css"

const Letter = ({ letter }: { letter: string }) => {
  return <div className="letter">
    {letter}
  </div>;
};

export default Letter;

