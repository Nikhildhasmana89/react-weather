import React from "react";
import { useWeather } from "../context/Weather";

function Card() {
  const weather = useWeather();
  const current = weather?.data?.current;
  const location = weather?.data?.location;

  const weatherImageUrl =
    "https://cdn.pixabay.com/photo/2021/03/12/07/23/weather-6088968_640.png";

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 shadow-2xl shadow-blue-500/20 rounded-3xl w-80 transition-transform duration-300 hover:scale-105 hover:shadow-blue-400/30 overflow-hidden">
        <div className="flex justify-center items-center h-48 bg-slate-800/50">
          <img
            className="w-32 h-32 object-contain drop-shadow-lg"
            src={weatherImageUrl}
            alt={current?.condition?.text || "Weather Image"}
          />
        </div>

        <div className="p-6 text-center">
          <h1 className="text-5xl font-extrabold  text-white">
            {current?.temp_c}°C
          </h1>
          <p className="text-xl text-gray-700 mt-1 font-semibold">
            {location?.name}, {location?.region}
          </p>
          <p className="text-sm text-gray-400 mt-1">{location?.country}</p>
          <p className="mt-3 text-gray-300 italic">
            {current?.condition?.text}
          </p>

          <div className="flex justify-around mt-5 text-gray-200 font-medium">
            <div className="flex flex-col items-center">
              <span className="text-2xl">💧</span>
              <span className="text-sm mt-1">{current?.humidity}%</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">💨</span>
              <span className="text-sm mt-1">{current?.wind_kph} km/h</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🌡️</span>
              <span className="text-sm mt-1">{current?.feelslike_c}°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
