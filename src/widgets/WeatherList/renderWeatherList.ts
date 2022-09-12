import {
  generateCommingForecast,
  generateCurrentForecast,
} from "../../entities/Forecast";
import { Forecast } from "../../entities/Forecast/models";

export const renderWeatherList = (
  container: HTMLElement,
  commingForecasts: Forecast[]
) => {
  container.innerHTML = `${generateCurrentForecast(
    commingForecasts[0]
  )}<ul class="daysList">
        ${commingForecasts.map((forecast) => generateCommingForecast(forecast)).join("")}
      </ul>`;
};
