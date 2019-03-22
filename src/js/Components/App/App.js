import Component from "../../framework/Component";
import {Temperature} from "../Temperature";

export default class App extends Component {
   /* constructor(host) {
      super(host);
   } */

   render() {
      const temperature = document.createElement('div');
      new Temperature(temperature);
      const temperature2 = document.createElement("div");
      new Temperature(temperature2);
      return ['Temperature range', temperature, temperature2];
   }
}


/* fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&appid=4fd70ad4824fb22274880ed243c351df')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      }); */
