import { commonWeatherData } from "../Services/api.js";

class WeatherDataService {
  constructor(props){
    this.props = props;
  }

  getCurrentWeather() {
    return commonWeatherData().then((data) => {
      return data
        .filter((item, index) => {
          if (index === 0) {
            return item;
          }
        })
        .map((item) => {
          return this.props =  item.temp;
        });
    })
    //тут идет выборка ветер, температура, влажность итдю
  }


  getWeatherForecast() {}
}

export default new WeatherDataService();
