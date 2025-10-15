import React from "react";
import { useWeather } from "../context/Weather";

export const Buttondata = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="group px-6 py-3 font-semibold text-white rounded-xl
                           bg-gradient-to-r from-blue-500 to-indigo-600
                           shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700
                           transform hover:-translate-y-1
                           transition-all duration-300 ease-in-out
                           focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800
                           active:scale-95"
    >
      {props.value}
    </button>
  );
};
