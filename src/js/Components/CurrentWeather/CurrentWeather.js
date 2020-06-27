import rain from "../../../img/rain.png";
import { Temperature } from "../Temperature";
import WeatherDataService from "../../../Services/WeatherDataService.js";
//import commonWeatherData from "../../../Services/api.js";

import Component from "../../framework/Component";

export default class CurrentWeather extends Component {
  render() {
    return [
      {
        tag: Temperature,
        props: WeatherDataService.getCurrentWeather(),
      },
    ];
  }

  
}

//props from  weatherDataService must have
