import React from "react";
import KeyBoardKey from "../KeyBoardKey/KeyBoardKey";
import './KeyBoard.css'
const KeyBoard = ({onKeyClick}) => {
  const keys = [
    "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
    "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
    "erase", "W", "X", "C", "V", "B", "N", "enter"
  ];



  return (
    <div className="keyboard">
      {keys.map((key, index) => {
        return (
          <KeyBoardKey 
            key={index}
            kbkey={key} 
            className={(index === 20 || index === 27) ? 'colspan-2' : ''}
            onClick={() => {onKeyClick(key)}}
          />
        );
      })}
    </div>
  );
};

export default KeyBoard;
