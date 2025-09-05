import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Card from './components/Card'
import Button from './components/Button'
import { useWeather, useWeather } from './context/Weather'
import { WeatherApi } from './Api/Api'

function App() {
  const useWeather = useWeather()
  

  return (
    <>
      <h1>My Weather app</h1>
      <Input/>
      <Button onClick = {WeatherApi.fetchdata} />
      <Card/>
      <Button/>
    </>
  )
}

export default App
