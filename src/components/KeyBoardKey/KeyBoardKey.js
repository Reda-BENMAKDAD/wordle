import React from "react";
import './KeyBoardKey.css'
const KeyBoardKey = ({kbkey, className }) => {
  return <div className={`key ${className}`}>
    { kbkey }
    </div>;
};

export default KeyBoardKey;
