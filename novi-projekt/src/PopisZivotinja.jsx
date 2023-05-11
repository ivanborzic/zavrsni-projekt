import React, { useState, useEffect } from "react";
import axios from "axios";
import Greg from "./Životinje/Greg";
import Njusko from "./Životinje/Njusko";
import Pero from "./Životinje/Pero";
import Zuco from "./Životinje/Zuco";
import Dohvat from "./Dohvat";
import Gregs from "./Slike/Gregs";
import Peros from "./Slike/Peros";
import Njuskos from "./Slike/Njuskos";
import Zucos from "./Slike/Zucos";
import Forma from "./Forma";
import DodaneZivotinje from "./Životinje/DodaneZivotinje";

function PopisZivotinja() {
  const [pets, setPets] = useState(null);

  return (
    <div>
      <Gregs />
      <Greg />
      <Peros />
      <Pero />
      <Zucos />
      <Zuco />
      <Njuskos />
      <Njusko />
      <DodaneZivotinje />
      <></>
    </div>
  );
}

export default PopisZivotinja;
