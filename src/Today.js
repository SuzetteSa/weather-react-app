import React from "react";

export default function Today() {
  return (
    <div className="Today">
      <h5 id="city">Dallas, Texas</h5>
      <ul>
        <li id="todayDayTime">Day/Time:</li>
        <li id="tempDescription">Partly Cloudy</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <div class="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              id="icon"
              class="weather-icon float-left"
            />
            <div class="float-left">
              <span class="temperature" id="main-temperature">
                14
              </span>
              <span class="units"> °C </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
