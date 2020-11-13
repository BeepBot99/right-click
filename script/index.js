class rightClickMenu {
  constructor(elem) {
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
  }
 disactivate() {
   this.enabled = "none";
 }
default() {
this.enabled = "default";
}
}
