import rain from "../../../img/rain.png";

import Component from "../../framework/Component";

export default class CurrentWeather extends Component {
  render() {
    const txt = "I`m CurrentWeather component";
    //const img = new Image();
    //img.src = rain;
    return [/* img, */ txt];
  }
}
