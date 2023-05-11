import React, { useState } from "react";
import axios from "axios";
import Dohvat from "./Dohvat";

function Forma({ postaviZivotinje }) {
  const [addPet, setAddPet] = useState({
    title: "",
    vrsta: "",
    dob: "",
    boja: "",
    voli: "",
    zadnjeGledano: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddPet({ ...addPet, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/zivotinje", addPet);

    const rez = await axios.get("/zivotinje");
    setAddPet(rez.data);
  };

  return (
    <>
      <h2>Dodaj novu životinju</h2>
      <form onSubmit={handleSubmit} className="InputNewAnimal">
        <div className="forma">
          <label>
            Title:
            <input
              onChange={handleChange}
              type="text"
              id="title"
              name="title"
              value={addPet.title}
              placeholder="Unesi ime životinje"
              htmlFor="title"
              required
            />
          </label>
          <label onChange={handleChange} className="vrsta">
            <select name="vrsta" id="vrsta" required>
              <option value="" disabled selected>
                Odaberi vrstu.
              </option>
              <option value={1}>Pas</option>
              <option value={2}>Mačka</option>
            </select>
          </label>
          <label className="dob">
            Unesi dob.
            <input
              value={addPet.dob}
              onChange={handleChange}
              placeholder="Unesi dob."
              name="dob"
              type="text"
              id="dob"
              required
            ></input>
          </label>
          <label className="boja">
            Unesi boju.
            <input
              value={addPet.boja}
              onChange={handleChange}
              placeholder="Unesi boju."
              name="boja"
              type="text"
              id="boja"
              required
            ></input>
          </label>
          <label className="opis" htmlFor="message">
            Opis.
            <textarea
              className="textarea"
              name="voli"
              value={addPet.voli}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <button className="buttonA">Dodaj</button>
          </label>
        </div>
      </form>
    </>
  );
}
export default Forma;
