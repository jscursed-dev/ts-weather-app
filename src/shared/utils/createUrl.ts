export const createUrl = (city: string, API_KEY: string): URL => {
  return new URL(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
};
