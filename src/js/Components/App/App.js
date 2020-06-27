import {CurrentWeather} from "../CurrentWeather";
import  Component from "../../framework/Component";
import {SearchBar} from "../SearchBar";
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
