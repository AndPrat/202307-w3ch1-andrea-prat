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
     </ul> 
     `;

    const charactersListElement =
      this.element.querySelector(".characters-list")!;

    characters.forEach((character) => {
      const charactersListItem = document.createElement("li");
      charactersListItem.setAttribute("class", "col");
      new CharacterComponent(charactersListItem, character).render();
      charactersListElement.append(charactersListItem);
    });
  }
}

export default AppComponent;
