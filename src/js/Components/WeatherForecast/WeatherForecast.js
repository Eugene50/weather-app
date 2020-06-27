import Component from "../../framework/Component";
import WeatherDataService from "../../../Services/WeatherDataService.js";
import { Temperature } from "../Temperature";

export default class WeatherForecast extends Component {
  render() {
    return [
      {
        tag: Temperature,
        props: WeatherDataService.getWeatherForecast(),
      },
      {
        tag: Temperature,
        props: WeatherDataService.getWeatherForecast(),
      },{
        tag: Temperature,
        props: WeatherDataService.getWeatherForecast(),
      },
      {
        tag: Temperature,
        props: WeatherDataService.getWeatherForecast(),
      },
      {
        tag: Temperature,
        props: WeatherDataService.getWeatherForecast(),
      }
    ];
  }
}

//props from  weatherDataService must have
