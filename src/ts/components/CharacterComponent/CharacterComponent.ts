import { Advisor } from "../../characters/Advisor/Advisor.js";
import { Fighter } from "../../characters/Fighter/Fighter.js";
import { King } from "../../characters/King/King.js";
import { Squire } from "../../characters/Squire/Squire.js";
import Component from "../Component/Component.js";

class CharacterComponent extends Component {
  character;

  constructor(
    parentElement: Element,
    character: King | Fighter | Squire | Advisor
  ) {
    super(parentElement, "article", "character");

    this.character = character;
  }

  render() {
    this.element.innerHTML = `
      <article class="character">
         <div class="card character__card">
          <img src="img/${this.character.characterData.imageSource}" alt="${this.character.characterData.name} and ${this.character.characterData.family}" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4"> ${this.character.characterData.name} & ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.characterData.age} yrs</li>
                 <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
               </ul>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

export default CharacterComponent;
