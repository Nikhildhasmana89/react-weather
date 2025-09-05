import { useContext, useState } from "react";

const WeatherContext = useContext(null);

export const useWeather = (props) => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  const fetchData = async () => {
    const response = await WeatherApi(city);
    setData(response);
  };

  return (
    <WeatherContext.Provider value={{ setCity, data, city, fetchData }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
