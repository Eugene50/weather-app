import Component from "../../framework/Component";

 export default class Temperature extends Component {

   render() {
      return this.props.temperature + "&deg" + this.props.unit;
   }
 }
