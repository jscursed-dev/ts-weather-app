import { Forecast } from "../../../../../entities/Forecast";

export const generateCurrentForecast = (forecast: Forecast): string => {
  return `<div class="weather_actual">
  <div class="weather_actual__temperature">
    <div class="weather_actual__text_big">${forecast.temperature.temp} °C</div>
    <div class="weather_actual__text">Feels like ${forecast.temperature.feelsLike} °C</div>
  </div>
  <div class="weather_actual__sky">
    <div class="weather_actual__text_bold">${forecast.weather.main}</div>
    <div class="weather_actual__text">${forecast.city}, ${forecast.country}</div>
  </div>
  <div class="weather_actual__icon">
  <img src="http://openweathermap.org/img/wn/${forecast.weather.icon}@2x.png" alt="" />
  </div>
</div>`;
};
