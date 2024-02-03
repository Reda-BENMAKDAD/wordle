import React, { useEffect } from "react";
import './modal.css';
const Modal = ({message}) => {
  return <div className="modal">
    {message}
    </div>;
};

export default Modal;
