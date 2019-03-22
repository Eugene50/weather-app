export default class Component {
   constructor(host) {
      this.host = host;
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
