import React from "react";
import Card from "./Components/Card";
import Inputdata from "./Components/Inputdata";
import { Buttondata } from "./Components/Buttondata";
import { useWeather } from "./Context/Weather";

function App() {
  const weather = useWeather();
  console.log(weather);
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-semibold text-blue-600 drop-shadow-md text-center mb-6">
        My Weather App
      </h1>

      <div className="flex gap-3 mb-6">
        <Inputdata />
        <Buttondata
          onClick={weather.fetchdata}
          value="Search"
        />
      </div>

      <Card />
    </div>
  );
}

export default App;
