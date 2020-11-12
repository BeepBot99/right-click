class rightClickMenu {
  constructor(elem) {
    this.consoleDebug = true;
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
 open() {
  }
 close() {
  }
}
