import { Forecast } from "../models/Forecast";

const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const generateCommingForecast = (forecast: Forecast): string => {
  return `<li>
  <div class="weather">
    <div class="weather_actual__day">${daysOfWeek[
      forecast.time.getDay()
    ].toUpperCase()}</div>
    <div class="weather__icon">
      <img src="http://openweathermap.org/img/wn/${
        forecast.weather.icon
      }@2x.png" alt="" />
    </div>
    <div class="weather_actual__sky">
      <div class="weather_actual__text">${forecast.weather.description}</div>
    </div>
    <div class="weather_actual__temperature">
      <div class="weather_actual__text">${forecast.temperature.tempMax} °C</div>
      <div class="weather_actual__text">${forecast.temperature.tempMin} °C</div>
    </div>


  </div>
</li>`;
};
