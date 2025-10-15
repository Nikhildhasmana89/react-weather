import React from "react";
import Card from "./components/Card";
import Inputdata from "./components/Inputdata";
import { Buttondata } from "./components/Buttondata";
import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather();
  console.log(weather);

  return (
    <div className="flex flex-col items-center space-y-6 py-6">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-md">
          My Weather App
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <Inputdata />
        <Buttondata onClick={weather.fetchdata} value="Search" />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Card />
      </div>
    </div>
  );
}

export default App;
