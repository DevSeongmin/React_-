import { useState } from "react";

const Bulb = () => {
  console.log("Bulb");
  const [light, setLight] = useState("OFF");
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          light === "OFF" ? setLight("ON") : setLight("OFF");
        }}
      >
        {light === "OFF" ? "켜기" : "끄기"}
      </button>
    </div>
  );
};

export default Bulb;
