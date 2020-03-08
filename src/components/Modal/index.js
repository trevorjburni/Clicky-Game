import React from "react";
import "./style.css";

function Modal(props) {
  const showHideClassname = props.show ? "modal display-block" : "modal display-none";
  return (  
    <div className={showHideClassname} show={props.show} onClick={props.handleClose}>
      <div className="modal-main">
        {props.message}
      </div>
      <button onClick={props.handleClose}>
        Close
      </button>
    </div>
  );
}

export default Modal;