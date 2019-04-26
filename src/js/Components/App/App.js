import { CurrentWeather } from "../CurrentWeather";
import Component from "../../framework/Component";
import { Temperature } from "../Temperature";
import { SearchBar } from "../SearchBar";

export default class App extends Component {
  render() {
    const curentWeather = document.createElement("div");
    new CurrentWeather(curentWeather);

    return [
      curentWeather,
      {
        tag: Temperature,
        props: {
          temperature: 12,
          unit: "C"
        }
      },
      {
        tag: SearchBar,
        props: {
          search: "Kiev",
          location: "north"
        }
      },
      {
        tag: "div",
        content: "header",
        classList: ["header"],
        attributes: [
          {
            name: "title",
            value: "Header"
          }
        ]
      },
      {
        tag: "div",
        content: "current-weather",
        classList: ["current-weather"]
      },
      {
        tag: "div",
        content: "forecast",
        classList: ["forecast"]
      }
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
