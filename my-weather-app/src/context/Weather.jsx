import { createContext, useContext, useState } from "react";
import { getweatherdataforcity } from "../components/Index";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setdata] = useState(null);
  const [searchcity, setsearchcity] = useState(null);

  const fetchdata = async () => {
    const response = await getweatherdataforcity(searchcity);
    setdata(response);
  };

  return (
    <WeatherContext.Provider
      value={{ searchcity, fetchdata, data, setsearchcity }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
