import React from "react";
import "./css/PopUpListen.css";

function PopUpListen({ comment, onClick }) {
  return (
    <>
      <div className="popUpToListen">
        <h2>Test To Speech</h2>
        <h4 onClick={onClick}>Fechar</h4>
        <span onClick={onClick}>{comment}</span>
      </div>
    </>
  );
}

export default PopUpListen;
