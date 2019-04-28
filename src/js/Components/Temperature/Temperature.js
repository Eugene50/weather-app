import Component from "../../framework/Component";

 export default class Temperature extends Component {

   render() {
      return "Temperature" + " " + this.props.temperature + " " + this.props.unit;
   }
 }
