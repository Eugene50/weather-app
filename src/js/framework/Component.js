export default class Component {
   constructor(host, props = {}) {
      this.host = host;
      this.props = props;
      this._render();
   }
   _render() {
      this.host.innerHTML = "";
      const content = this.render();
      
      if(typeof content === 'string'){
         this.host.innerHTML = content;
      } else {
         content.map(item => {
            if(typeof item === "string"){
               const htmlElemnt = document.createElement("div");
               htmlElemnt.innerHTML = item;
               return htmlElemnt;
            } else {
               return item;
            }
         }).forEach(htmlElement => {
            this.host.appendChild(htmlElement);
         });
      }
   }
}
