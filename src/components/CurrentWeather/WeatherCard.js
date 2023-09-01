import React from "react";

const WeatherCard = ( props ) => {


  return (
    <div >

      {props.data && (
          <div className="bg-opacity-50 backdrop-blur-md bg-gray-200 w-64 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Weather Information</h2>
          <p className="text-lg">
            Temperature: {props.data.main.temp}°F
          </p>
          <p className="text-lg">
            Humidity: {props.data.main.humidity}%
          </p>
          <p className="text-lg">
            Wind Speed: {props.data.wind.speed} m/s
          </p>
          <p className="text-lg">
            Weather Condition: {props.data.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;