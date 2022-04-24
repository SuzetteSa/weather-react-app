import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="weather-forecast" id="forecast">
        <div class="row">
          <div class="col-2">
            <div class="weather-forecast-date">Thu</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt=""
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temp-max">18°</span>
              <span class="weather-forecast-temp-min">12°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
