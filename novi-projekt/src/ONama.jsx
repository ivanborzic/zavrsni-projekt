import React, { useState } from "react";
import ReactModal from "react-modal";
import Lokacija from "./Lokacija";

function ONama() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="botun" onClick={() => setIsOpen(true)}>
        O nama
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
        contentLabel="onamaa"
        onRequestClose={() => setIsOpen(false)}
      >
        <h1 className="onama">O nama</h1>
        <>
          VauVau je neprofitna organizacija stvorena iz ljubavi prema
          životinjama. Trenutno imamo mogućnost pružanja adekvatne skrbi psima i
          mačkama.
        </>
        <div className="lokacija">
          <Lokacija />
        </div>
        <>Kontakt broj: 0925617452</>
      </ReactModal>
    </div>
  );
}

export default ONama;
