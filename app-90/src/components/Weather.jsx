import React, { useState } from "react";



const Weather = () => {

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);



  const getWeather = async () => {

    const API_KEY = "7142c1e1d328507326517228ccdc389b";


    const response = await fetch(

      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    );



    const data = await response.json();

    setWeather(data);

  };



  return (

    <div className="container mt-5">

      <input

        type="text"

        className="form-control"

        placeholder="Enter City"

        value={city}

        onChange={(e) => setCity(e.target.value)}

      />



      <button

        className="btn btn-primary mt-3"

        onClick={getWeather}

      >

        Search

      </button>



      {weather && (

        <div className="card mt-4 p-3">

          <h3>{weather.name}</h3>

          <h4>{weather.main.temp} °C</h4>

          <p>{weather.weather[0].main}</p>

          <p>Humidity: {weather.main.humidity}%</p>

          <p>Wind: {weather.wind.speed} m/s</p>

        </div>

      )}

    </div>

  );

};



export default Weather;