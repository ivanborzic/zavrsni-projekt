import React from "react";
import ONama from "./ONama";
import Donacije from "./Donacije";

function Traka() {
  return (
    <nav>
      <ul>
        <li>
          <ONama />
        </li>
        <li>
          <Donacije />
        </li>
      </ul>
    </nav>
  );
}
export default Traka;
