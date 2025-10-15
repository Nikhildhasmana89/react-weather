import React from "react";
import { useWeather } from "../context/Weather";

function Inputdata(props) {
  const weather = useWeather();
  console.log(weather);

  return (
    <div className="flex justify-center items-center p-6 w-full">
      <div className="w-full max-w-lg">
        <input
          type="text"
          value={weather.searchcity}
          placeholder="Enter city name..."
          onChange={(e) => weather.setsearchcity(e.target.value)}
          className="
            w-full
            px-6
            py-3
            border
            border-gray-200
            rounded-full
            bg-white
            text-lg
            text-gray-800
            placeholder-gray-400
            shadow-xl
            transition-all
            duration-300
            focus:outline-none
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-200/50
            hover:shadow-2xl
          "
        />
      </div>
    </div>
  );
}

export default Inputdata;
