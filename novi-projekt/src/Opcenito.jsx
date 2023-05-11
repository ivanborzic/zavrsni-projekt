import React, { useState, useEffect } from "react";
import Traka from "./Traka";
import PopisZivotinja from "./PopisZivotinja";
import Dohvat from "./Dohvat";

function Opcenito(zivotinje, postaviZivotinje) {
  return (
    <div>
      <Traka />
      <h1 className="naslov">Azil VauMjau</h1>
      <PopisZivotinja />
      <Dohvat />
    </div>
  );
}

export default Opcenito;
