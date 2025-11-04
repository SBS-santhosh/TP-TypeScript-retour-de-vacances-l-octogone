import { Character } from '../models/character';
import { WARRIOR_ACTIONS } from '../constants/ actions';

export class Warrior extends Character {
  constructor(name: string) {
    // Par défaut on donne 100 PV aux combattants (tu peux ajuster)
    super(name, 100, 80, WARRIOR_ACTIONS );
  }
}