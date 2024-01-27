import React from "react";
import './KeyBoardKey.css'
const KeyBoardKey = ({kbkey, className, onClick }) => {
  return <div className={`key ${className}`} onClick={onClick}>
    { kbkey }
    </div>;
};

export default KeyBoardKey;
