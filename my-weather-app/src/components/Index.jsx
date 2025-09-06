const weatherURL =
  "https://api.weatherapi.com/v1/current.json?key=1a0652a697a44ce5af1140328250409";

export const getweatherdataforcity = async (city) => {
  const response = await fetch(`${weatherURL}&q=${city}&aqi=yes`);
  return await response.json();
};
