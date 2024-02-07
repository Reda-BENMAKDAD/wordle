import React from 'react';
import './modal.css';

const Modal = ({message} : { message : string}) => {
  return <div className="modal">
    {message}
    </div>;
};

export default Modal;
