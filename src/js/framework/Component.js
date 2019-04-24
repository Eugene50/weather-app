export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this._render();
  }
  _render() {
    this.host.innerHTML = "";
    const content = this.render();

    if (typeof content === "string") {
      this.host.innerHTML = content;
    } else {
      content
        .map(this._vDomPrototypeElementToHtmlElement)
        .forEach(htmlElement => {
          this.host.appendChild(htmlElement);
        });
    }
  }

  _vDomPrototypeElementToHtmlElement(element) {
    if (typeof element === "string") {
      const htmlElemnt = document.createElement("div");
      htmlElemnt.innerHTML = element;
      return htmlElemnt;
    } else {
      if (typeof element.tag === "function") {
        const container = document.createElement("div");
        new element.tag(container, element.props);
        return container;
      }
      return element;
    }
  }
}


