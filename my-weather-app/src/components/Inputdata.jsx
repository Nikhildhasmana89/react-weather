import React from "react";
import { useWeather } from "../Context/Weather";

function Inputdata(props) {
  const weather = useWeather();
  console.log(weather);
  
  return (
    <div className="flex justify-center items-center p-4">
      <input
         className="w-72 px-4 py-2 border border-gray-300 rounded-2xl 
                   shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                   text-gray-700 placeholder-gray-400"
        value={weather.searchcity}
        placeholder="Enter city name..."
        onChange={e => weather.setsearchcity(e.target.value)}
      />
    </div>
  );
}

export default Inputdata;
