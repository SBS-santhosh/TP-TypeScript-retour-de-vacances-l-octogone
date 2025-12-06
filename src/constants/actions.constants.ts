import { Action } from "../types/action.type";

export const WARRIOR_ACTIONS: Action[] = [
    { name: "Commit atomique", type: "attack", minDamage: 10, maxDamage: 10 },
    { name: "Destructeur d’intégrité", type: "attack", minDamage: 20, maxDamage: 20 },
    { name: "Interface", type: "defense" }
];

export const MAGE_ACTIONS: Action[] = [
    { name: "Contraste", type: "attack", minDamage: 12, maxDamage: 15 },
    { name: "Alternative", type: "attack", minDamage: 18, maxDamage: 18 }
];

export const ARCHER_ACTIONS: Action[] = [
    { name: "Spécificité", type: "attack", minDamage: 10, maxDamage: 15 },
    { name: "Débordement", type: "attack", minDamage: 20, maxDamage: 20 }
];
