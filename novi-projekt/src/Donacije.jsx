import React, { useState } from "react";
import ReactModal from "react-modal";

function Donacije() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="botun" onClick={() => setIsOpen(true)}>
        Donacije
      </button>
      <ReactModal
        style={{
          overlay: {
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid black",
          },
        }}
        isOpen={isOpen}
        contentLabel="donacije"
        onRequestClose={() => setIsOpen(false)}
      >
        <h1 className="onama">Donacije</h1>
      </ReactModal>
    </div>
  );
}

export default Donacije;
