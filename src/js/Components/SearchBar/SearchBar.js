import Component from "../../framework/Component";

export default class SearchBar extends Component {
  render() {
    return "I`m SearchBar component" + " " + this.props.search;
  }
}
