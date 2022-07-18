import { useContext, useState } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

export default function Match() {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  return (
    <div>
      <button
        onClick={() => (match === false ? setMatch(true) : setMatch(false))}
      >
        Match
      </button>
      {match && <div> {sign.match}</div>}
    </div>
  );
}
