import Component from "../../framework/Component";

export default class SearchBar extends Component {
  render() {
    return [
     {
       tag: "div",
       classList: ["search-bar-wrapper"],
       children: [
        {
          tag: "button",
          classList: ["button"],
        },
        {
          tag: "button",
          classList: ["button"],
        },
        {
          tag: "input",
          classList: ["search"],
          
        },
        {
          tag: "button",
          classList: ["search-btn", "button"],
          attributes: [
            {
              name: "name",
              value: "search",
            },
            {
              name: "id",
              value: "search-btn",
            },
            {
              name: "value",
              value: "Search",
            },
            {
              name: "type",
              value: "submit",
            },
          ]
        },
       ]
     }
    ];
  }
}
