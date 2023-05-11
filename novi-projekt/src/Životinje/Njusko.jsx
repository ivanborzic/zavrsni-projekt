import React, { useState } from "react";
import ReactModal from "react-modal";

function Njusko() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="botunic" onClick={() => setIsOpen(true)}>
        Njuško
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
        <h1 className="onama">Njuško</h1>
        <p>Vrsta: Pas</p>
        <p>Dob: 9 mjeseci</p>
        <p>Boja: Bijela</p>
        <p>Voli: Travu, odmaranje </p>
        <label>
          Udomljen
          <input className="perica" type="checkbox"></input>
        </label>
      </ReactModal>
    </div>
  );
}
export default Njusko;
