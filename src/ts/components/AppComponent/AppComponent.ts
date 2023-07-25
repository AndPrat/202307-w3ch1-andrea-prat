import { characters } from "../../characters/characters.js";
import CharacterComponent from "../CharacterComponent/CharacterComponent.js";
import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "app-container");
    this.render();
  }

  render() {
    this.element.innerHTML = `
     <ul class="characters-list row list-unstyled">
      <li class="col">
      </li>
     </ul> 
     `;

    const charactersListElement =
      this.element.querySelector(".characters-list")!;

    const jaime = new CharacterComponent(charactersListElement, characters[0]);
    jaime.render();
  }
}

export default AppComponent;
