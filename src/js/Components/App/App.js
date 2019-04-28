import { CurrentWeather } from "../CurrentWeather";
import Component from "../../framework/Component";
import { Temperature } from "../Temperature";
import { SearchBar } from "../SearchBar";
import {WeatherForecast} from "../WeatherForecast";

export default class App extends Component {
  render() {
    return [
      {
        tag: SearchBar,
        classList: ["header"],
      },
      {
        tag: CurrentWeather,
        classList: ["current-weather"],
      },
      {
        tag: WeatherForecast,
        classList: ["weather-forecast"],
      },
    ];
  }
}

/* const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&appid=4fd70ad4824fb22274880ed243c351df';

const getApi = url => 
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      });
 */
