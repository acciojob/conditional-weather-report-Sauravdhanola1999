import React from 'react'

const WeatherDisplay = ({weather}) => {
    const temperatureStyle = {
        color: weather.temperature > 20 ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)',
      };
  return (
    <div>
         <p style={temperatureStyle}>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.Conditions}</p>
      <span style={{ color: weather.temperature > 20 ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)' }}>
        Weather Data
      </span>
    </div>
  )
}

export default WeatherDisplay