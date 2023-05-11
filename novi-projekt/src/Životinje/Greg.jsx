import React, { useState } from "react";
import ReactModal from "react-modal";

function Greg() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="botunic" onClick={() => setIsOpen(true)}>
        Greg
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
        contentLabel="greg"
        onRequestClose={() => setIsOpen(false)}
      >
        <h1 className="onama">Greg</h1>
        <p>Vrsta: {}</p>
        <p>Dob: 17 mjeseci</p>
        <p>Boja: Sivo-crna</p>
        <p>Voli: Djecu, pse </p>
        <label>
          Udomljen
          <input className="perica" type="checkbox"></input>
        </label>
      </ReactModal>
    </div>
  );
}
export default Greg;
