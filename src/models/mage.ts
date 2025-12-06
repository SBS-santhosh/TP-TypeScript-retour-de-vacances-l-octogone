import { Character } from "./character";
import { MAGE_ACTIONS } from "../constants/actions.constants";

export class Mage extends Character {
    constructor(name: string) {
        super(name, 100, 60, MAGE_ACTIONS);
        // Health 100, Speed 60
    }
}
