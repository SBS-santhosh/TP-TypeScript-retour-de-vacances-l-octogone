import { Character } from '../models/character';
import { ARCHER_ACTIONS } from '../constants/ actions';

export class Archer extends Character {
  constructor(name: string) {
    super(name, 100, 50, ARCHER_ACTIONS);
  }
}
