import React from "react";
import Letter from "../letter/letter";
import './Try.css'

const Try = ({ word } : { word : string}) => {
  return <div className="try">
    {word.toUpperCase().split('').map(((letter, index) => 
      <Letter letter={letter} key={index} />
    ))}
  </div>;
};
export default Try;
