import { CharacterData } from "../../types.js";
import { Character } from "../Character/Character.js";

export class Advisor extends Character {
  advises: any;

  constructor(characterData: CharacterData, advises: string) {
    super(characterData);

    if (this.advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate() {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
