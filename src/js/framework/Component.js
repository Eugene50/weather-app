export default class Component {
  constructor(host, props = {}) {
    this.host = host;   // запомнили хост, чтобы компоненты могли его передавать
    this.props = props;
    this._render();      //метод класса 
  }
  _render() {
    this.host.innerHTML = "";
    const content = this.render();  // метод который есть у компоненты

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
          
          if (element.classList) {
            container.classList.add(...element.classList);
          }
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

          if(element.attributes) {
            element.attributes.forEach(el => {
              if(el.value === undefined) {
                container.setAttribute(el.name, '');
              } else {
                container.setAttribute(el.name, el.value);
              }
            })
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
  };
}
