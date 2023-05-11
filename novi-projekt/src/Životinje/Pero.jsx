import React, { useState } from "react";
import ReactModal from "react-modal";

function Pero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdopted, setIsAdopted] = useState(false);
  return (
    <div>
      <button className="botunic" onClick={() => setIsOpen(true)}>
        Pero
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
        <h1 className="onama">Pero</h1>
        <p>Vrsta: Mačka</p>
        <p>Dob: 4 mjeseca</p>
        <p>Boja: Sivo-bijela</p>
        <p>Voli: Guštere, mlijeko </p>
        <label>
          Udomljen
          <input className="perica" type="checkbox"></input>
        </label>
      </ReactModal>
    </div>
  );
}
export default Pero;
