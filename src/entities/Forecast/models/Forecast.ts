export interface Forecast {
  time: Date;
  city: string;
  country: string;

  temperature: {
    temp: number;
    tempMin: number;
    tempMax: number;
    feelsLike: number;
  };

  weather: {
    description: string;
    main: string;
    icon: string;
  };
}
