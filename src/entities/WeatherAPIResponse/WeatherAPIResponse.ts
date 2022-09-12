import { List } from "./List";
import { City } from "./City";

export interface WeatherAPIResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}
