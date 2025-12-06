import { Character } from "./character";
import { WARRIOR_ACTIONS } from "../constants/actions.constants";

export class Warrior extends Character {
    constructor(name: string) {
        super(name, 100, 80, WARRIOR_ACTIONS);
        // Health 100, Speed 80
    }
}
