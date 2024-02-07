import React from "react";
import './KeyBoardKey.css'
const KeyBoardKey = ({ kbkey, className, onClick } : { kbkey : string, className : string, onClick : React.MouseEventHandler<HTMLDivElement> | undefined }) => {
  return <div className={`key ${className}`} onClick={onClick}>
    { kbkey }
    </div>;
};

export default KeyBoardKey;
