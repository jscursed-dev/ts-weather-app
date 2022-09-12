import { API_KEY } from "./env";
import { getAPIData } from "../shared/api";
import { formatFiveDays, createUrl } from "../shared/utils/";
import { Forecast, WeatherAPIResponse } from "../entities";
import { showInputError, renderWeatherList } from "../widgets/ui/";

const form = document.querySelector<HTMLFormElement>("form");
const input = document.querySelector<HTMLInputElement>(".searchbar__input");
const weatherListContainer = document.querySelector<HTMLElement>(".weatherList");

if (!weatherListContainer) {
  throw new Error("Weather container is missing");
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const initApp = async (url: URL) => {
    try {
      const apiResponse: WeatherAPIResponse = await (await getAPIData(url)).json();
      const commingForecasts: Forecast[] = formatFiveDays(apiResponse);

      renderWeatherList(weatherListContainer, commingForecasts);
    } catch (e) {
      showInputError(input!);
    }
  };

  initApp(createUrl(input!.value, API_KEY));
});
