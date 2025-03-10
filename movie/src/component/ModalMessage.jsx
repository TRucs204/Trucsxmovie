import { useState } from "react";

function Modal(Props) {
  return (
    <>
      <div
        className={` modal-message ${Props.boder} ${
          Props.Modalcheck ? "open-modal" : "closeModal"
        }`}
      >
        <i class={`fa-solid  ${Props.text}`}></i>
        <span>{Props.content}</span>
      </div>
    </>
  );
}

export default Modal;
