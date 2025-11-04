import { Character } from '../models/character';
import { MAGE_ACTIONS } from '../constants/ actions';


export class Mage extends Character {
  constructor(name: string) {
    super(name, 100, 60, MAGE_ACTIONS);
  }
}
