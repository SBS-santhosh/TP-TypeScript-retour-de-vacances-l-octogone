import { Character } from "./character";
import { ARCHER_ACTIONS } from "../constants/actions.constants";

export class Archer extends Character {
    constructor(name: string) {
        super(name, 100, 50, ARCHER_ACTIONS);
        // Health 100, Speed 50
    }
}
