import React, { useState } from "react";
import ReactModal from "react-modal";

function Zuco() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="botunic" onClick={() => setIsOpen(true)}>
        Žućo
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
        <h1 className="onama">Žućo</h1>
        <p>Vrsta: Pas</p>
        <p>Dob: 7 mjeseci</p>
        <p>Boja: Žuta</p>
        <p>Voli: Kišu, duge šetnje </p>
        <label>
          Udomljen
          <input className="perica" type="checkbox"></input>
        </label>
      </ReactModal>
    </div>
  );
}
export default Zuco;
