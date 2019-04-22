import { CurrentWeather } from "../CurrentWeather";
import Component from "../../framework/Component";
import { Temperature } from "../Temperature";
import { SearchBar } from "../SearchBar";

export default class App extends Component {
  render() {
    const curentWeather = document.createElement("div");
    new CurrentWeather(curentWeather);

    const searchBar = document.createElement("div");
    new SearchBar(searchBar);

    const temperature = document.createElement("div");
    new Temperature(temperature);

    return [curentWeather, searchBar, temperature];
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
