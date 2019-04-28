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
        .map(item => this._vDomPrototypeElementToHtmlElement(item))
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
      if (element.tag) {
        if (typeof element.tag === "function") {
          const container = document.createElement("div");
          new element.tag(container, element.props);
          return container;
        } else {
          //string
          const container = document.createElement(element.tag);
          if (element.content) {
            container.innerHTML = element.content;
          }
          if (element.classList) {
            container.classList.add(...element.classList);
          }
          if (element.children) {
            element.children.forEach(el => {
              const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
              container.appendChild(htmlElement);
            });
          }
          return container;
        }
      }
      return element;
    }
  }
}
