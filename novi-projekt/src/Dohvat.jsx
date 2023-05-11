import axios from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers = {
  "content-type": "application/json",
};

function Dohvat() {
  const [zivotinje, postaviZivotinje] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/zivotinje/")
      .then((res) => postaviZivotinje(res.data));
  }, []);

  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchTypes = axios.get("/types");

      const requirementArray = fetchTypes;

      try {
        const res = await Promise(requirementArray);

        setTypes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div className="dohvat"></div>;
}

export default Dohvat;
