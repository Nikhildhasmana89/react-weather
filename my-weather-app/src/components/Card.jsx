import React from "react";
import { useWeather } from "../Context/Weather";

function Card() {
  const weather = useWeather();

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-72 transition-transform duration-200 hover:scale-105">
        <img
          className="w-full h-40 object-contain bg-blue-50"
          src={weather?.data?.current?.condition?.icon}
          alt={weather?.data?.current?.condition?.text || "Weather Icon"}
        />

        <div className="p-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {weather?.data?.current?.temp_c}.°C
          </h1>
          <p className="text-lg text-gray-600 mt-2 font-medium">
            {weather?.data?.location?.name}, {weather?.data?.location?.region}
          </p>
          <p className="text-sm text-gray-500">
            {weather?.data?.location?.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
