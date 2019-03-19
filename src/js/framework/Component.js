export default class Component {
   constructor(host) {
      this.host = host;
      this._render();
   }
   _render() {
      this.host.innerHTML = "";
      const content = this.render();
      
      if(typeof content === 'string'){
         this.host === content;
      } else {
         alert('Sorry, but something wrong');
      }

   }
}
