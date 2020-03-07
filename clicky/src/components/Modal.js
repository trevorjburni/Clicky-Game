import React from "react";

function Modal(props) {
  return (  
    <div className="modal" show={props.show} onClick={props.handleClose}>
      <div className="modal-header">
        {props.message}
      </div>
      <button variant="secondary" onClick={props.handleClose}>
        Close
      </button>
    </div>
  );
}

export default Modal;