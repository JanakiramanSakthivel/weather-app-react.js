import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const API_KEY = '09b23746dcf3c2a3546d8a5d5817fa97';

const App = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setData(response.data);
    } catch (err) {
      alert('Please enter a valid city name');
    }
  };

  return (
    <div className='App'>
      <h1 className='title'>Want Your Weather Report ?</h1>
      <div className='input-container'>
        <input type='text' className='input' value={city} onChange={e => setCity(e.target.value)} placeholder='Enter Your City Name' />
        <button className='button' onClick={fetchData}>Check</button>
      </div>

      <div>
        {data && (
          <div className='container'>
            <h1 className='city-name'>{data.name}, {data.sys.country}</h1>
            <div className='weather-info'>
              <div className='temp'>{Math.round(data.main.temp - 273.15)}°C</div>
              <div className='coordinator'>
                <div>Lat - {data.coord.lat}</div>
                <div>Lon - {data.coord.lon}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
