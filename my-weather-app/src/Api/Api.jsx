const userURl = 'https://api.weatherapi.com/v1/current.json?key=1a0652a697a44ce5af1140328250409'

export const WeatherApi = async(city) => {
    const response = await fetch(`${userURl}&q=${city}&aqi=yes`,{
        method: 'GET'
    })
    return response.json();
}