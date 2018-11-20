import CatController from "./components/cat/cat-controller.js";

console.log("Neat this is my app")

class App {
  constructor() {
    this.controllers = {
      catController: new CatController()
    }
  }
}

window.app = new App()