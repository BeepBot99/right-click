console.log("Right click menus powered by right-click");
class rightClickMenu {
  constructor(elem) {
    if (elem) {
      this.element = (document.getElementById(elem) || elem); 
    } else {
      this.element = document.body;
    }
  
    this.consoleDebug = true;
    this.enabled = "custom";
    this.contextMenu = [
      {
        type:"url",
        value:"https://example.com",
        text:"URL"
      },
      {
        type:"javascript",
        value:"alert('Hello, World!')",
        text:"Javascript"
      },
      {
        type:"hr"
      }
    ];
  }
 activate() {
   this.enabled = "custom";
   this.element.addEventListener('contextmenu', function (e) { 
     e.preventDefault(); 
     this.debug("Activating...");
     
}, false);
  }
 disactivate() {
   this.enabled = "none";
 }
default() {
this.enabled = "default";
}
  debug(args) {
    if (this.consoleDebug === true) {
      console.log(args);
    }
  }
  build() {
    let menuElmt = document.createElement("div");
    menuElmt.style.display = "none";
    for (let i = 0; i < this.contextMenu.length; i++)
    {
      let item;
      if (this.contextMenu[i].type === "url") {
        item = `<a href="${this.contextMenu[i].value}">${this.contextMenu[i].text}</a>`;
      } else if (this.contextMenu[i].type = "javascript") {
        item = `<a href="javascript:void(0)" onclick="${this.contextMenu[i].
    }
  }
}
