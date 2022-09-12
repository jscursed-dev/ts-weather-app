import { API_KEY } from "./env";
import { getAPIData } from "../shared/api";
import { formatFiveDays, createUrl } from "../shared/utils/";
import { Forecast } from "../entities/Forecast/models";
import { renderWeatherList } from "../widgets/WeatherList";
import { showInputError } from "../entities/Searchbar";

const form = document.querySelector<HTMLFormElement>("form");
const input = document.querySelector<HTMLInputElement>(".searchbar__input");
const weatherListContainer = document.querySelector<HTMLElement>(".weatherList");

if (weatherListContainer) {
  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const initApp = async (url: URL) => {
      try {
        const commingForecasts: Forecast[] = await getAPIData(url)
          .then((response) => response.json())
          .then((data) => formatFiveDays(data));
        renderWeatherList(weatherListContainer, commingForecasts);
      } catch (e) {
        showInputError(input!);
      }
    };

    initApp(createUrl(input!.value, API_KEY));
  });
}
