import React from "react";
import { useWeather } from "../context/Weather";

function Input(props) {
  const weather = useWeather();
  console.log('weather',weather);

  return (
    <div>
      <input
        value={weather.city}
        placeholder="Search your city"
        onChange={(e) => weather.setCity(e.target.value)}
      />
    </div>
  );
}

export default Input;
