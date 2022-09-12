import { Forecast } from "../Forecast";
import { WeatherAPIResponse } from "../";

export const formatFiveDays = (response: WeatherAPIResponse): Forecast[] => {
  const daysForecast = new Array<Forecast>();

  const currentTime: number = new Date(response.list[0].dt_txt).getHours();

  for (let i = 0; i < response.list.length; i++) {
    const forecastDate = new Date(response.list[i].dt_txt);

    if (currentTime !== forecastDate.getHours()) {
      continue;
    }

    if (daysForecast.length === 5) {
      break;
    }

    daysForecast.push({
      time: forecastDate,
      city: response.city.name,
      country: response.city.country,
      temperature: {
        feelsLike: Math.round(response.list[i].main.feels_like),
        temp: Math.round(response.list[i].main.temp),
        tempMin: Math.round(response.list[i].main.temp_min),
        tempMax: Math.round(response.list[i].main.temp_max),
      },

      weather: {
        description: response.list[i].weather[0].description,
        main: response.list[i].weather[0].main,
        icon: response.list[i].weather[0].icon,
      },
    });
  }
  return daysForecast;
};
