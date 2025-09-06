import React from "react";
import { useWeather } from "../Context/Weather";

export const Buttondata = (props) => {
  
  return (
    <button
      onClick={props.onClick}
       className="px-5 py-2 bg-blue-600 text-white font-medium rounded-2xl 
                 shadow-md hover:bg-blue-700 active:scale-95 
                 transition-all duration-200 ease-in-out m-2"
    >
      {props.value}
    </button>
  );
};
