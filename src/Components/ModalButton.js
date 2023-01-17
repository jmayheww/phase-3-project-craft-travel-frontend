import React from "react";

export function ModalButton({ handleClick, text, className = "" }) {
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
}
