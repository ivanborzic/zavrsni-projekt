import React, { useState } from "react";
import ReactModal from "react-modal";
import Forma from "../Forma";

function DodaneZivotinje() {
  const [isOpen, setIsOpen] = useState(false);

  const addNewPet = (newPet) => {
    setPets([...pets, newPet]);
  };
  return (
    <div>
      <button className="botunic" onClick={() => setIsOpen(true)}>
        Dodane Životinje
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
        contentLabel="dodanezivotinje"
        onRequestClose={() => setIsOpen(false)}
      >
        <h1 className="onama">Dodane Životinje</h1>
      </ReactModal>
    </div>
  );
}
export default DodaneZivotinje;
