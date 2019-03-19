/* import Component from "../../framework/Component";

export default class Temperature extends Component {
   constructor(host) {
      super(host);
   }
   render() {
      return 'temperature';   
   }
}
 */

 export default class Temperature {
    constructor(host) {
       host.innerHTML = "Me temperature)";
    }
 }
